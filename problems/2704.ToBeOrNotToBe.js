// leetCode 2704 - To Be Or Not To Be


function expect(val){
    return {
        toBe : (inp)=>{
            if(inp === val)
                return true; 
            else 
                throw new Error("Not Equal");
        },
        notToBe : (inp)=>{
            if(inp !== val)
                return true; 
            else 
                throw new Error("Equal");
        }
    };
};

//tests

func = () => expect(5).notToBe(null);
console.log(func());
func2 = () => expect(5).toBe(5);
console.log(func2());
func3 = () => expect(5).toBe(null);
console.log(func3());
