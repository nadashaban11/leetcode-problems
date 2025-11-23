// leetCode 70. Climbing Stairs

int climbStairs(int n) {
    int arr[46];
    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 2;
    for(int i = 3; i < 46; i++){
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n];
}

//recursion soln(TLE!)
// int fibo(int n);

// int climbStairs(int n) {
//     return fibo(n);
// }

// int fibo(int n){
//     if(n == 1){
//         return 1;
//     }
//     if(n == 2){
//         return 2;
//     }
//     return fibo(n-1) + fibo(n-2);
// }
