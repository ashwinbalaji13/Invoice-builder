import mongoose, { SchemaType } from "mongoose";
import mongoosePaginate from "mongoose-paginate";
const { Schema } = mongoose;
const ClientSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});
ClientSchema.plugin(mongoosePaginate);
export default mongoose.model("client", ClientSchema);
