// leetCode 326. Power of Three

bool isPowerOfThree(int n) {
    if(n <= 0){
        return false;
    }
    if(n == 1){
        return true;
    }
    if(n % 3 != 0){
        return false;
    }
    return isPowerOfThree(n/3);
}