import { z } from "zod";

const userSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Name should be greater then 4 charcter" }),
  age: z.number().min(2).max(30, { message: "your age is high not allow" }),
});

type users = z.infer<typeof userSchema>;

function getData(user: users) {
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
