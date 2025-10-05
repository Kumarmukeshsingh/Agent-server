import { Member } from "../model/memberModel.js";
import AsyncHandler from "express-async-handler"
import csv from "csvtojson";

export const addFile = AsyncHandler(async (req, res) => {
   console.log("file path is - ", req.file.path);
   try {
      let data = [];

      const jsonArray = await csv().fromFile(req.file.path);
      if (!jsonArray) {
         return res.send({ status: 400, message: " select file" })
      }
      console.log("user--id", req.user.id);

      for (let i = 0; i < jsonArray.length; i++) {

         data.push({
            name: jsonArray[i].name,
            phone: jsonArray[i].phone,
            notes: jsonArray[i].notes,
            user_id: req.user.id,
         })
      }
      // console.log(data);

      const result = await Member.insertMany(data);
      // res.send({ status: 200, success: true, msg: 'csv imported', result });
      res.status(200).json({ message: "csv imported ", result, success: 'true' })


   } catch (error) {
      console.log(error);
      console.log(error.message);

   }
});

