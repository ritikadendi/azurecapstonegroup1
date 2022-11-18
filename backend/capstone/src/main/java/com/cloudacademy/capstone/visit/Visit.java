package com.cloudacademy.capstone.visit;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import com.cloudacademy.capstone.patient.Patient;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Visit {
	
	@Id
	
	@GeneratedValue
	private int visitId;
	private String visitInfo;
	private String visitDate;

	@ManyToOne
	@JsonIgnore
	private Patient patient;
	
	public Visit() {
	
	}
	
	public Visit(int id, String info, String date, int patientId) {
		super();
		this.visitId = id;
		this.visitInfo = info;
		this.visitDate = date;
		this.patient = new Patient(patientId, "", "", "", "", "");
	}
	
	public int getVisitId() {
		return visitId;
	}
	
	public void setVisitId(int visitId) {
		this.visitId = visitId;
	}
	
	public String getInfo() {
		return visitInfo;
	}
	
	public void setInfo(String visitInfo) {
		this.visitInfo = visitInfo;
	}
	
	public Patient getPatient() {
		return patient;
	}
	
	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public String getVisitDate() {
		return visitDate;
	}

	public void setVisitDate(String visitDate) {
		this.visitDate = visitDate;
	}

}