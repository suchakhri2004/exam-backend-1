import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(user_id: number): Promise<User>;
    create(user: User): Promise<User>;
    update(user_id: number, user: User): Promise<User>;
    remove(user_id: number): Promise<void>;
}
