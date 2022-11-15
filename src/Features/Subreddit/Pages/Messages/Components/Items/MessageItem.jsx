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
} from "./MessageItem.style";

function MessageItem() {
  let date = new Date();

  return (
    <PageContainer>
      <OddItems>
        <MessageDetails>
          <Subject>
            <SubjectText>Greeting:</SubjectText>
          </Subject>
          <Tagline>
            from <Author>mohamed</Author>
            <time dateTime="20/10/2022">{date.toDateString()} </time>
          </Tagline>
          <Msg>Hello</Msg>
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
    </PageContainer>
  );
}

export default MessageItem;
