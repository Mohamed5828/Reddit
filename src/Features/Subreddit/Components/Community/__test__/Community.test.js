// import { shallow } from "enzyme";
// import CommunityCardItem from "./CommunityCardItem";
// describe("Community CardI tem", () => {
//   it("this is a test for Community Card Item", () => {
//     expect(
//       shallow(
//         <CommunityCardItem
//           communityIcon="CommunityImage.png"
//           communityID={"t5_imagepro"}
//           communityDescription={
//             "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)"
//           }
//           communityName={"GermanWW2photos"}
//           membersCount={10}
//         />
//       )
//     ).toMatchSnapshot();
//   });
// });
import { async } from "@firebase/util";
import { fireEvent, render, screen } from "@testing-library/react";

import TestingComponent from "Features/Subreddit/TestingComponent";
import Community from "../Community";
describe("CommunityCardItem component", () => {
  // test('renders "Hello World" as a text', () => {
  //   // Arrange
  //   render(<CommunityCardItem />);

  //   // Act
  //   // ... nothing

  //   // Assert
  //   const helloWorldElement = screen.getByText("Hello World!");
  //   expect(helloWorldElement).toBeInTheDocument();
  // });

  it('renders "join" if the button was NOT clicked', () => {
    render(
      <TestingComponent>
        <Community
          img="CommunityImage.png"
          title = {"r/Gaming"}
          index = {1}
          communityID={"1"}
          description={
            "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)"
          }
          communityName={"GermanWW2photos"}
          members={10}
          isJoined={false}
        />
      </TestingComponent>
    );

    const outputElement = screen.getByText("Join");
    expect(outputElement).toBeInTheDocument();
  });

//   test('renders "Joined" if the button was clicked', async () => {
//     // Arrange
//     render(
//       <TestingComponent>
//         <Community
//           img="CommunityImage.png"
//           title = {"r/Gaming"}
//           index = {1}
//           communityID={"1"}
//           description={
//             "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)"
//           }
//           communityName={"GermanWW2photos"}
//           members={10}
//           isJoined={false}
//         />
//       </TestingComponent>
//     );

//     // Act
//     const buttonElement = screen.getByRole("button");
//     await fireEvent.click(buttonElement);
//     // Assert
//     // const outputElement = await screen.getByText("Joined");
//     expect(buttonElement.textContent).toBe("Joined");
//   });

  // test('renders "Leave" if the button was hovered', () => {
  //   // Arrange
  //   render(
  //     <TestingComponent>
  //       <CommunityCardItem
  //         communityIcon="CommunityImage.png"
  //         communityID={"t5_imagepro"}
  //         communityDescription={
  //           "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)"
  //         }
  //         communityName={"GermanWW2photos"}
  //         membersCount={10}
  //       />
  //     </TestingComponent>
  //   );

  //   // Act
  //   const buttonElement = screen.getByRole("button");
  //   userEvent.hover(buttonElement);

  //   // Assert
  //   const outputElement = screen.getByText("Leave");
  //   expect(outputElement).toBeInTheDocument();
  // });
  // test('does not render "Join" if the button was clicked', () => {
  //   // Arrange
  //   render(
  //     <TestingComponent>
  //       <CommunityCardItem
  //         communityIcon="CommunityImage.png"
  //         communityID={"t5_imagepro"}
  //         communityDescription={
  //           "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)"
  //         }
  //         communityName={"GermanWW2photos"}
  //         membersCount={10}
  //         isJoined={true}
  //       />
  //     </TestingComponent>
  //   );

  //   // Act
  //   const buttonElement = screen.queryByRole("button");
  //   userEvent.click(buttonElement);

  //   // Assert
  //   const outputElement = screen.queryByText("Join");
  //   expect(outputElement).toBeNull();
  // });
});