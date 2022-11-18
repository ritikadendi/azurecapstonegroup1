package com.cloudacademy.capstone.visit;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cloudacademy.capstone.patient.Patient;

@Service
public class VisitService {
	
	@Autowired
	private VisitRepository visitRepository;
	
	private List<Visit> visits;
	
	public List<Visit> getAllVisits(int patientId){
		List<Visit> visits = new ArrayList<>();
		visitRepository.findByPatientId(patientId).forEach(visits::add);
		return visits;
	}
	
	public Optional<Visit> getVisit(int id) {
		return visitRepository.findById(id);
	}
	
	public void addVisit(Visit visit) {
		visitRepository.save(visit);
	}
	
//	public void updateVisit(Visit visit) {
//		visitRepository.save(visit);
//	}
	
	public void updateVisit(int id, Visit visit) {
		for (int i = 0; i < visits.size(); i++) {
			Visit v = visits.get(i);
			if (v.getVisitId() == id) {
				visits.set(i, visit);
				return;
			}
		}
	}
	
	public void deleteVisit(int id) {
		visitRepository.deleteById(id);
	}
	
}
