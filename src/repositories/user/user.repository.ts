import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { IUser, IUserRepo } from "./user.interface"



class UserRepository implements IUserRepo {
    private ormRepository: Repository<User>

    constructor() {
        this.ormRepository = getRepository(User)
    }

    saveUser = async (user: IUser) => await this.ormRepository.save(user)
    findUsers = async () => await this.ormRepository.find()
    findById = async (user_id: string) => await (this.ormRepository.find({ user_id }))
    findByEmail = async (email: string) => await (this.ormRepository.find({ email: email }))
    updateUser = async (user: IUser, reqBody: object) => await (this.ormRepository.update(user, reqBody))
    deleteUser = async (user_id: string) => await (this.ormRepository.delete(user_id))
    deleteAllUsers = async (users: User[]) => await this.ormRepository.remove(users)
}


export default UserRepository
