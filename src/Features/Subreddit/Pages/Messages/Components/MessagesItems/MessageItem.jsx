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
} from "./MessageItemStyle";

const messagesData = [
  {
    aurthor: "Mohamed",
    title: "Greeting",
    time: "idk",
    msg: "Hello Hello",
    id: 1,
  },
  {
    aurthor: "Ahmed",
    title: "Mod",
    time: "idk",
    msg: "You are Mod",
    id: 2,
  },
];
function MessageItem() {
  let date = new Date();
  const Message = messagesData.map((item) => {
    return (
      <OddItems className={item.id % 2 === 0 ? "even" : ""} key={item.id}>
        <MessageDetails>
          <Subject>
            <SubjectText>{item.title}:</SubjectText>
          </Subject>
          <Tagline>
            from <Author className="admin visted">{item.aurthor}</Author>
            <TimeTag>
              <time dateTime="20/10/2022">{date.toDateString()} </time>
            </TimeTag>
          </Tagline>
          <Msg>{item.msg}</Msg>
          <ListBtns>
            <Btns>
              <BtnsLinks>Permalink</BtnsLinks>
            </Btns>
            <Btns>
              <BtnsLinks>Delete</BtnsLinks>
            </Btns>
            <Btns>
              <BtnsLinks>Rport</BtnsLinks>
            </Btns>
            <Btns>
              <BtnsLinks>Block User</BtnsLinks>
            </Btns>
            <Btns>
              <BtnsLinks>Mark Unread</BtnsLinks>
            </Btns>
            <Btns>
              <BtnsLinks>Replay</BtnsLinks>
            </Btns>
          </ListBtns>
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
