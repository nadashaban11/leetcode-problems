// leetCode 326. Power of Three
//both with (almost) same time comp
//but the iterative one less stack space waste:) 
bool isPowerOfThree(int n) {
    if (n <= 0) return false;
    while (n % 3 == 0) n /= 3;
    return n == 1;
}


// bool isPowerOfThree(int n) {
//     if(n <= 0){
//         return false;
//     }
//     if(n == 1){
//         return true;
//     }
//     if(n % 3 != 0){
//         return false;
//     }
//     return isPowerOfThree(n/3);
// }