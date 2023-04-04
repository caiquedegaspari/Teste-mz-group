import { Request, Response } from "express";
import { ParseTextFromSalesFileUseCase } from "../useCases/parseTextFromSalesFile.usecase";
import { SalesHistoryRepository } from "../repositories/implementations/SalesHistory.repository";

export class UploadSalesFileController {
  async handle(request: Request, response: Response) {
    const salesHistoryRepository = new SalesHistoryRepository()
    const uploadSalesFileUseCase = new ParseTextFromSalesFileUseCase(salesHistoryRepository)
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