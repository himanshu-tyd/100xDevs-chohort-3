
const newUser=new Map()

newUser.set("harkirat" , {age: "40", occpupation: "SDE"})
newUser.set("HT" , {age: "22", occpupation: "SDE"})

newUser.delete("harkirat")
console.log(newUser.get("harkirat"))
