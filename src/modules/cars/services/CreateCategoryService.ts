import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository) {

    }
    execute({ description, name }: IRequest): void {
        const categoryExists = this.categoriesRepository.findByName(name);

        if(categoryExists){
            throw new Error("Category already exists");
        }
    
        this.categoriesRepository.create({ description, name }); 
    }
}

export { CreateCategoryService };