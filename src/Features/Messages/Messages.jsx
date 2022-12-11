import Header from "./Components/Header/Header";
import MessageItem from "./Components/MessagesItems/AllMessage";
import MessageBannel from "./Components/MessagesPanel/MessagePanel";
import UserMentions from "./Components/UsernameMentions/UsernameMentions";
import SendAMessage from "./Components/SendMessage/SendMessage";
import SentMessages from "./Layouts/SentMessages/SentMessages";
import Unread from "./Layouts/Unread/Unread";
import Footer from "../../../../Layouts/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import PostReplay from "./Components/PostReply/PostReply";
function Messages() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MessageItem />
            </>
          }
        />
        <Route
          path="/inbox"
          element={
            <>
              <MessageItem />
            </>
          }
        />
        <Route
          path="/messages"
          element={
            <>
              <MessageBannel />
            </>
          }
        />
        <Route
          path="/mentions"
          element={
            <>
              <UserMentions />
            </>
          }
        />
        <Route
          path="/compose"
          element={
            <>
              <SendAMessage />
            </>
          }
        />
        <Route
          path="/selfreply"
          element={
            <>
              <PostReplay />
            </>
          }
        />
        <Route
          path="/sent"
          element={
            <>
              <SentMessages />
            </>
          }
        />
        <Route
          path="/unread"
          element={
            <>
              <Unread />
            </>
          }
        />

        {/* <Footer /> */}
      </Routes>
    </>
  );
}

export default Messages;