
const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


function studentAverage() {
  return students.reduce((acc, student) => {
    const studentGrades = grades[Object.keys(acc).length];
    const studentGradeAverage = {};
    studentGradeAverage.name = student;
    studentGradeAverage.average = studentGrades.reduce((acc, grade) => acc + grade) / studentGrades.length;
    acc.push(studentGradeAverage);
    return acc;
  }, []);
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);
