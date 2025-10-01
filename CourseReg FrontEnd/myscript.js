function showCourses(){
    alert("These are your courses")
    fetch("http://localhost:8080/courses") 
    .then((response) => response.json())
    .then((courses)=>{
        const dataTable = document.getElementById("coursetable")

        courses.forEach(courses =>{
            var row = `<tr>
            <td>${courses.courseId}</td>
            <td>${courses.courseName}</td>
            <td>${courses.trainer}</td>
            <td>${courses.durationInWeeks}</td>
            </tr>`

            dataTable.innerHTML+=row;
        });
    });
}

function showEnrolledStudents(){
    fetch("http://localhost:8080/courses/enrolled") //API End point
    .then((response) => response.json()) //Http response into json object
    .then((students) => {
        const dataTable = document.getElementById("enrolledtable")

        students.forEach(student => {
            var row = `<tr>
            <td>${student.name}</td>
            <td>${student.emailId}</td>
            <td>${student.courseName}</td>
            </tr>`

            dataTable.innerHTML+=row;
        });
    });
}