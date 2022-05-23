import { Request, Response } from "express";
import { UserRepository } from "../../repositories";

const deleteAllUsersController = async (req: Request, res: Response) => {
    const users = await new UserRepository().findUsers()

    await new UserRepository().deleteAllUsers(users)

    return res.status(204).json()
}


export default deleteAllUsersController
