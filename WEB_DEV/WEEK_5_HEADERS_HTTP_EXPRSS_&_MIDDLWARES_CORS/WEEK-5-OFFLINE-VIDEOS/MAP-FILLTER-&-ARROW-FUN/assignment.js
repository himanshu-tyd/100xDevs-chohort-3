//creaet a map function that takes 2 inputes
//an array, and a transformation callback/fn
//and transform the array into a new one using the transformation fn




let newArry=[]

function transoformIntoOne(arr1,arr2){
    for(let i=0; i<arr1.length; i++){
        newArry.push(arr1[i])
    }    

    for(let i=0; i<arr2.length; i++){
        newArry.push(arr2[i])
    }

    return newArry
}

const input1=[2,3,4,5,6]
const input2=[3,4,5,6,1]

console.log(transoformIntoOne(input1,input2))