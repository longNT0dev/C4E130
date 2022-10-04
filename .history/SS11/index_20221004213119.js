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
let numberArr = [2,6,4,8,4,-4,7,11]

// parameter (input ) -> Xử lí logic của hàm -> output (return)
function isPrime(num) {
    // Xử lí logic của function 
     //   if (n < 2) {
      //     console.log(`${n} không phải số nguyên tố`);
      //   }
      //   if (n == 2) {
      //     console.log(`${n} là số nguyên tố`);
      //   }
      //   // n > 2
      //   let isPrime = true;
      //   for (let i = 2; i < Math.sqrt(n); i++) {
      //     if (n % i == 0) {
      //       console.log(`${n} không phải là số nguyên tố`);
      //       isPrime = false;
      //       break;
      //     }
      //   }

      //   if (isPrime) {
      //     console.log(`${n} là số nguyên tố`);
      //   }
}

console.log(numberArr.filter(item => item > 0))
console.log(numberArr.filter(item => item < 0))
console.log(numberArr.filter(item => item == 4))



