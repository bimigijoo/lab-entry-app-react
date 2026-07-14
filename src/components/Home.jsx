import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">

      <div className="text-center">

        <h1 className="display-4 fw-bold">
          Lab Entry Log System
        </h1>

        <p className="lead mt-3">
          Student Laboratory Entry and Exit Records
        </p>

        <div className="mt-4">

          <Link
            to="/add-lab"
            className="btn btn-primary me-3"
          >
            Add Log Entry
          </Link>

          <Link
            to="/view-all"
            className="btn btn-success"
          >
            View Log Entries
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Home;