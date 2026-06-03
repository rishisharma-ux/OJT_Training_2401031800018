function getStudent(callback) {
    setTimeout(() => {
        callback({ id: 101, name: "Rishi" });
    }, 1000);
}

function getMarks(studentId, callback) {
    setTimeout(() => {
        callback({ studentId, marks: 85 });
    }, 1000);
}

function getGrade(marks, callback) {
    setTimeout(() => {
        callback("A");
    }, 1000);
}

getStudent((student) => {
    console.log("Student:", student.name);

    getMarks(student.id, (result) => {
        console.log("Marks:", result.marks);

        getGrade(result.marks, (grade) => {
            console.log("Grade:", grade);
        });
    });
});
