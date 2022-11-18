import './style.css';
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import visitService from "../services/visit-service";
import { Link, Navigate, useParams } from "react-router-dom";

const PatientVisits = () => {
  const [visits, setVisits] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    init();
  }, [id]);

  const init = () => {
    visitService
      .getAll(id)
      .then((response) => {
        console.log("Printing the patients visit data", response.data);
        setVisits(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  const handleDelete = (visitId) => {
    visitService
      .remove(id,visitId)
      .then((response) => {
        console.log("Visit deleted successfully", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong!".error);
      });
  };



  return (
    <div className="container">
      <h3 className="text-center">List of Visits</h3>
      <hr />
      <div>
        <Link to={`/add-visit/${id}`} className="btn btn-primary mb-2">
          Add Visit
        </Link>
        <Link to={`/home`} className="btn btn-outline-warning float-right">
         Back
        </Link>

        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Visit Information</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {visits.map((visit) => (
              <tr key={visit.visitId}>
                <td>{visit?.info}</td>
                <td>{visit?.visitDate}</td>
                <td>
                  <div className="float-right">
                  <Link
                    className="btn btn-info ml-2"
                    to={`/patients/${id}/visits/edit/${visit?.visitId}`}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger ml-2"
                    onClick={(e) => {
                      handleDelete(visit.visitId);
                    }}
                  >
                    Delete
                  </button>
                  </div>
                 
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientVisits;