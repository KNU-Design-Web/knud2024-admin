import { Application } from "express";
import express from "express";
import { Controller } from "./base/base-controller";

export class App {
    private readonly app: Application;
    private readonly port: number;

    private readonly controllers: Controller[];
    private readonly middlewares: any[];

    constructor({
        port,
        controllers,
        middlewares,
    }: {
        port: number;
        controllers: Controller[];
        middlewares: any[];
    }) {
        this.port = port;
        this.controllers = controllers;
        this.middlewares = middlewares;
        this.app = express();
    }

    private initializeMiddlewares() {
        this.middlewares.forEach((middleware) => {
            this.app.use(middleware);
        });
    }
    private initializeControllers() {
        this.controllers.forEach((controller) => {
            this.app.use(controller.path, controller.router);
        });
    }

    public run() {
        this.initializeMiddlewares();
        this.initializeControllers();

        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}
