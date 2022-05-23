import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("users")
export class User {

    @PrimaryGeneratedColumn("uuid")
    user_id: string;

    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ nullable: false })
    password: string;

}
