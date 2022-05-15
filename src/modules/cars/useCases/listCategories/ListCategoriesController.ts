import { Request, Response } from "express";
import { Category } from "../../model/Category";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
    constructor(private listCategoryUseCase: ListCategoriesUseCase) {

    }

    handle(request: Request, response: Response): Response {
       const categories: Category[] = this.listCategoryUseCase.execute();

        return response.status(200).json(categories);
    }
}

export { ListCategoriesController }