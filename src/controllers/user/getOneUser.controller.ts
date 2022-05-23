import { Request, Response } from "express";
import { UserRepository } from "../../repositories";


const getOneUserController = async (req: Request, res: Response) => {
    const [user] = await new UserRepository().findById(req.params.user_id)

    const { password, ...userResponse } = user

    return res.status(200).json(userResponse)
}


export default getOneUserController
