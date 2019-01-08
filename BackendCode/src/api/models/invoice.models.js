import mongoose, { SchemaType } from "mongoose";
import mongoosePaginate from "mongoose-paginate";
const { Schema } = mongoose;
const InvoiceSchema = new Schema({
  item: {
    type: String,
    required: true
  },
  qty: {
    type: Number
  },
  date: {
    type: Date
  },
  due: {
    type: Date
  },
  rate: {
    type: Number
  },
  tax: {
    type: Number
  }
});
InvoiceSchema.plugin(mongoosePaginate);
export default mongoose.model("invoice", InvoiceSchema);
