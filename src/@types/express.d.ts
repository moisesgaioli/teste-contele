
import * as express from "express"
import { IUser } from "../repositories"

declare global {
    namespace Express {
        interface Request {
            validated: IUser
        }
    }
}
