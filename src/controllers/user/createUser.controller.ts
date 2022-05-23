import { Request, Response } from "express";
import { IUser, UserRepository } from "../../repositories";


const createUserController = async (req: Request, res: Response) => {
    const user = { ...req.validated }

    const newUser = {
        email: req.validated.email,
        password: user.password
    }

    const registerUser: IUser = await new UserRepository().saveUser(newUser)
    
    const { password, ...responseUser } = registerUser
    
    return res.status(201).json(responseUser)
}


export default createUserController
