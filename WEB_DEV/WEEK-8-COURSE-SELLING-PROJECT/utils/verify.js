import jwt from "jsonwebtoken";

export const GenerateCookie = (userId, res) => {
  const token = jwt.sign({ userId: userId }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });

  res.cookie("jwtToken", token, {
    httpOnly: true,
    expiresIn: token.expiresIn,
    
  });
};


