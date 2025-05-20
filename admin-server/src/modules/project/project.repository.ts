import { injectable, registry } from "tsyringe";
import { Repository } from "../../base/base-repository";

@injectable()
export class ProjectRepository extends Repository {
    constructor() {
        super();
    }

    public async getAllProjectsAndAuthors() {
        return this.sql`
            SELECT * FROM AUTHOR
            JOIN PROJECTS ON AUTHOR.project_id = PROJECTS.id
            ORDER BY AUTHOR.id;
        `;
    }
}
