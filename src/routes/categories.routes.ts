import { Router } from "express";
import { Category } from "../model/Category";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.post("/", (request, response) => {
    const { name, description } = request.body;
    const createCategoryService = new CreateCategoryService(categoriesRepository);

    createCategoryService.execute({name, description});    

    return response.status(201).send();
});

categoriesRouter.get("/", (request, response) => {
    const categories: Category[] = categoriesRepository.list();

    return response.status(200).json(categories);
});

export { categoriesRouter };