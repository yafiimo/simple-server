import bcrypt from "bcrypt";

async function hashExample(example) {
  let salt = await bcrypt.genSalt(8);
  return await bcrypt.hash(example, salt);
}

export { hashExample };
