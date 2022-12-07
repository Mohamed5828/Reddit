import { useState } from "react";
import SentMessageItem from "../../Components/SentMessageItem/SentMessageItem";
import { EmbeddedPage, PageContainer } from "../../Components/MessagesBannel/MessageBannel.styled";
const messagesData = [
    {
      author: "Mohamed",
      title: "Greeting",
      time: new Date(2022, 11, 30),
      text: "Hello Hello",
      read: false,
      id: 1,
    },
    {
      author: "Ahmed",
      title: "Mod",
      time: new Date(2022, 11, 29),
      text: "You are Mod",
      read: false,
      id: 2,
    },
    {
      author: "Jacob",
      title: "Broken",
      time: new Date(2022, 11, 29),
      text: "It Is Broken Now",
      read: false,
      id: 3,
    },
    {
      author: "Joanne",
      title: "Greeting",
      time: new Date(2022, 11, 29),
      text: "Henlo",
      read: false,
      id: 4,
    },
    {
      author: "Arabella",
      title: "Hmmmm...",
      time: new Date(2022, 11, 29),
      text: "Hi.",
      read: false,
      id: 5,
    },
];

const SentMessages = ()=>{
const [eachMessage, setEachMessage] = useState(messagesData);

const Message = eachMessage.map((item) => {
  return(
    <SentMessageItem
      id = {item.id}
      author = {item.author}
      subject = {item.title}
      time = {item.time}
      read = {item.read}
      msg = {item.text}
    />
  )
});

return (
  <EmbeddedPage>
    <PageContainer>{Message}</PageContainer>
  </EmbeddedPage>
);

}

export default SentMessages;