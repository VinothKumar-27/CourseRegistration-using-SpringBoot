package com.example.CourseRegistration.repository;

import com.example.CourseRegistration.model.CourseRegistry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRegistryRepo extends JpaRepository<CourseRegistry , Integer> {

}
