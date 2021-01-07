import bcrypt from "bcrypt";

const hashExample = async (example) => {
  let salt = await bcrypt.genSalt(8);
  return await bcrypt.hash(example, salt);
};

export { hashExample };
