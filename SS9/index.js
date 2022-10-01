// 1. In ra dãy số từ 1 đến 500

// for(let i = 1; i <= 500; i++) {
//     console.log(i);
// }

// 2. In ra các số chia hết cho 2 và 3 từ 1 đến 300

// for(let i = 1; i <= 300; i++) {
//     // if(i % 2 == 0 && i % 3 == 0) {
//     //     console.log(i)
//     // }
//     if(!(i % 6)) { // 0 falsy -> !falsy -> true
//         console.log(i)
//     }
// }

// 3. Tính tổng các số chẵn trong đoạn [-30, 50]

// let sum = 0;
// for (let i = -30; i <= 50; i = i + 2) { //index
//   sum += i;
// }

// console.log(sum);

// 4. Nhập vào số n. Tính giai thừa của số n -> 1*2*3*...*n

// let factorial = 1
// let n

// do {
//     n = parseInt(prompt("Enter a number"))

//     // Chỉ được sử dụng ở bên trong khu này -> scope
// }while(isNaN(n))

// for(let i = 2; i <= n; i++) {
//     factorial *= i
// }

// console.log(factorial)

// 5. Nhập vào 3 số a, b, x (a < b). Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x

// let a, b;

// let x = +prompt("Enter x");

// do {
//   a = +prompt("Enter a number a");
//   b = +prompt("Enter a number b");
// } while (a >= b);

// for (let i = a; i < b; i++) {
//   if (i % x == 0) {
//     console.log(i);
//     break;
//   }
// }
// Ví dụ: a = 2, b = 18, x = 4
// i = 2 -> i < 18 ? -> 2 % 4 == 0 ?
// i = 3 -> i < 18 ? -> 3 % 4 == 0 ?
// i = 4 -> i < 18 ? -> 4 % 4 == 0 ? -> console.log(i) + break -> Thoát khỏi vòng lặp


// 6. Nhập vào số n (n >= 2). Hãy tính giá trị biểu thức sau: 1/(1*2) + 1/(2*3) + ....

// let n, sum;

// do {
//   n = +prompt("Enter a number");
// } while (isNaN(n) && n < 2);

// for (let i = 1; i <= n; i++) {
//   sum += 1 / (i * (i + 1));
// }

// console.log(sum);

// 7. Nhập vào số n. Hãy in ra số ước của n
// 8: 1,2,4,8

let divisorCount = 1
let n = 8
for(let i = 2; i <= n; i++) {
    if(n % i == 0) {
        divisorCount++
    }
}
console.log(divisorCount)