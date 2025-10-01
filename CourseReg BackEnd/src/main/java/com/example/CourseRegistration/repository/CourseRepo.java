package com.example.CourseRegistration.repository;

import com.example.CourseRegistration.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepo extends JpaRepository<Course,String>{

}
