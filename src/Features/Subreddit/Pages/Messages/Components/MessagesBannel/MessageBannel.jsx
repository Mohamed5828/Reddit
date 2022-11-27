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
  Frame,
  FrameText,
  ExpanCollap,
  MessagesWithBtns,
  ToggleExpan,
  Visted,
} from "./MessageBannelStyle";

const messagesData = [
  {
    aurthor: "Mohamed",
    title: "Greeting",
    time: "idk",
    msg: "Hello Hello",
    expanded: true,
    admin: true,
    read: false,
    id: 1,
  },
  {
    aurthor: "Ahmed",
    title: "Mod",
    time: "idk",
    msg: "You are Mod",
    expanded: true,
    admin: false,
    read: false,
    id: 2,
  },
];
function MessageItem() {
  let date = new Date();
  const [eachMessage, setEachMessage] = useState(messagesData);
  function collapseAll(name) {
    setEachMessage((message) => {
      return message.map((prevState) => {
        return prevState.aurthor === name
          ? { ...prevState, expanded: false }
          : prevState;
      });
    });
  }
  function expandAll(name) {
    setEachMessage((message) => {
      return message.map((prevState) => {
        return prevState.aurthor === name
          ? { ...prevState, expanded: true }
          : prevState;
      });
    });
  }
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
  function handleClick(id) {
    setEachMessage((message) => {
      return message.map((prevState) => {
        return prevState.id === id
          ? { ...prevState, expanded: !prevState.expanded }
          : prevState;
      });
    });
  }

  const Message = eachMessage.map((item) => {
    return (
      <OddItems className={item.id % 2 === 0 ? "even" : ""} key={item.id}>
        <MessageDetails
          onClick={() => {
            readed(item.id);
          }}
        >
          <Subject>
            <Frame>
              <FrameText>{item.title}</FrameText>
            </Frame>
            <SubjectText>{item.title}:</SubjectText>
            <br />
            <ExpanCollap
              onClick={() => {
                expandAll(item.aurthor);
              }}
            >
              expand all
            </ExpanCollap>
            <ExpanCollap
              onClick={() => {
                collapseAll(item.aurthor);
              }}
            >
              collapse all
            </ExpanCollap>
          </Subject>
          <Tagline>
            <ToggleExpan
              onClick={() => {
                handleClick(item.id);
              }}
            >
              {item.expanded ? `[-]` : `[+]`}
            </ToggleExpan>
            from <Author className="admin visted">{item.aurthor}</Author>
            <TimeTag>
              <time dateTime="20/10/2022">{date.toDateString()} </time>
            </TimeTag>
          </Tagline>
          <MessagesWithBtns
            className={item.expanded ? "expanded" : "collapsed"}
          >
            <Visted className={item.read ? "" : "read-before"}>
              <Msg>{item.msg}</Msg>
              <ListBtns>
                <Btns>
                  <BtnsLinks>Permalink</BtnsLinks>
                </Btns>
                <Btns>
                  <BtnsLinks>Delete</BtnsLinks>
                </Btns>
                {!item.admin && (
                  <Btns>
                    <BtnsLinks>Report</BtnsLinks>
                  </Btns>
                )}
                {!item.admin && (
                  <Btns>
                    <BtnsLinks>Block User</BtnsLinks>
                  </Btns>
                )}
                {item.read && (
                  <Btns>
                    <BtnsLinks
                      onClick={(e) => {
                        e.stopPropagation();
                        markUnread(item.id);
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
        </MessageDetails>
      </OddItems>
    );
  });

  return (
    <EmbeddedPage>
      <PageContainer>{Message}</PageContainer>
    </EmbeddedPage>
  );
}

export default MessageItem;
