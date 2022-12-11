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
  } from "./SentMessageItem.styled";

const SentMessageItem = ({id, subject, author, msg, time})=>{


    return (
        <OddItems className={id % 2 === 0 ? "even" : ""} key={id}>
          <MessageDetails
          >
            <Subject>
              <SubjectText>{subject}:</SubjectText>
            </Subject>
            <Tagline>
              from <Author className="admin visted">{author}</Author>
              <TimeTag>
                <time dateTime="20/10/2022">{time.toDateString()} </time>
              </TimeTag>
            </Tagline>
              <Msg>{msg}</Msg>
              <ListBtns>
                <Btns>
                  <BtnsLinks>Permalink</BtnsLinks>
                </Btns>
              </ListBtns>
          </MessageDetails>
        </OddItems>
      );
}


export default SentMessageItem;
