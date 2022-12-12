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

const SentMessageItem = ({ id, subject, author, msg, time }) => {
  function compareDate(str1) {
    // str1 format should be dd/mm/yyyy. Separator can be anything e.g. / or -. It wont effect
    var dt1 = parseInt(str1.substring(0, 2));
    var mon1 = parseInt(str1.substring(3, 5));
    var yr1 = parseInt(str1.substring(6, 10));
    var date1 = new Date(yr1, mon1 - 1, dt1);
    return date1;
  }

  return (
    <OddItems className={id % 2 === 0 ? "even" : ""} key={id}>
      <MessageDetails>
        <Subject>
          <SubjectText>{subject}:</SubjectText>
        </Subject>
        <Tagline>
          to <Author>{author}</Author>
          <TimeTag>
            <time dateTime={time}>{compareDate(time).toDateString()}</time>
          </TimeTag>
        </Tagline>
        <Msg>{msg}</Msg>
      </MessageDetails>
    </OddItems>
  );
};

export default SentMessageItem;
