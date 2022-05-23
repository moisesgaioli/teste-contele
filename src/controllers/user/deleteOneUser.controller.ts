import { Request, Response } from "express";
import { UserRepository } from "../../repositories";


const deleteOneUserController = async (req: Request, res: Response) => {
    await new UserRepository().deleteUser(req.params.user_id)

    return res.status(200).json()
}



export default deleteOneUserController
