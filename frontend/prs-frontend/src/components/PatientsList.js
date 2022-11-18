import './style.css';
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import patientService from "../services/patient.service";
import { Link } from "react-router-dom";

const PatientsList = () => {

const [patients, setPatients] = useState([]);

useEffect(() => {
  init();
}, [])

const init = () => {
    patientService.getAll()
    .then(response => {
        console.log('Printing the patients data', response.data);
        setPatients(response.data);
    })
    .catch(error => {
        console.log('Something went wrong', error);
    })
}

const handleDelete = id => {
    patientService.remove(id)
        .then(response => {
            console.log('Patient deleted successfully', response.data);
            init();
        }).catch(error => {
            console.log('Something went wrong!'. error);
        })
}

  return ( 
    <div className="container">
      <h3  className="text-center">List of Patients</h3>
      <hr/>
      <div>
        <Link to="/add" className="btn btn-primary mb-2">Add Patient</Link>
        <Link to= "/" className="btn btn-outline-warning float-right">Logout</Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Birthdate</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              patients.map(patient =>(
                <tr key={patient.id}>
                  <td>{patient.name}</td>
                  <td>{patient.birthdate}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.address}</td>
                  <td>{patient.email}</td>
                  <td>
                    <Link className="btn btn-info float-left" to={`/patients/${patient.id}/visits/`}>View Visits</Link>
                    <button className="btn btn-danger float-right" onClick={(e) => {
                        handleDelete(patient.id)
                    }}>Delete</button>
                    <Link className="btn btn-info float-right mr-2" to={`/patients/edit/${patient.id}`}>Update</Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
   );
}
 
export default PatientsList;