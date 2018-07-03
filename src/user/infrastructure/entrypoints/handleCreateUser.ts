import * as httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';

import { CreateUserDto } from '../../core/usecases/createuser/CreateUserDto';
import { CreateUserUseCase } from '../../core/usecases/createuser/CreateUserUseCase';
import { ICreateUserProvider } from '../../core/usecases/createuser/ICreateUserProvider';
import { CreateUserProvider } from '../database/CreateUserProvider';
import { userModel } from '../database/model/userModel';
import { User } from '../../core/domain/User';


export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const createUserDto: CreateUserDto = req.body;
        const createUserProvider: ICreateUserProvider = new CreateUserProvider(userModel);
        const createUserUseCase: CreateUserUseCase = new CreateUserUseCase(createUserProvider);

        const user: User = await createUserUseCase.createUser(createUserDto);
        res.status(httpStatus.CREATED).json(user);
    } catch (e) {
        next(e);
    }
}
