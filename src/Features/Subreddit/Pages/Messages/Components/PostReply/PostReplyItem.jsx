import { useState } from "react";
import {
  PageContainer,
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
  EmbeddedPage,
  TimeTag,
  MessagesWithBtns,
  Visted,
  AreYouSure,
  BtnWarning,
  ArrowsDiv,
  ArrowUp,
  ArrowDown,
  MessageWithAu,
} from "./PostReply.styled";
import ReportModal from "../ReportModal/ReportModal";

const messagesData = [
  {
    aurthor: "Mohamed",
    title: "Greeting",
    time: new Date(2022, 11, 30),
    msg: "Hello Hello",
    expanded: true,
    admin: true,
    read: false,
    id: 1,
    delete: false,
    block: false,
  },
  {
    aurthor: "Ahmed",
    title: "Mod",
    time: new Date(2022, 11, 29),
    msg: "You are Mod",
    expanded: true,
    admin: false,
    read: false,
    id: 2,
    delete: false,
    block: false,
  },
];

 const PostReplayItem = ({aurthor, title, time, msg, upvote, admin, read, id, block}) =>{

  const [eachMessage, setEachMessage] = useState(messagesData);
  function markUnread(id) {
    setEachMessage((message) => {
      return message.map((prevState) => {
        return prevState.id === id ? { ...prevState, read: false } : prevState;
      });
    });
  }

  function readed(id) {
    setEachMessage((message) => {
      return message.map((prevState) => {
        return prevState.id === id ? { ...prevState, read: true } : prevState;
      });
    });
  }

  function toggleDeleteWarning(id) {
    setEachMessage((message) => {
      return message.map((prevState) => {
        return prevState.id === id
          ? { ...prevState, delete: !prevState.delete }
          : prevState;
      });
    });
  }
  function toggleBlockWarning(id) {
    setEachMessage((message) => {
      return message.map((prevState) => {
        return prevState.id === id
          ? { ...prevState, block: !prevState.block }
          : prevState;
      });
    });
  }

  function downVote(id) {
    setEachMessage((message) => {
      return message.map((prevState) => {
        return prevState.id === id
          ? { ...prevState, upvote: "down" }
          : prevState;
      });
    });
  }
  function upVote(id) {
    setEachMessage((message) => {
      return message.map((prevState) => {
        return prevState.id === id ? { ...prevState, upvote: "up" } : prevState;
      });
    });
  }

  const Message = eachMessage.map((item) => {
    return (
      <OddItems className={id % 2 === 0 ? "even" : ""} key={id}>
        <MessageDetails
          onClick={() => {
            readed(id);
          }}
        >
          <Subject>
            <SubjectText>post replies: {title}</SubjectText>
          </Subject>
          <ArrowsDiv>
            <ArrowUp
              onClick={() => {
                upVote(id);
              }}
              className={upvote === "up" ? "active" : ""}
            />
            <ArrowDown
              onClick={() => {
                downVote(id);
              }}
              className={upvote === "down" ? "active" : ""}
            />
          </ArrowsDiv>
          <MessageWithAu>
            <Tagline>
              <Author className={admin ? "admin" : ""}>
                {aurthor}
              </Author>
              <TimeTag className={admin ? "active" : ""}>
                <time dateTime="20/10/2022">{time.toDateString()}</time>
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
  });
}
export default PostReplayItem;
// export const PostRMessage = PostReplayItem.eachMessage;
// console.log(PostRMessage);
