
// leetCode 165. Compare Version Numbers

var compareVersion = function(version1, version2) {
    let v1 = version1.split('.');
    let v2 = version2.split('.');
    
    while(v1.length < v2.length){
        v1.push('0');
    }
    while(v2.length < v1.length){
        v2.push('0');
    }

    for(let i = 0; i < v1.length; i++){
        if(Number(v1[i]) > Number(v2[i]))
            return 1;
        else if(Number(v1[i]) < Number(v2[i]))
            return -1;
    }
    return 0
};