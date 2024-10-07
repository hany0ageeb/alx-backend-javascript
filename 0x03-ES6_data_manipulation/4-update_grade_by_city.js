export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => ({
    id: student.id,
    firstName: student.firstName,
    location: student.location,
    grade: newGrades
      .filter((grade) => grade.studentId === student.id)
      .map((grade) => grade.grade)
      .reduce((pre, current) => {
        if (pre === 'N/A') { return 0 + current; }
        return pre + current;
      }, 'N/A'),
  }));
}
