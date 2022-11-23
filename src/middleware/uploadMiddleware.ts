import {Request , Response } from "express"
const path = require("path")
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req:Request, file:Response, cb:any) {
      cb(null, path.join(__dirname, '../public/uploads/'))
    },
    filename: function (req:Request, file:any, cb:any) {

      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
  export = upload;