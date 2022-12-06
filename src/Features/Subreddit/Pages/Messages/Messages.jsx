import Header from "./Components/Header/Header";
import MessageItem from "./Components/MessagesItems/MessageItem";
import MessageBannel from "./Components/MessagesBannel/MessageBannel";
import UserMentions from "./Components/UsernameMentions/UsernameMentions";
import SendAMessage from "./Components/SendMessage/SendMessage";
import Footer from "../../../../Layouts/Footer/Footer";
import { Routes, Route } from "react-router-dom";
function Messages() {
  return (
    <>
      <Routes>
        <Route
          path="/inbox"
          element={
            <>
              <Header />
              <MessageItem />
            </>
          }
        />
        <Route
          path="/messages"
          element={
            <>
              <Header />
              <MessageBannel />
            </>
          }
        />
        <Route
          path="/mentions"
          element={
            <>
              <Header />
              <UserMentions />
            </>
          }
        />
        <Route
          path="/compose"
          element={
            <>
              <Header />
              <SendAMessage />
            </>
          }
        />

        {/* <Footer /> */}
      </Routes>
    </>
  );
}

export default Messages;
