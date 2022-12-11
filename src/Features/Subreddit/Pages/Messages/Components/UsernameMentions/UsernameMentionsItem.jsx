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
  MessagesWithBtns,
  Visted,
  AreYouSure,
  BtnWarning,
  ArrowsDiv,
  ArrowUp,
  ArrowDown,
  MessageWithAu,
} from "./UsernameMentions.styled";
import ReportModal from "../ReportModal/ReportModal";
import upVote from "../../Utils/Upvote";
import downVote from "../../Utils/Downvote";

const UsernameMentionItem = ({
  changeMessage,
  aurthor,
  title,
  time,
  msg,
  upvote,
  admin,
  read,
  id,
  block,
}) => {
  function markUnread(id) {
    changeMessage((message) => {
      return message.map((prevState) => {
        return prevState.id === id ? { ...prevState, read: false } : prevState;
      });
    });
  }

  function readed(id) {
    changeMessage((message) => {
      return message.map((prevState) => {
        return prevState.id === id ? { ...prevState, read: true } : prevState;
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


  

  return (
    <OddItems className={id % 2 === 0 ? "even" : ""} key={id}>
      <MessageDetails
        onClick={() => {
          readed(id);
        }}
      >
        <Subject>
          <SubjectText>username mention: {title}</SubjectText>
        </Subject>
        <ArrowsDiv>
          <ArrowUp
            onClick={() => {
              upVote(id, changeMessage, upvote);
            }}
            className={upvote === "up" ? "active" : ""}
          />
          <ArrowDown
            onClick={() => {
              downVote(id, changeMessage, upvote);
            }}
            className={upvote === "down" ? "active" : ""}
          />
        </ArrowsDiv>
        <MessageWithAu>
          <Tagline>
            <Author className={admin ? "admin" : ""}>{aurthor}</Author>
            <TimeTag className={admin ? "active" : ""}>
              <time dateTime="20/10/2022">{time}</time>
            </TimeTag>
          </Tagline>
          <MessagesWithBtns>
            <Visted className={read ? "" : "read-before"}>
              <Msg>{msg}</Msg>
              <ListBtns>
                <Btns>
                  <BtnsLinks>Context</BtnsLinks>
                </Btns>
                <Btns>
                  <BtnsLinks>Full Comments</BtnsLinks>
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
                        markUnread(id);
                      }}
                    >
                      Mark Unread
                    </BtnsLinks>
                  </Btns>
                )}
                <Btns>
                  <BtnsLinks>Replay</BtnsLinks>
                </Btns>
              </ListBtns>
            </Visted>
          </MessagesWithBtns>
        </MessageWithAu>
      </MessageDetails>
    </OddItems>
  );
};
export default UsernameMentionItem;
