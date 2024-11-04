//function argument

function sum(a,b){
    return a+b
}

function doSomthing(a,b, func){
    console.log(a+b)

    console.log(func(3,6))

}


doSomthing(3,5,sum)


