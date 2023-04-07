import { Request, Response, Router } from "express";
import { UploadSalesFileController } from "./controllers/uploadSalesFile.controller";
import multer from 'multer'
import { ListSalesController } from "./controllers/listSales.controller";

const router = Router()

const uploadSellsFileController = new UploadSalesFileController()
const listSalesController = new ListSalesController()

const storage = multer.memoryStorage()
const upload = multer({ storage })

router.post("/uploadFile", upload.single("salesFile"), uploadSellsFileController.handle);
router.get("/listSales", listSalesController.handle);

export { router }