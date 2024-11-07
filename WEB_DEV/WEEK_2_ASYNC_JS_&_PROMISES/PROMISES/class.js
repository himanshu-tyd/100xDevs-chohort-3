

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
