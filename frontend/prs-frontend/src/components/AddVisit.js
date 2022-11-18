import './style.css';
import { useEffect, useState } from "react";
import { Navigate, useNavigate, Link, useParams } from "react-router-dom";
import visitService from "../services/visit-service";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddEditVisit = () => {
  const [info, setInfo] = useState("");
  const [visitDate, setVisitDate] = useState("")
  const navigate = useNavigate();
  const { id,visitId } = useParams();

  const savePatient = (e) => {
    e.preventDefault();

  
    if (visitId) {
      //update records
      const visitData = {visitId,visitDate,info,patient:id}
      visitService
        .update(id,visitId,visitData)
        .then((response) => {
          console.log("Patient data updated successfully", response.data);
          navigate(`/patients/${id}/visits`);
        })
        .catch((error) => {
          console.log("Something went wrong!", error);
        });
    } else {
      // create new record
      const visitInfo = {info,visitDate}
      visitService
        .create(id,visitInfo)
        .then((response) => {
          console.log("Patient data added successfully", response.data);
          navigate(`/patients/${id}/visits`);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

 useEffect(() => {
    if (visitId && id) {
      visitService
        .get(id,visitId)
        .then((patient) => {
          setInfo(patient.data.info);
          setVisitDate(patient.data.visitDate);
        })
        .catch((error) => {
          console.log("Something went wrong!", error);
        });
    }
  }, [visitId,id]);

  return (
    <div className="container">
    {visitId ? <h3>Edit Visit Data</h3> : <h3>Add New Visit</h3>}
      <hr />
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="name"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            placeholder="Enter visit info"
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-control col-4"
            id="birthdate"
            value={visitDate}
            onChange={(e) => setVisitDate(e.target.value)}
            placeholder="Enter date of birth"
          />
        </div>
        <div>
          <button className="btn btn-primary" onClick={(e) => savePatient(e)}>
            Save
          </button>
        </div>
        <hr />
        <Link to={`/patients/${id}/visits`}>Cancel</Link>
      </form>
    </div>
  );
};

export default AddEditVisit;
