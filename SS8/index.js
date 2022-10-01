// 1
let x = true;
let y = true;
let z = false;

// true && true && false -> false
console.log(x && y && z);
// true && true && !false -> true && true && true -> true
console.log(x && y && !z);
// (true && true) || false -> true || false -> true
console.log((x && y) || z);
// (true && true) || !false -> true || true -? true
console.log((x && y) || !z);
// true && (true || false) -> true && true -> true
console.log(x && (y || z));
// true && !(true || false) -> true && !true -> true && false -> false
console.log(x && !(y || z));
// true && (true || !false) -> true && (true || true) -> true && true -> true
console.log(x && (y || !z));
// true && (!true || false) -> true && (false || false) -> true && false -> false
console.log(x && (!y || z));

// 2
// Khai báo các biến có kiểu dữ liệu lần lượt là: String, Number, Boolean
let myName = "AAA";
let age = 20;
let isGood = true;

// let a = null,undefined,0 // Giá trị falsy
// let b = "fddf", 20 // Giá trị truthy

// Thay đổi giá trị khởi tạo ban đầu
age = age + 10;

console.log(age);

//    % chia lấy dư
//    / chia bình thường
age = age % 3;
console.log(age);

myName = myName + "BBB";
console.log(myName);

isGood = !age;

console.log(isGood);

// false && false -> false
// Các phép toán so sánh: ==, !=, >, <, >=, <=, ===
console.log(myName == "aaa" && age >= 20);

console.log(age == "0");
console.log(age === "0");

// 3
// let a = 10
// let b = 20
// let c = 30
// let d = '40'

// console.log(a + b + c)
// console.log(a - b / c)
// console.log(a - (b * c))
// console.log(d - (a * b) - c)

// 5


let a = 1;
let b = "2";
let c = 3;
let d = "4";


console.log(b + d);
console.log(a + b + c + d);  
console.log(a - b + c - d); 
console.log(a - b - c + d);
console.log(b + d - (a + c)); 
console.log(a + b - (c + d));  
console.log(a * c + b * d); 
console.log(-b + d);
console.log(-b - d); 
console.log(-(b + d));


// Kiến thức buổi học 
// 1. Biến, Khai báo biến
// 2. Các phép toán +, -, *, /, %
// 3. Các phép toán so sánh 
// 4. Các phép logic &&, ||