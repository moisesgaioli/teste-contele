import { Request, Response } from "express";
import { UserRepository } from "../../repositories";


const updateUserController = async (req: Request, res: Response) => {
    const [user] = await new UserRepository().findById(req.params.user_id)

    await new UserRepository().updateUser(user, req.validated)

    const [userUpdated] = await new UserRepository().findById(req.params.user_id)

    const { password, ...userResponse } = userUpdated

    return res.status(200).json(userResponse)
}



export default updateUserController
