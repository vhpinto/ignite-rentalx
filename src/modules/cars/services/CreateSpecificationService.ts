import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(private specificationsRepository: ISpecificationsRepository) {

    }
    execute({ description, name }: IRequest): void {
        const specificationExists = this.specificationsRepository.findByName(name);

        if(specificationExists){
            throw new Error("Specification already exists");
        }
    
        this.specificationsRepository.create({ description, name }); 
    }
}

export { CreateSpecificationService };