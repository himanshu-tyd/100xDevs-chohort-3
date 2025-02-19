"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const userSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .min(4, { message: "Name should be greater then 4 charcter" }),
    age: zod_1.z.number().min(2).max(30, { message: "your age is high not allow" }),
});
function getData(user) {
    const { success, error, data } = userSchema.safeParse(user);
    if (!success) {
        console.log(error.errors);
    }
    console.log(data);
}
const data = {
    name: "himanshu",
    age: 30,
};
getData(data);
