# Day 1: แนะนำการเขียนโปรแกรมด้วย JavaScript

## วัตถุประสงค์การเรียนรู้ (Learning Outcomes)

เมื่อจบบทเรียนวันนี้ คุณจะสามารถ:

* อธิบายแนวคิดพื้นฐานของการเขียนโปรแกรม เช่น ตัวแปร (variables), ชนิดข้อมูล (data types), และการควบคุมลำดับการทำงาน (control flow)
* เขียนโค้ด JavaScript เบื้องต้นโดยใช้ `let`, `const` และตัวดำเนินการ (operators) หลายรูปแบบ
* ใช้เงื่อนไข `if/else` และลูป `for`, `while` เพื่อควบคุมการทำงานของโปรแกรม
* ประกาศและเรียกใช้ function เพื่อจัดระเบียบและนำโค้ดกลับมาใช้ซ้ำ
* สร้างและแก้ไขอ็อบเจ็กต์อย่างง่าย และเข้าใจบทบาทของอ็อบเจ็กต์ในการแทนสิ่งต่าง ๆ รอบตัว
* อธิบายแนวคิดพื้นฐานของคลาส (classes) และอินสแตนซ์ (instances) ใน JavaScript และความสัมพันธ์กับอ็อบเจ็กต์

> เนื้อหาที่สอนทั้งหมด จำเป็นต้องทบทวนและเข้าใจให้ได้ทั้งหมด เพราะจะไม่สามารถเรียนเรื่องถัดๆไปที่เกี่ยวข้องได้เลย ถ้ามีส่วนไหนที่ไม่เข้าใจ

> คำเฉพาะ ควรจำได้อย่างน้อย 80% เพราะจำเป็นสำหรับการอ่าน Documents

## Concept Notes

### JavaScript Essentials: Variables & Data Types

**ตัวแปร = กล่องติดป้ายสำหรับเก็บข้อมูล**

* `let`: ค่าถูกเปลี่ยนใหม่ภายหลังได้ (กล่องที่เปิดหยิบ/ใส่ได้)
* `const`: ค่าคงที่ เปลี่ยนใหม่ไม่ได้หลังประกาศ (กล่องล็อก—ใส่แล้วอยู่ยาว) → *ใช้ `const` เป็นค่าเริ่มต้นเสมอ ถ้าไม่จำเป็นต้องเปลี่ยน*

**ชนิดข้อมูล (Data Types)**

* **Primitive:** `string` (ข้อความ), `number` (ตัวเลขจำนวนเต็ม/ทศนิยม), `boolean` (จริง/เท็จ), `undefined` (ประกาศแล้วแต่ยังไม่กำหนดค่า), `null` (ตั้งใจให้ “ว่าง”)
* **Object types:** โครงสร้างข้อมูลที่เก็บค่าหลายอย่างรวมกันและพฤติกรรม (จะลงลึกในภายหลัง)

### JavaScript Essentials: Operators (ตัวดำเนินการ)

* **คำนวณ:** `+`, `-`, `*`, `/`, `%`
* **กำหนดค่า:** `=`, `+=`, `-=`, …
* **เปรียบเทียบ:** ให้ผลเป็น boolean

  * หลีกเลี่ยง `==` / `!=` (เทียบแบบหลวม)
  * ใช้ `===` / `!==` (เทียบแบบเข้มงวด ชนิดต้องตรงด้วย)
  * `>`, `<`, `>=`, `<=`
* **ตรรกะ:** `&&` (AND), `||` (OR), `!` (NOT)

### JavaScript Essentials: Control Flow (การควบคุมลำดับ)

* **เงื่อนไข `if/else`:**
```js
if (ฝนตกไหม) {
  กางร่ม
} else {
  เดินชิล
}
```

  * ใช้ `else if` เมื่อตรวจหลายเงื่อนไข
```js
if (ฝนตกไหม) {
  กางร่ม
} else if (แดดออก) {
  กางร่ม
} else if (หิมะตก) {
  ใส่เสื้อกันหนาว
} else {
  เดินชิล
}
```
* **ลูป `for`, `while`:** ทำซ้ำ

  * `for` เหมาะกับจำนวนรอบที่รู้แน่นอน
  * `while` เหมาะกับเงื่อนไขที่ต้องตรวจไปเรื่อย ๆ
  * `break` ออกลูปทันที, `continue` ข้ามรอบนี้ไปอีกรอบ

### Functions

บล็อกโค้ดที่นำกลับมาใช้ซ้ำได้เพื่อทำงานเฉพาะอย่าง

* **การประกาศ (declaration)** = เขียนสูตรอาหาร
* **พารามิเตอร์ (parameters)** = วัตถุดิบ
* **ค่าที่คืน (return value)** = จานที่เสิร์ฟ

### Objects & แนวคิด OOP ใน JavaScript

* **Object literal:** เช่น “รถคันนี้ ,สีแดง, มี 4 ประตู”

  * **Properties** = ข้อมูลของ object เช่น สีแดง, มี 4 ประตู
  * **Methods** = function ที่อยู่ใน object เช่น เบรค, เปิดไฟ
* **Classes:** พิมพ์เขียว

  * **Instances:** รถแต่ละคันที่ผลิตตามแบบ

---

## ตัวอย่างโค้ด (Code Examples)

### Variables (`let` vs `const`) & Data Types

```js
// let: เปลี่ยนค่าได้
let userName = "Alice";
console.log("Initial userName:", userName); // Output: Initial userName: Alice

userName = "Bob"; // เปลี่ยนค่า
console.log("Updated userName:", userName); // Output: Updated userName: Bob

// const: ค่าคงที่ เปลี่ยนไม่ได้
const appName = "My awesome app";
console.log("App name:", appName); // Output: App name: My awesome app
// appName = "New App"; // ❌ Error: Assignment to constant variable.

// ชนิดข้อมูล (Data Types)
let age = 30;              // number
let greeting = "Hello";    // string
let isStudent = true;      // boolean
let price;                 // undefined (ประกาศแล้วแต่ยังไม่กำหนดค่า)
let selectedColor = null;  // null (ตั้งใจให้ว่าง)

console.log(typeof age);          // "number"
console.log(typeof greeting);     // "string"
console.log(typeof isStudent);    // "boolean"
console.log(typeof price);        // "undefined"
console.log(typeof selectedColor); // "object" (ลักษณะเฉพาะของ JS)
```

### Operators

```js
const a = 10;
const b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1

let x = 5;
x += 2; // x = 7
console.log(x); // 7

console.log(5 === "5"); // false (ชนิดต่าง)
console.log(5 == "5");  // true  (เทียบแบบหลวม—เลี่ยง)
console.log(5 !== 6);   // true
console.log(a > b);     // true

console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false
```

### Control Flow (if/else, for, while)

```js
// if/else
const score = 78;
if (score >= 80) {
  console.log("A");
} else if (score >= 70) {
  console.log("B");
} else {
  console.log("C");
}
// Output: "B"

// for
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // ข้าม 3
  console.log("i =", i);
}
// Output: 1, 2, 4, 5

// while
let n = 3;
while (n > 0) {
  console.log("n =", n);
  n--;
}
// Output: 3, 2, 1
```

### Functions

```js
// ประกาศฟังก์ชันแบบปกติ
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5

// ฟังก์ชันแบบลูกศร (arrow function)
const toUpper = (text) => text.toUpperCase();
console.log(toUpper("hello")); // "HELLO"

// pure function: ไม่มีผลข้างเคียง
const double = (n) => n * 2;

// impure function: มีผลข้างเคียง (เช่น แก้ไขตัวแปรภายนอก)
let total = 0;
function addToTotal(amount) {
  total += amount; // แก้ไขสถานะภายนอก
}
addToTotal(5);
console.log(total); // 5
```

### Objects, Classes & Encapsulation

```js
// Object literal
const student = {
  id: "S001",
  name: "Alice",
  age: 18,
  greet() {
    console.log(`Hi, I'm ${this.name}.`);
  },
};
student.greet(); // Hi, I'm Alice.

// Class (พิมพ์เขียว) + Encapsulation (ซ่อนรายละเอียดภายในบางส่วน)
class Student {
  #scores = []; // field ส่วนตัว (private) — เข้าถึงภายนอกไม่ได้โดยตรง

  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  addScore(score) {
    if (typeof score === "number" && score >= 0 && score <= 100) {
      this.#scores.push(score);
    }
  }

  getAverage() {
    if (this.#scores.length === 0) return 0;
    const sum = this.#scores.reduce((acc, cur) => acc + cur, 0);
    return sum / this.#scores.length;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} (${this.id}).`);
  }
}

const s1 = new Student("S002", "Bob");
s1.addScore(80);
s1.addScore(90);
s1.introduce();                // Hi, I'm Bob (S002).
console.log(s1.getAverage());  // 85
// s1.#scores  // ❌ Error: private field เข้าถึงตรง ๆ ไม่ได้
```

---

## Guided Lab (45 นาที): Student Registry

**สิ่งที่ต้องทำ**

1. ประกาศอาเรย์ `students` เพื่อเก็บอ็อบเจ็กต์นักเรียน
2. สร้างฟังก์ชัน:

   * `addStudent(id, name)` → เพิ่มนักเรียนใหม่ (ใช้ `const` สำหรับอ็อบเจ็กต์, ตรวจไม่ให้ id ซ้ำ)
   * `findStudent(id)` → คืนอ็อบเจ็กต์นักเรียนตาม `id` (หรือ `null` ถ้าไม่เจอ)
   * `listStudents()` → แสดงรายชื่อนักเรียนทั้งหมด
3. เพิ่มคุณสมบัติ: คะแนน (`scores`) และเมธอดคำนวณค่าเฉลี่ย (จะใช้ object literal หรือ class ก็ได้)
4. ทดสอบ: เพิ่มนักเรียน 2–3 คน, บันทึกคะแนน, แสดงผล

**สตาร์ทเตอร์โค้ด**

```js
// Student Registry — Starter (Object Literal)
// เป้าหมาย: จัดการรายชื่อนักเรียน + คะแนน แบบพื้นฐาน

// โครงเก็บข้อมูลหลัก
const students = []; // ตัวอย่างโครงแต่ละคน: { id: "S001", name: "Alice", scores: [95, 88] }

/** เพิ่มนักเรียนใหม่
 * เงื่อนไข: id ต้องไม่ซ้ำ, name ไม่ว่าง
 * ผลลัพธ์: push อ็อบเจ็กต์นักเรียนลงใน students
 */
function addStudent(id, name) {
  // TODO: ตรวจความถูกต้อง + ป้องกัน id ซ้ำ
  // TODO: สร้างอ็อบเจ็กต์ { id, name, scores: [] } แล้วเพิ่มเข้า students
}

/** ค้นหานักเรียนตาม id
 * พบ → คืนอ็อบเจ็กต์, ไม่พบ → คืน null
 */
function findStudent(id) {
  // TODO: ใช้ .find(...) หรือวิธีใดก็ได้
}

/** แสดงรายชื่อนักเรียนทั้งหมด
 * รูปแบบ: "S001 - Alice | scores: [95, 88]"
 * ถ้ายังไม่มีข้อมูล ให้พิมพ์ "ยังไม่มีรายชื่อนักเรียน"
 */
function listStudents() {
  // TODO
}

/** เพิ่มคะแนนให้คนที่ระบุ id
 * เงื่อนไขคะแนน: เป็น number ระหว่าง 0-100 เท่านั้น
 */
function addScore(id, score) {
  // TODO: หา student แล้วตรวจสอบ score ก่อนค่อย push
}

/** คำนวณค่าเฉลี่ยคะแนนของ id ที่ระบุ
 * ถ้าไม่พบหรือยังไม่มีคะแนน → คืน 0
 */
function average(id) {
  // TODO: ใช้ .reduce(...) หาผลรวมแล้วหารด้วยจำนวน
}

/** ลบนักเรียนตาม id
 * คืนค่า: true ถ้าลบสำเร็จ, false ถ้าไม่พบ
 */
function removeStudent(id) {
  // TODO: หา index แล้ว .splice(...) หรือตัวเลือกอื่น
}

/** อัปเดตชื่อของนักเรียนตาม id
 * คืนค่า: true ถ้าอัปเดตสำเร็จ, false ถ้าไม่พบ/ชื่อไม่ถูกต้อง
 */
function updateStudentName(id, newName) {
  // TODO
}

/* ----------------------
   Mini Tests (optional)
   ---------------------- */

// คาดหวังผลลัพธ์เบื้องต้น (นักเรียนลองเปิด/ปิดบรรทัดเหล่านี้เพื่อเช็คงานตัวเอง)
console.log("== Run Mini Tests ==");

addStudent("S001", "Alice");
addStudent("S002", "Bob");
// addStudent("S001", "Dup"); // ควรถูกปฏิเสธ (id ซ้ำ)

addScore("S001", 95);
addScore("S001", 88);
addScore("S002", 70);
// addScore("S002", 120); // ควรถูกปฏิเสธ (คะแนนเกินช่วง)

listStudents(); // ควรพิมพ์นักเรียน 2 คน พร้อมคะแนน

console.log("Avg S001 =", average("S001")); // ควร ~ 91.5
console.log("Update S002 name ->", updateStudentName("S002", "Robert")); // true
console.log("Remove S999 ->", removeStudent("S999")); // false
console.log("Remove S001 ->", removeStudent("S001")); // true

listStudents(); // เช็คผลหลังลบ
```

---

## Wrap-up & การบ้าน (10 นาที)

* **ทบทวน:** แตกต่างระหว่าง `let` vs `const`, `===` vs `==`, ความหมายของ `if/else`, `for/while`, function, object, class, encapsulation
* **การบ้าน:**

  1. ขยาย Student Registry ให้รองรับการลบนักเรียน (`removeStudent(id)`) และอัปเดตชื่อ (`updateStudentName(id, newName)`)
  2. สร้าง function `topStudent()` คืนชื่อนักเรียนที่มีค่าเฉลี่ยสูงสุด
  3. เปลี่ยนจาก object literal เป็น `class Student` พร้อม field ส่วนตัว `scores`
  4. สร้าง function สำหรับคำนวนเกรดเฉลี่ยจากคะแนนของนักเรียน โดยที่ 80 คะแนนขึ้นไปคือเกรด A, 70 คะแนนขึ้นไปคือเกรด B, 60 คะแนนขึ้นไปคือเกรด C, 50 คะแนนขึ้นไปคือเกรด D, และต่ำกว่า 50 คือ F

---
