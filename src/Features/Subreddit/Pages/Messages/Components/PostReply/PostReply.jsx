import { useState } from "react";
import PostReplayItem from "./PostReplyItem";
import { PageContainer, EmbeddedPage } from "./PostReply.styled";
// import { PostRMessage } from "./PostReplyItem";

const messagesData = [
  {
    aurthor: "Mohamed",
    title: "Greeting",
    time: new Date(2022, 11, 30),
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
    time: new Date(2022, 11, 29),
    msg: "You are Mod",
    upvote: "neutral",
    admin: false,
    read: false,
    id: 2,
    block: false,
  },
];

function PostReplay() {
  const Message = messagesData.map((item) => {
    return (
      <PostReplayItem
        key = {item.id.toString()}
        aurthor={item.author}
        title={item.title}
        time={item.time}
        msg={item.msg}
        upvote={item.upvote}
        admin={item.admin}
        read={item.read}
        id={item.id}
        block={item.block}
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
