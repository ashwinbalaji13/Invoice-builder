import mongoose, { SchemaType } from "mongoose";
const { Schema } = mongoose;
import bcryptjs from "bcryptjs";

const UsersSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});
UsersSchema.pre("save", async function() {
  if (this.isModified("password") || this.isNew) {
    const salt = await bcryptjs.genSalt();
    const hash = await bcryptjs.hash(this.password, salt);
    this.password = hash;
    console.log("password", this.password);
  }
});
export default mongoose.model("users", UsersSchema);
