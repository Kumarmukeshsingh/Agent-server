import AsyncHandler from "express-async-handler"
import { Member } from "../model/memberModel.js";
import csv from "csvtojson";



// get all contect  get method
// user
// private
export const getAllMember = AsyncHandler(async (req, res) => {
   const member = await Member.find({ user_id: req.user.id });
   if (!member) {
      res.send({ status: 401, message: "member is not not avalible" })
   }
   res.status(200).json(member);
})

// create contact with the help of post method
// user/create
// private
export const createMember = AsyncHandler(async (req, res) => {
   const { name, phone, notes } = req.body;
   if (!name || !notes || !phone) {
      res.status(400);
      throw new Error("all fildes are maditaory ")
   }

   const contact = await Member.create({
      name,
      phone,
      notes,
      user_id: req.user.id,
   })

   if (!contact) {
      res.status(404);
      throw new Error(" member not created ")
   }
   res.status(201).json({ message: "ok", contact })
})



// find one contact get/:id method
// user/id
// private
export const getMember = AsyncHandler(async (req, res) => {
   const member = await Member.findById(req.params.id);
   if (!member) {
      res.status(404);
      throw new Error(" member  not found ")
   }
   res.status(200).json({ member })
})

// updata with put method
// user/updte/:id
// private
export const updateMember = AsyncHandler(async (req, res) => {
   const member = await Member.findById(req.params.id);
   console.log(member);
   if (!member) {
      res.status(404);
      throw new Error(" member  not found  ")
   }

   if (member.user_id.toString() !== req.user.id) {
      throw new Error(" user do not have permision to update other user contacts ");
   }
   const updatedMember = await Member.findByIdAndUpdate(req.params.id, req.body, {
      new: true
   })
   res.status(200).json({ message: `updated successfully `, updatedMember })
})

// delte method
// user/delete/:id
// private
export const deleteMember = AsyncHandler(async (req, res) => {
   const member = await Member.findById(req.params.id);
   if (!member) {
      res.status(404).json({ message: "member not found" })
      throw new Error(" member not found ")
   }
   if (member.user_id.toString() !== req.user.id) {
      throw new Error(" user do not have permision to update other user contacts ");
   }
   await Member.findOneAndDelete(member)
   res.status(200).json({ message: ` remove successfully`, member })
})







