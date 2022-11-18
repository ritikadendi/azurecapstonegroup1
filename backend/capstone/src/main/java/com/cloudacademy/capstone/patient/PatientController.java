package com.cloudacademy.capstone.patient;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class PatientController {
	
	@Autowired
	private PatientService patientService;

	@RequestMapping("/patients")
	public List<Patient> getAllPatients() {
		return patientService.getAllPatients();
	}

	@RequestMapping("/patients/{id}")
	public Optional<Patient> getPatient(@PathVariable int id) {
		return patientService.getPatient(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/patients")
	public void addPatient(@RequestBody Patient patient) {
		patientService.addPatient(patient);
	}
	
//	@RequestMapping(method=RequestMethod.PUT, value="/patients/{id}")
//	public void updatePatient(@RequestBody Patient patient, @PathVariable int id) {
//		patientService.updatePatient(id, patient);
//	}
	
	@PutMapping("/patients")
	public void update(@RequestBody Patient patientObj) {
		patientService.addPatient(patientObj);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/patients/{id}")
	public void deletePatient(@PathVariable int id) {
		patientService.deletePatient(id);
	}
	
}
