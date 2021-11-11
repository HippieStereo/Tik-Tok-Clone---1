import FollowersColunm from "../components/FollowersColumn";

const Home = () => {
  return (
    <div className="container">
        <div className="followers-column">
          <FollowersColunm />
          </div>
        <div className="feed">
        <h1>Home</h1>
        </div>
        <div className="suggested-box"></div>
    </div>
  );
}

export default Home;
