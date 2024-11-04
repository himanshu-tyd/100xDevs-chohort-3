

    console.log('hi there')

    function hello(){
        console.log('Hello good morning')
    }

    let c=0

    setTimeout(()=>{
        hello()
    },10000)

    for(let i; i<10000000; i++){
        c++
    }

    console.log('expesisve task done')