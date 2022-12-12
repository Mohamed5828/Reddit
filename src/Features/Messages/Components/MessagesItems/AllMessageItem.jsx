import {
  OddItems,
  ListBtns,
  Btns,
  BtnsLinks,
  Subject,
  SubjectText,
  Msg,
  Tagline,
  Author,
  MessageDetails,
  TimeTag,
  AreYouSure,
  BtnWarning,
  Visted,
} from "./MessageItem.styled";
import ReportModal from "../ReportModal/ReportModal";
import markUnread from "../../Utils/MarkUnread";
import readed from "../../Utils/Read";

const NormalMessageAll = ({
  changeMessage,
  aurthor,
  title,
  time,
  msg,
  admin,
  read,
  id,
  deleted,
  block,
}) => {
  function compareDate(str1) {
    // str1 format should be dd/mm/yyyy. Separator can be anything e.g. / or -. It wont effect
    var dt1 = parseInt(str1.substring(0, 2));
    var mon1 = parseInt(str1.substring(3, 5));
    var yr1 = parseInt(str1.substring(6, 10));
    var date1 = new Date(yr1, mon1 - 1, dt1);
    return date1;
  }
  function toggleDeleteWarning(id) {
    changeMessage((message) => {
      return message.map((prevState) => {
        return prevState.id === id
          ? { ...prevState, delete: !prevState.delete }
          : prevState;
      });
    });
  }
  function toggleBlockWarning(id) {
    changeMessage((message) => {
      return message.map((prevState) => {
        return prevState.id === id
          ? { ...prevState, block: !prevState.block }
          : prevState;
      });
    });
  }
  if (deleted) {
    return;
  }

  return (
    <OddItems className={id % 2 === 0 ? "even" : ""} key={id}>
      <MessageDetails
        onClick={() => {
          readed(id, changeMessage, read);
        }}
      >
        <Subject>
          <SubjectText>{title}:</SubjectText>
        </Subject>
        <Tagline>
          from <Author className={admin ? "admin" : ""}>{aurthor}</Author>
          <TimeTag className={admin ? "active" : ""}>
            <time dateTime={time}>{compareDate(time).toDateString()}</time>
          </TimeTag>
        </Tagline>
        <Visted className={read ? "" : "read-before"}>
          <Msg>{msg}</Msg>
          <ListBtns>
            <Btns>
              <BtnsLinks
                className={deleted ? "active" : ""}
                onClick={() => {
                  toggleDeleteWarning(id);
                }}
              >
                Delete
              </BtnsLinks>
              <AreYouSure className={deleted ? "active" : ""}>
                <BtnWarning> Are You Sure </BtnWarning>
                <BtnsLinks>Yes</BtnsLinks>
                <BtnWarning> / </BtnWarning>
                <BtnsLinks
                  onClick={() => {
                    toggleDeleteWarning(id);
                  }}
                >
                  No
                </BtnsLinks>
              </AreYouSure>
            </Btns>

            {!admin && (
              <Btns>
                <BtnsLinks>
                  <ReportModal />
                </BtnsLinks>
              </Btns>
            )}
            {!admin && (
              <Btns>
                <BtnsLinks
                  className={block ? "active" : ""}
                  onClick={() => {
                    toggleBlockWarning(id);
                  }}
                >
                  Block User
                </BtnsLinks>
                <AreYouSure className={block ? "active" : ""}>
                  <BtnWarning> Are You Sure </BtnWarning>
                  <BtnsLinks>Yes</BtnsLinks>
                  <BtnWarning> / </BtnWarning>
                  <BtnsLinks
                    onClick={() => {
                      toggleBlockWarning(id);
                    }}
                  >
                    No
                  </BtnsLinks>
                </AreYouSure>
              </Btns>
            )}
            {read && (
              <Btns>
                <BtnsLinks
                  onClick={(e) => {
                    e.stopPropagation();
                    markUnread(id, changeMessage, read);
                  }}
                >
                  Mark Unread
                </BtnsLinks>
              </Btns>
            )}
            <Btns>
              <BtnsLinks>Reply</BtnsLinks>
            </Btns>
          </ListBtns>
        </Visted>
      </MessageDetails>
    </OddItems>
  );
};

export default NormalMessageAll;
