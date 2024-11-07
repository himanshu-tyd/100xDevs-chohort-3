

class Animal{
    constructor(name, colors ){
        this.name=name;
        this.colors=colors
    }

    printName(){
        console.log(`this is ${this.name} which has color ${this.colors} `);
    }

}

const obj=new Animal('dog','black')
obj.printName()


//there are someclasses that provide by javascript

let date=new Date()

console.log(date.getFullYear())

const map=new Map()
map.set("name", "himanshu")

console.log(map.get("name"));

