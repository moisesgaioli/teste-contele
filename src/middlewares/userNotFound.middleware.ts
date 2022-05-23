import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../repositories";


const userNotFound = async (req: Request, res: Response, next: NextFunction) => {
    const [user] = await new UserRepository().findById(req.params.user_id)

    if(!user){;
        return res.status(404).json({ message: "User not found" })
    }

    return next()
}


export default userNotFound
