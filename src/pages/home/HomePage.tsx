import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      HOME PAGE
      <p>
        <Link to="/login">Login Page</Link>
      </p>
    </div>
  );
};

export default HomePage;
