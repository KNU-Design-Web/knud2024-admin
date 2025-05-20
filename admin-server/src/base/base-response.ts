export class BaseResponse<T> {
    private status: string;
    private message: string;
    private data: T;

    constructor(status: string, message: string, data: T) {
        this.status = status;
        this.message = message;
        this.data = data;
    }

    public static of<T>(status: string, message: string, data: T): BaseResponse<T> {
        const response = new BaseResponse<T>(status, message, data);
        return response;
    }
}
