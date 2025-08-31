// leetCode 682. Baseball Game

// Time: O(n)

var calPoints = function(operations) {
    let score = [];
    let total = 0;
    for(let i = 0; i < operations.length; i++){
        if(operations[i] === 'C'){
            score.pop();
        }
        else if(operations[i] === 'D'){
            score.push(2 * score[score.length - 1]);
        }
        else if(operations[i] === '+'){
            score.push(score[score.length - 1] + score[score.length - 2]);
        }
        else{
            score.push(+(operations[i]))
        }

    }
    
    for(const s of score)
        total += s;

    return total;

};
