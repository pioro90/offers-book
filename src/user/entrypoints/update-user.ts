import { NextFunction, Request, Response } from 'express';
import { UpdateUserDto } from '../core/usecases/updateuser/update-user-dto';
import { IUpdateUserProvider } from '../core/usecases/updateuser/update-user-provider';
import { UpdateUserProvider } from '../dataproviders/update-user-provider';
import { userModel } from '../dataproviders/database/user-model';
import { UpdateUserUseCase } from '../core/usecases/updateuser/update-user-use-case';


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