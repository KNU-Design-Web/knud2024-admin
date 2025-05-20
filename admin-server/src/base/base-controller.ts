import { Router } from "express";

export abstract class Controller {
    public router: Router;
    public path: string;

    constructor(path: string) {
        this.path = path;
        this.router = Router();
        this.initializeRoutes();
    }

    protected abstract initializeRoutes(): void;
}
