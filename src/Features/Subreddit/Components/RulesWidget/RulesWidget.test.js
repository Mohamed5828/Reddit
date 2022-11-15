import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Enzyme, { shallow } from "enzyme";
import RulesWidget from "./RulesWidget";
import { SubRedditProvider } from "Features/Subreddit/Contexts/SubRedditProvider";

Enzyme.configure({ adapter: new Adapter() });
describe("widget show rules", () => {
  it("should render without crashing", () => {
    expect(
      shallow(
        <SubRedditProvider>
          <RulesWidget />
        </SubRedditProvider>
      )
    ).toMatchSnapshot();
  });
});
