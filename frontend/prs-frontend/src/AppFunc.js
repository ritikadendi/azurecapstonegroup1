import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientsList from "./components/PatientsList";
import NotFound from "./components/NotFound";
import AddPatient from "./components/AddPatient";
import PatientVisits from "./components/PatientVisits";
import AddEditVisit from "./components/AddVisit";

import App from './App';
const AppFunc = () =>  {

  return(
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<App/>} />
          <Route exact path="/home" element={<PatientsList/>} />
          <Route exact path="/add" element={<AddPatient/>} />
          <Route exact path="/patients/edit/:id" element={<AddPatient/>} />
          <Route exact path="/patients/:id/visits" element={<PatientVisits/>} />
          <Route exact path="/add-visit/:id" element={<AddEditVisit/>} />
          <Route exact path="/patients/:id/visits/edit/:visitId" element={<AddEditVisit/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default AppFunc;