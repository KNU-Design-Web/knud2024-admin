import { Request, Response, NextFunction } from "express";
import { Controller } from "../../base/base-controller";

import { ProjectService } from "./project.service";
import { BaseResponse } from "../../base/base-response";
import { inject, injectable } from "tsyringe";

@injectable()
export class ProjectController extends Controller {
    constructor(
        @inject(ProjectService)
        private readonly projectService: ProjectService
    ) {
        super("/projects");
        this.initializeRoutes();
    }

    protected initializeRoutes(): void {
        this.router.get("/", this.getAllProjectsAndAuthors.bind(this));
    }

    private async getAllProjectsAndAuthors(req: Request, res: Response) {
        const projects = await this.projectService.getAllProjectsAndAuthors();
        res.status(200).json(BaseResponse.of("200", "success", projects));
    }
}
