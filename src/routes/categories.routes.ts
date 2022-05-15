import { Router } from "express";
import { Category } from "../modules/cars/model/Category";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRouter.get("/", (request, response) => {
    const categories: Category[] = categoriesRepository.list();

    return response.status(200).json(categories);
});

export { categoriesRouter };