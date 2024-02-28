import { UUID } from "crypto";

interface IUserCreate {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    userId?: UUID;
}

export { IUserCreate };
