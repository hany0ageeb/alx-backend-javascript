export default function getStudentIdsSum(studentsArray) {
  return studentsArray.map((student) => student.id).reduce((pre, current) => pre + current, 0);
}
