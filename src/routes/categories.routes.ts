import { Router } from "express";

const categoriesRouter = Router();

const categories = [];

categoriesRouter.post("/categories", (request, response) => {
    const { name, description } = request.body;

    const category = {
        name,
        description
    }

    categories.push(category);

    return response.status(201).send();
});

export { categoriesRouter };