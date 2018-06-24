import * as httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';

import { CreateUserDto } from '../core/usecases/createuser/create-user-dto';
import { CreateUserUseCase } from '../core/usecases/createuser/create-user-use-case';
import { ICreateUserProvider } from '../core/usecases/createuser/create-user-provider';
import { CreateUserProvider } from '../dataproviders/create-user-provider';
import { userModel } from '../dataproviders/database/user-model';
import { User } from '../core/domain/user';


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
