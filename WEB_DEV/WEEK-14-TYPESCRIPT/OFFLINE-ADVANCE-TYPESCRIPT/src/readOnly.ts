

type User3={
   name:string
   age:number
}

const UserData:Readonly<User3>={
    name: "Himanshu",
    age:22
}

console.log(UserData.age)