import { Response, Router } from "express";
import { FirstUseCase } from "./useCases/first-usecase";
import { FirstUsecaseController } from "./useCases/first-usecase.controller";

const router = Router()

const firstUsecaseController = new FirstUsecaseController()

router.get('/api', firstUsecaseController.handle)

export { router }