import { NextFunction, Request, Response } from 'express';
import { UpdateUserDto } from '../../core/usecases/updateuser/UpdateUserDto';
import { IUpdateUserProvider } from '../../core/usecases/updateuser/IUpdateUserProvider';
import { UpdateUserProvider } from '../database/UpdateUserProvider';
import { userModel } from '../database/model/userModel';
import { UpdateUserUseCase } from '../../core/usecases/updateuser/UpdateUserUseCase';


export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const updateUserDto: UpdateUserDto = new UpdateUserDto(
                req.params.id,
                req.body.firstName,
                req.body.lastName,
                req.body.email,
                req.body.password
            );
            const updateUserProvider: IUpdateUserProvider = new UpdateUserProvider(userModel);
            const updateUserUseCase: UpdateUserUseCase = new UpdateUserUseCase(updateUserProvider);

            await updateUserUseCase.updateUser(updateUserDto);
            res.send();
        } catch (e) {
            next(e);
        }
    }