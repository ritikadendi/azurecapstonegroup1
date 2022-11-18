package com.cloudacademy.capstone.patient;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientService {

	@Autowired
	private PatientRepository patientRepository;
	
	private List<Patient> patients;
	
	public List<Patient> getAllPatients() {
		List<Patient> patients = new ArrayList<>();
		patientRepository.findAll().forEach(patients::add);
		return patients;
	}
	
	public Optional<Patient> getPatient(int id) {
		return patientRepository.findById(id);
	}
	
	public void addPatient(Patient patient) {
		patientRepository.save(patient);
	}
	
	public void updatePatient(int id, Patient patient) {
		//patientRepository.save(patient);
		for (int i = 0; i < patients.size(); i++) {
			Patient p = patients.get(i);
			if (p.getId() == id) {
				patients.set(i, patient);
				return;
			}
		}
	}
	
	public void deletePatient(int id) {
		patientRepository.deleteById(id);
	}
	
}
