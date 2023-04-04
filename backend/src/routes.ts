import { Request, Response, Router } from "express";
import { UploadSalesFileController } from "./controllers/uploadSalesFile.controller";
import multer from 'multer'

const router = Router()

const uploadSellsFileController = new UploadSalesFileController()

const storage = multer.memoryStorage()
const upload = multer({ storage })

router.post("/uploadFile", upload.single("sellsFile"), uploadSellsFileController.handle);

export { router }