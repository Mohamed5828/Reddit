import { useState } from "react";
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
    Visted,
  } from "../MessagesItems/MessageItem.styled";

const messagesData = [
    {
      aurthor: "Mohamed",
      title: "Greeting",
      time: new Date(2022, 11, 30),
      msg: "Hello Hello",
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
      admin: false,
      read: false,
      id: 2,
      delete: false,
      block: false,
    },
];

const SentMessageItem = ({id, subject, author, msg, read, time})=>{


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

