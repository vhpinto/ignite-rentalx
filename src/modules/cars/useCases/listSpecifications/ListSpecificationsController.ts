import { Request, Response } from "express";
import { Specification } from "../../model/Specification";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
    constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {

    }

    handle(request: Request, response: Response): Response {
       const categories: Specification[] = this.listSpecificationsUseCase.execute();

        return response.status(200).json(categories);
    }
}

export { ListSpecificationsController }