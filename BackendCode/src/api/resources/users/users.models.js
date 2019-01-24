import mongoose, { SchemaType } from "mongoose";
const { Schema } = mongoose;
const ClientSchema = new Schema({
  email: {
    type: String,
    required: true,lowercase:true,unique:true
  },
  password: {
    type: String,
    required: true
  }
});
export default mongoose.model("users", ClientSchema);