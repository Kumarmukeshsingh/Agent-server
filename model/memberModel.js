import mongoose, { Schema } from "mongoose";

const memberSchema = new Schema({
   user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
   },
   name: {
      type: String,
      required: [true, " please add the member name"]
   },
   phone: {
      type: String,
      required: [true, " please enter phone number "]
   },
   notes: {
      type: String,
   }

}, {
   timestamps: true,
})

export const Member = mongoose.model("Member", memberSchema);
