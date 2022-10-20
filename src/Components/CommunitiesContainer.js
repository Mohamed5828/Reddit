import Community from "./Community";
import data from "./data";

export default function Container() {
  const communities = data.map((community) => {
    return (
      <li>
        <Community
          key={community.id}
          img={community.coverImg}
          title={community.title}
          isJoined={community.isJoined}
        />
      </li>
    );
  });
  return (
    <div className="community-container">
      <div className="all-communities">
        <div className="community-header">
          <h3>Today's Top Growing Communities</h3>
        </div>
        <ol>{communities}</ol>
      </div>
    </div>
  );
}
