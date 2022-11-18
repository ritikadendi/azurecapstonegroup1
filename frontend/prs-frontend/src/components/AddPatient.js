import './style.css';
import { useEffect, useState } from "react";
import { Navigate, useNavigate, Link, useParams } from "react-router-dom";
import patientService from "../services/patient.service";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddPatient = () => {
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const savePatient = (e) => {
    e.preventDefault();

    const patient = { name, birthdate, gender, address, email, id };
    if (id) {
      //update records
      patientService
        .update(patient)
        .then((response) => {
          console.log("Patient data updated successfully", response.data);
          navigate("/home");
        })
        .catch((error) => {
          console.log("Something went wrong!", error);
        });
    } else {
      // create new record
      patientService
        .create(patient)
        .then((response) => {
          console.log("Patient data added successfully", response.data);
          navigate("/home");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      patientService
        .get(id)
        .then((patient) => {
          setName(patient.data.name);
          setBirthdate(patient.data.birthdate);
          setGender(patient.data.gender);
          setAddress(patient.data.address);
          setEmail(patient.data.email);
        })
        .catch((error) => {
          console.log("Something went wrong!", error);
        });
    }
  }, []);

  return (
    <div className="container">
      <h3>Add New Patient</h3>
      <hr />
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-control col-4"
            id="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            placeholder="Enter date of birth"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            placeholder="Enter gender"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter address"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        <div>
          <button className="btn btn-primary" onClick={(e) => savePatient(e)}>
            Save
          </button>
        </div>
        <hr />
        <Link to="/home">Cancel</Link>
      </form>
    </div>
  );
};

export default AddPatient;
