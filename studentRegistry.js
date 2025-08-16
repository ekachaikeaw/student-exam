// Student Registry — Starter (Object Literal)
// เป้าหมาย: จัดการรายชื่อนักเรียน + คะแนน แบบพื้นฐาน

class Student {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.scores = [];
  }
}

// โครงเก็บข้อมูลหลัก
const students = []; // ตัวอย่างโครงแต่ละคน: { id: "S001", name: "Alice", scores: [95, 88] }

/** เพิ่มนักเรียนใหม่
 * เงื่อนไข: id ต้องไม่ซ้ำ, name ไม่ว่าง
 * ผลลัพธ์: push อ็อบเจ็กต์นักเรียนลงใน students
 */
function addStudent(id, name) {
  // TODO: ตรวจความถูกต้อง + ป้องกัน id ซ้ำ
  if (!name) throw new Error("ชื่อต้องไม่ว่าง");
  for (const student of students) {
    if (student.id === id) throw new Error("ไอดีซํ้า");
  }
  // TODO: สร้างอ็อบเจ็กต์ { id, name, scores: [] } แล้วเพิ่มเข้า students
  const newStudent = new Student(id, name);
  students.push(newStudent);
}

/** ค้นหานักเรียนตาม id
 * พบ → คืนอ็อบเจ็กต์, ไม่พบ → คืน null
 */
function findStudent(id) {
  // TODO: ใช้ .find(...) หรือวิธีใดก็ได้
  const student = students.find((student) => student.id === id);
  return student ? student : null;
}

/** แสดงรายชื่อนักเรียนทั้งหมด
 * รูปแบบ: "S001 - Alice | scores: [95, 88]"
 * ถ้ายังไม่มีข้อมูล ให้พิมพ์ "ยังไม่มีรายชื่อนักเรียน"
 */
function listStudents() {
  // TODO
  if (students.length === 0) console.log("ยังไม่มีรายชื่อนักเรียน");
  students.forEach((student) =>
    console.log(`${student.id} - ${student.name} | scores: ${student.scores}`)
  );
}

/** เพิ่มคะแนนให้คนที่ระบุ id
 * เงื่อนไขคะแนน: เป็น number ระหว่าง 0-100 เท่านั้น
 */
function addScore(id, score) {
  // TODO: หา student แล้วตรวจสอบ score ก่อนค่อย push
  if (0 > score || score > 100) throw new Error("คะแนนต้องไม่น้อยกว่า 0 และไม่มากกว่า 100");
  const student = findStudent(id);
  if (student) student.scores.push(score);
}

/** คำนวณค่าเฉลี่ยคะแนนของ id ที่ระบุ
 * ถ้าไม่พบหรือยังไม่มีคะแนน → คืน 0
 */
function average(id) {
  // TODO: ใช้ .reduce(...) หาผลรวมแล้วหารด้วยจำนวน
  const student = findStudent(id);
  const avgScore = student.scores.reduce((pre, cur) => pre + cur) / student.scores.length;
  return avgScore;
}

/** ลบนักเรียนตาม id
 * คืนค่า: true ถ้าลบสำเร็จ, false ถ้าไม่พบ
 */
function removeStudent(id) {
  // TODO: หา index แล้ว .splice(...) หรือตัวเลือกอื่น
  const index = students.findIndex(student => student.id === id);
  if (index === -1) return false;
  const deleted = students.splice( index, 1); 
  return deleted.length !== 0 ? true : false;
  
}

/** อัปเดตชื่อของนักเรียนตาม id
 * คืนค่า: true ถ้าอัปเดตสำเร็จ, false ถ้าไม่พบ/ชื่อไม่ถูกต้อง
 */
function updateStudentName(id, newName) {
  // TODO
    const student = findStudent(id);
    if (!student) return false;
    if (!newName) return false;
    student.name = newName;
    return true;
}

function getTopScore(scores) {
    if (scores.length === 1) return scores[0];
    const maxOfRest = getTopScore(scores.slice(1));
    return scores[0].avg > maxOfRest.avg ? scores[0] : maxOfRest;
}

function topStudent() {
    const studentAvg = students.map(student => ({ name: student.name, avg: average(student.id)}))
    const theTop = getTopScore(studentAvg);
    return theTop.name;
}

function getGrade(score) {
  if (score >= 80) return "A";
  else if (score >= 70) return "B";
  else if (score >= 60) return "C";
  else if (score >= 50) return "D";
  else return "F";
}
/* ----------------------
   Mini Tests (optional)
   ---------------------- */

// คาดหวังผลลัพธ์เบื้องต้น (นักเรียนลองเปิด/ปิดบรรทัดเหล่านี้เพื่อเช็คงานตัวเอง)
console.log("== Run Mini Tests ==");

// console.log(getTopStudentName([1000, 80, 99]));
try {
  addStudent("S001", "Alice");
  addStudent("S002", "Bob");
  console.log(students);
//   addStudent("S001", "Dup"); // ควรถูกปฏิเสธ (id ซ้ำ)

  addScore("S001", 95);
  addScore("S001", 88);
  addScore("S002", 70);
//   addScore("S002", 120); // ควรถูกปฏิเสธ (คะแนนเกินช่วง)

  listStudents(); // ควรพิมพ์นักเรียน 2 คน พร้อมคะแนน

  console.log("Avg S001 =", average("S001")); // ควร ~ 91.5
  console.log("Update S002 name ->", updateStudentName("S002", "Robert")); // true
//   console.log("Remove S001 ->", removeStudent("S001")); // true
//   console.log("Remove S999 ->", removeStudent("S999")); // false
  console.log("Grade for S001: " + getGrade(average(findStudent("S001").id)))

console.log("Top Student: ", topStudent());
  listStudents(); // เช็คผลหลังลบ
} catch (error) {
  console.log(error.message);
}
