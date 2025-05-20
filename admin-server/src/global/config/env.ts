import { singleton } from "tsyringe";

@singleton()
export class Env {
    public readonly PORT = 3000;
}
