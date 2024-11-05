

    console.log('hi there')

    function hello(){
        console.log('Hello good morning')
    }

    let c=0

    setTimeout(()=>{
        hello()
    },1000)

    for(let i; i<10000000; i++){
        const time=new Date()

        if(time.getMilliseconds==10000){
            exit
        }else{
            c++
        }
    }

    console.log('expesisve task done')