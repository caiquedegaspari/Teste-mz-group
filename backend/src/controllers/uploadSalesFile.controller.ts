import { Request, Response } from "express";
import { ParseTextFromSalesFileUseCase } from "../useCases/parseTextFromSalesFile.usecase";

export class UploadSalesFileController {
  async handle(request: Request, response: Response) {
    const uploadSalesFileUseCase = new ParseTextFromSalesFileUseCase()
    const file = request.file;

    if (!file) { 
      throw new Error("Please upload a file");
    }
    if(file?.buffer) {
      const multerText = Buffer.from(file?.buffer).toString("utf-8");

      uploadSalesFileUseCase.execute(multerText)
      response.status(201).send();
    }
  }
}