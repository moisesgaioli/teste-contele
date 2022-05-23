import { DeleteResult, UpdateResult } from "typeorm"
import { User } from "../../entities/User"

interface IUser {
    user_id?: string
    email: string
    password: string
}

interface IUserRepo {
    saveUser: (user: IUser) => Promise<IUser>
    findUsers: () => Promise<IUser[]>
    findById: (id: string) => Promise<IUser[]>
    findByEmail: (email: string) => Promise<IUser[]>
    updateUser: (user: IUser, res: object) => Promise<UpdateResult>
    deleteUser: (id: string) => Promise<DeleteResult>
    deleteAllUsers: (users: User[]) => Promise<User[]>
}


export { IUser, IUserRepo }
