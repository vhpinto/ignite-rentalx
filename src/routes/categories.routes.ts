import { Router } from "express";
import { CategoriesRepositoty } from "../repositories/CategoriesRepository";

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepositoty();

categoriesRouter.post("/", (request, response) => {
    const { name, description } = request.body;
    
    categoriesRepository.create({ description, name });

    return response.status(201).send();
});

export { categoriesRouter };