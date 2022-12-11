import Header from "../Components/Header/Header";
import MessageItem from "../Layouts/AllMessages/AllMessage";
import MessageBannel from "../Layouts/Panel/MessagePanel";
import UserMentions from "../Layouts/Mentions/UsernameMentions";
import SendAMessage from "../Components/SendMessage/SendMessage";
import SentMessages from "../Layouts/SentMessages/SentMessages";
import Unread from "../Layouts/Unread/Unread";
import Footer from "Layouts/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import PostReplay from "../Layouts/Posts/PostReply";
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
        
        <Route path="/inbox" element={ <MessageItem /> }>
          <Route path="/inbox/all" element={<MessageItem /> }/>
          <Route path="/inbox/messages" element={<MessageBannel /> }/>
          <Route path="/inbox/mentions"element={ <UserMentions /> } />
          <Route path="/inbox/unread" element={ <Unread /> }/>
          <Route path="/inbox/selfreply" element={  <PostReplay /> }/>
        </Route>

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