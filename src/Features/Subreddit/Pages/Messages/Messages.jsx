import Header from "./Components/Header/Header";
import MessageItem from "./Components/MessagesItems/MessageItem";
import MessageBannel from "./Components/MessagesBannel/MessageBannel";
import UserMentions from "./Components/UsernameMentions/UsernameMentions";
import SendAMessage from "./Components/SendMessage/SendMessage";
import SentMessages from "./Layouts/SentMessages/SentMessages";
import Footer from "../../../../Layouts/Footer/Footer";
import { Routes, Route } from "react-router-dom";
function Messages() {
  return (
    <>
    <Header />
      <Routes>
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
          path="/sent"
          element={
            <>
              <SentMessages />
            </>
          }
        />

        {/* <Footer /> */}
      </Routes>
    </>
  );
}

export default Messages;
