import './map'
import './exclude'
import './zod'


// interface  User {
//     name:string
//     age:number
// }

// function findAge(user1:User, user2: User){
//     return user1.age+user2.age
// }

// const user1={
//     name:'harkirat',
//     age:30
// }

// const user2={
//     name:'himanshu',
//     age:22
// }


// const totleAge=findAge(user1, user2)
// console.log(totleAge)



//pick generic
interface User{
    id: string
    name:string,
    age: number,
    email:string,
    password:string
    photo?: string // options (partial)
}

type UpdateProps=Pick<User , "age" | "email"| "name">

type OptionsUpdate=Partial<UpdateProps>

function updateOptional(user:OptionsUpdate){
    user.age
}

function Update(User:UpdateProps){
    //do something
}