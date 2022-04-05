import { Router } from "express";
import { Category } from "../model/Category";
import { CategoriesRepositoty } from "../repositories/CategoriesRepository";

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepositoty();

categoriesRouter.post("/", (request, response) => {
    const { name, description } = request.body;

    const categoryExists = categoriesRepository.findByName(name);

    if(categoryExists){
        return response.status(400).json({error: "Category already exists"});
    }

    categoriesRepository.create({ description, name });

    return response.status(201).send();
});

categoriesRouter.get("/", (request, response) => {
    const categories: Category[] = categoriesRepository.list();

    return response.status(200).json(categories);
});

export { categoriesRouter };