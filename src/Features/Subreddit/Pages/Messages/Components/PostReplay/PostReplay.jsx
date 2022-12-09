import { useState } from "react";
import { PostReplayItem } from "./PostReplayItem";
import { PageContainer, EmbeddedPage } from "./PostReplay.styled";
import { PostRMessage } from "./PostReplayItem";

function PostReplay() {
  const Message = PostRMessage.map((item) => {
    return (
      <PostReplayItem
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
