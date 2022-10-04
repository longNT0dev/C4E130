// Bài 2
// 2.1

// let s= ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];

// let min_length = ""

// //Chuoi co do dai nho nhat
// for (let i=0; i < s.length - 1; i++) {
//     console.log(s[i], s[i+1])
//     if (s[i].length < s[i+1].length){
//         min_length = s[i]
//     } else { min_length = s[i+1] }
// }

// console.log(min_length)

// let newS = [];

// for (let index = 0; index < s.length; index++) {
//     let string = "";
//     for (let i = 0; i < 3; i++) {

//     string += s[index][i];

//   }
//   newS.push(string)
// }

// Khai báo 1 mảng số. Kiểm tra và lọc ra các số nguyên tố trong mảng đó
let numberArr = [2, 6, 4, 8, 4, -4, 7, 11];

// parameter (input ) -> Xử lí logic của hàm -> output (return)
function isPrime(num) {
  // Xử lí logic của function
  if (num < 2) {
    return false;
  }
  if (num == 2) {
    return true;
  }
  // n > 2
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}



// console.log(numberArr.filter((item) => item > 0));
// console.log(numberArr.filter((item) => item < 0));
// console.log(numberArr.filter((item) => item == 4));
