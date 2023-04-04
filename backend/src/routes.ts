import { Request, Response, Router } from "express";
import { FirstUseCase } from "./useCases/first-usecase";
import { FirstUsecaseController } from "./useCases/first-usecase.controller";
import multer from 'multer'

const router = Router()

const firstUsecaseController = new FirstUsecaseController()

const storage = multer.memoryStorage()
const upload = multer({ storage })

router.post("/uploadFile", upload.single("sellsFile"), (req: Request, res: Response) => {
  const file = req.file;

  if (!file) { 
    throw new Error("Please upload a file");
  }
  if(file?.buffer) {
    const multerText = Buffer.from(file?.buffer).toString("utf-8");

  const result = {
    fileText: multerText,
  };

  res.send(result);
  }
});

router.get('/api', firstUsecaseController.handle)

export { router }