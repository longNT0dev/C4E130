// Bài 2 
// 2.1 

let min_length = ""

//Chuoi co do dai nho nhat
for (let i=0; i< s.length; i++) {
    if (s[i].length < s[i+1].length){
        min_length = s[i]
    } else { min_length = s[i+1] }
}

console.log(min_length)
