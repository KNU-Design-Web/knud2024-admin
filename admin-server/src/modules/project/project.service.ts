import { inject, injectable } from "tsyringe";
import { ProjectRepository } from "./project.repository";

@injectable()
export class ProjectService {
    constructor(
        @inject(ProjectRepository)
        private readonly projectRepository: ProjectRepository
    ) {}

    public async getAllProjectsAndAuthors() {
        return this.projectRepository.getAllProjectsAndAuthors();
    }
}
