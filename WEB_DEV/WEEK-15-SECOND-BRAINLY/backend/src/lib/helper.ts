import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

export const generateHash = (password: string) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hash(password, salt);

  return hash;
};

export const comapareHash = async (userPassword: string, password: string) => {
  const success = await bcrypt.compare(userPassword, password);

  return success;
};
