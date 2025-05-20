import "reflect-metadata";

import { App } from "./app";
import { ProjectController } from "./modules/project/project.controller";
import dotenv from "dotenv";
import { container } from "tsyringe";

dotenv.config();

const app = new App({
    port: 3000,
    controllers: [container.resolve(ProjectController)],
    middlewares: [],
});

app.run();
