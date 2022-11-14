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
} from "./Header.style";

function Header() {
  return (
    <Body>
      <HeadPrimary>
        <HeadPrimaryMargin>
          <HeadPrimaryUL>
            <PrimaryLI>
              <PrimaryLinks>Send A Private Message</PrimaryLinks>
            </PrimaryLI>
            <PrimaryLI>
              <PrimaryLinks>Inbox</PrimaryLinks>
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
              <SecondaryLink>All</SecondaryLink>
            </SecondaryLI>
            <SecondaryLI>
              <SecondaryLink>Unread</SecondaryLink>
            </SecondaryLI>
            <SecondaryLI>
              <SecondaryLink>Messages</SecondaryLink>
            </SecondaryLI>
            <SecondaryLI>
              <SecondaryLink>Comment Replies</SecondaryLink>
            </SecondaryLI>
            <SecondaryLI>
              <SecondaryLink>Post Replies</SecondaryLink>
            </SecondaryLI>
            <SecondaryLI>
              <SecondaryLink>Username Mentions</SecondaryLink>
            </SecondaryLI>
          </HeadSecondaryUL>
        </HeadSecondaryMargin>
      </HeadSecondary>
    </Body>
  );
}

export default Header;
