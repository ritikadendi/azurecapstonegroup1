package com.cloudacademy.capstone.visit;

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

import com.cloudacademy.capstone.patient.Patient;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class VisitController {
	
	@Autowired
	private VisitService visitService;
	
	@RequestMapping("/patients/{id}/visits")
	public List<Visit> getAllVisits(@PathVariable int id) {
		return visitService.getAllVisits(id);
	}
	
	@RequestMapping("/patients/{patientId}/visits/{id}")
	public Optional<Visit> getVisit(@PathVariable int id) {
		return visitService.getVisit(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/patients/{patientId}/visits")
	public void addVisit(@RequestBody Visit visit, @PathVariable int patientId) {
		visit.setPatient(new Patient(patientId, "", "", "", "", ""));
		visitService.addVisit(visit);
	}
	
//	@RequestMapping(method=RequestMethod.PUT, value="/patients/{patientId}/visits/{id}")
//	public void updateVisit(@RequestBody Visit visit, @PathVariable int patientId, @PathVariable int id) {
//		visit.setPatient(new Patient(patientId, ""));
//		visitService.updateVisit(visit);
//	}
	
	@PutMapping("/patients/{patientId}/visits/{id}")
	public void update(@RequestBody Visit visitObj,@PathVariable int patientId) {
		visitObj.setPatient(new Patient(patientId, "", "", "", "", ""));
		visitService.addVisit(visitObj);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="patients/{patientId}/visits/{id}")
	public void deleteVisit(@PathVariable int id) {
		visitService.deleteVisit(id);
	}

}
