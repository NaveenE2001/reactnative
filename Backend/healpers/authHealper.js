import bcrypt from "bcrypt";
const gensalt = 10;
export const hashPassword = async (password) => {
  try {
    const hashPassword = await bcrypt.hash(password, gensalt);
    return hashPassword;
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = async (password, cpassword) => {
  return await bcrypt.compare(password, cpassword);
};
