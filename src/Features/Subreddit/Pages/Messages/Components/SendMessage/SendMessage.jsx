import {
  Content,
  Spacer,
  FormField,
  FieldDiv,
  Title,
  FieldContent,
  FromSelection,
  TitleDescription,
  Inputs,
  MessageContainer,
  Message,
  SendBtn,
  Heading,
  Page,
  Margin,
  Error,
} from "./SendMessageStyle";
import { useState } from "react";

function SendAMessage() {
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",
  });
  function handleChange(event) {
    const { to, subject, message } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }
  return (
    <Page>
      <Margin>
        <Content>
          <Spacer>
            <Heading>Send A Private Message</Heading>
          </Spacer>
          <FormField>
            <Spacer>
              <FieldDiv>
                <Title>From</Title>
                <FieldContent>
                  <FromSelection>
                    <option value>mohamed</option>
                    <option value>ahmed</option>
                  </FromSelection>
                </FieldContent>
              </FieldDiv>
            </Spacer>
            <Spacer>
              <FieldDiv>
                <Title>To </Title>
                <TitleDescription>
                  (username, or /r/name for that subreddit's moderators)
                </TitleDescription>
                <Inputs
                  type="text"
                  onChange={handleChange}
                  value={formData.to}
                  name="to"
                />
                <Error className={formData.to !== "" ? "" : "active"}>
                  please enter a username
                </Error>
              </FieldDiv>
            </Spacer>
            <Spacer>
              <FieldDiv>
                <Title>Subject</Title>
                <br />
                <Inputs
                  type="text"
                  onChange={handleChange}
                  value={formData.subject}
                  name="subject"
                />
                <Error className={formData.subject !== "" ? "" : "active"}>
                  please enter a subject
                </Error>
              </FieldDiv>
            </Spacer>
            <Spacer>
              <FieldDiv>
                <Title>Message</Title>
                <MessageContainer>
                  <Message
                    type="text"
                    onChange={handleChange}
                    value={formData.message}
                    name="message"
                  />
                  <Error className={formData.message !== "" ? "" : "active"}>
                    we need something here
                  </Error>
                </MessageContainer>
              </FieldDiv>
            </Spacer>
          </FormField>
          <SendBtn type="submit">Send</SendBtn>
        </Content>
      </Margin>
    </Page>
  );
}

export default SendAMessage;
