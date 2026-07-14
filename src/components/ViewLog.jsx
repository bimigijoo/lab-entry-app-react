import { useEffect, useState } from "react";
import axios from "axios";

const ViewLog = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  const fetchLogs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/view-all"
      );

      setLogs(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError("Unable to fetch log entries.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary"></div>
        <p className="mt-2">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger text-center">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">

      <div className="card shadow">

        <div className="card-header bg-success text-white">
          <h3 className="text-center">
            View Lab Log Entries
          </h3>
        </div>

        <div className="card-body">

          {logs.length === 0 ? (

            <div className="alert alert-warning text-center">
              No Log Entries Found
            </div>

          ) : (

            <div className="table-responsive">

              <table className="table table-bordered table-striped table-hover">

                <thead className="table-dark">

                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Semester</th>
                    <th>Course</th>
                    <th>System No</th>
                    <th>Login</th>
                    <th>Logout</th>
                    <th>Date</th>
                  </tr>

                </thead>

                <tbody>

                  {logs.map((log, index) => (

                    <tr key={log._id || index}>

                      <td>{index + 1}</td>
                      <td>{log.name}</td>
                      <td>{log.dept}</td>
                      <td>{log.sem}</td>
                      <td>{log.course}</td>
                      <td>{log.sysNo}</td>
                      <td>{log.logInTime}</td>
                      <td>{log.logOutTime}</td>
                      <td>{log.date}</td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </div>

      </div>

    </div>
  );
};

export default ViewLog;