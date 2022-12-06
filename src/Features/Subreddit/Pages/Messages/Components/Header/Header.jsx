import {
  HeadPrimary,
  HeadPrimaryMargin,
  HeadPrimaryUL,
  PrimaryLI,
  PrimaryLinks,
  HeadSecondary,
  HeadSecondaryMargin,
  HeadSecondaryUL,
  SecondaryLI,
  SecondaryLink,
  Body,
} from "./HeaderStyle";

function Header() {
  return (
    <Body>
      <HeadPrimary>
        <HeadPrimaryMargin>
          <HeadPrimaryUL>
            <PrimaryLI>
              <PrimaryLinks to={`/message/compose`}>
                Send A Private Message
              </PrimaryLinks>
            </PrimaryLI>
            <PrimaryLI>
              <PrimaryLinks to={`/message/inbox`}>Inbox</PrimaryLinks>
            </PrimaryLI>
            <PrimaryLI>
              <PrimaryLinks>Sent</PrimaryLinks>
            </PrimaryLI>
          </HeadPrimaryUL>
        </HeadPrimaryMargin>
      </HeadPrimary>
      <HeadSecondary>
        <HeadSecondaryMargin>
          <HeadSecondaryUL>
            <SecondaryLI>
              <SecondaryLink to={`/message/inbox`}>All</SecondaryLink>
            </SecondaryLI>
            <SecondaryLI>
              <SecondaryLink>Unread</SecondaryLink>
            </SecondaryLI>
            <SecondaryLI>
              <SecondaryLink to={`/message/messages`}>Messages</SecondaryLink>
            </SecondaryLI>
            <SecondaryLI>
              <SecondaryLink>Comment Replies</SecondaryLink>
            </SecondaryLI>
            <SecondaryLI>
              <SecondaryLink>Post Replies</SecondaryLink>
            </SecondaryLI>
            <SecondaryLI>
              <SecondaryLink to={`/message/mentions`}>
                Username Mentions
              </SecondaryLink>
            </SecondaryLI>
          </HeadSecondaryUL>
        </HeadSecondaryMargin>
      </HeadSecondary>
    </Body>
  );
}

export default Header;
