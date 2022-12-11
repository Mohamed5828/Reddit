import { useState } from "react";
import PostReplayItem from "./PostReplayItem";
import { PageContainer, EmbeddedPage } from "./PostReplay.styled";

const messagesData = [
  {
    aurthor: "Mohamed",
    title: "Greeting",
    time: "10",
    msg: "Hello Hello",
    upvote: "neutral",
    admin: true,
    read: false,
    id: 1,
    block: false,
  },
  {
    aurthor: "Ahmed",
    title: "Mod",
    time: "new Date(2022, 11, 29)",
    msg: "You are Mod",
    upvote: "neutral",
    admin: false,
    read: false,
    id: 2,
    block: false,
  },
];
function PostReplay() {
  const [eachMessage, setEachMessage] = useState(messagesData);
  const Message = eachMessage.map((item) => {
    return (
      <PostReplayItem
        changeMessage={setEachMessage}
        aurthor={item.aurthor}
        title={item.title}
        time={item.time}
        msg={item.msg}
        upvote={item.upvote}
        admin={item.admin}
        read={item.read}
        id={item.id}
        block={item.block}
        key={item.id}
      />
    );
  });
  return (
    <EmbeddedPage>
      <PageContainer>{Message}</PageContainer>
    </EmbeddedPage>
  );
}

export default PostReplay;
