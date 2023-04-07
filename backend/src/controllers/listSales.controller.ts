import { Request, Response } from "express";
import { SalesHistoryRepository } from "../repositories/implementations/SalesHistory.repository";
import { ListSalesUseCase } from "../useCases/listSales.usecase";

export class ListSalesController {
  async handle(request: Request, response: Response) {
    const salesHistoryRepository = new SalesHistoryRepository()
    const listSalesUsecase = new ListSalesUseCase(salesHistoryRepository)
    
    const salesList = await listSalesUsecase.execute()
    return response.status(200).send({ salesList });
  }
}