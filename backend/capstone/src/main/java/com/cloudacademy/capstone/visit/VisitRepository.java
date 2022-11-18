package com.cloudacademy.capstone.visit;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VisitRepository extends JpaRepository<Visit, Integer> {

	public List<Visit> findByPatientId(int patientId);

}
