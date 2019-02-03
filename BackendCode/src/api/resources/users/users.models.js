import mongoose, { SchemaType } from "mongoose";
const { Schema } = mongoose;
import bcryptjs from "bcryptjs";

const UsersSchema = new Schema({
  local: {
    email: String,
    password: String
  },
  google: {
    email: String,
    id: String,
    displayName: String,
    token: String
  },
  github: {
    email: String,
    id: String,
    displayName: String,
    token: String
  },
  twitter: {
    name: String,
    id: String,
    displayName: String,
    token: String
  }
});
// UsersSchema.pre("save", async function() {
//   if (this.isModified("password") || this.isNew) {
//     const salt = await bcryptjs.genSalt();
//     const hash = await bcryptjs.hash(this.password, salt);
//     this.password = hash;
//     console.log("password", this.password);
//   }
// });
export default mongoose.model("users", UsersSchema);
