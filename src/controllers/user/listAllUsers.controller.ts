import { Request, Response } from "express";
import { IUser, UserRepository } from "../../repositories";

const listAllUsersController = async (req: Request, res: Response) => {
    const newResponse = []
    
    const users = await new UserRepository().findUsers()

    users.forEach(user => {
        const { password, ...userResponse } = user
        newResponse.push(userResponse)
    })
    
    return res.status(200).json(newResponse)
}

export default listAllUsersController
