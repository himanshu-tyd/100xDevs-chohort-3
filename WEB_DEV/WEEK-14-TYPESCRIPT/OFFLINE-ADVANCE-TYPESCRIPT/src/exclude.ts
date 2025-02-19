

type ExluceEven= "click" | "scroll" | "mousemove"

type newType=Exclude<ExluceEven , "scroll">

function doSomething(even:newType){
    console.log(even)
}

doSomething("click")
