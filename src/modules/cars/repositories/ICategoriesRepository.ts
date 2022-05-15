import { Category } from "../model/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    create({ description, name }: ICreateCategoryDTO): void;
    list(): Category[];
    findByName(name: string) : Category;
    import(file: Express.Multer.File) : void;
}

export { ICategoriesRepository, ICreateCategoryDTO };