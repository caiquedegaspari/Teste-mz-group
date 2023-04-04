import { Request, Response } from "express";
import { FirstUseCase } from "./first-usecase";

export class FirstUsecaseController {
  async handle(request: Request, response: Response) {
  const usecase = new FirstUseCase()
  const { message, status } = usecase.execute()
  return response.status(200).json({
    status,
    message,
  });
  }
}