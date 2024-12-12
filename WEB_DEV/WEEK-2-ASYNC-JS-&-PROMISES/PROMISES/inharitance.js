class a{
    constructor(){
        
    }

    
    hello(){
        console.log('hello')
    }

}

class b extends a{
    constructor(){
        super()
    }
}

const obj=new b()

obj.hello()