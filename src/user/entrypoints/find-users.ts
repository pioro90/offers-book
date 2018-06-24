import { NextFunction, Request, Response } from 'express';
import { FindUsersDto } from '../core/usecases/findusers/find-users-dto';
import { User } from '../core/domain/user';
import { IFindUsersProvider } from '../core/usecases/findusers/find-users-provider';
import { FindUsersProvider } from '../dataproviders/find-users-provider';
import { userModel } from '../dataproviders/database/user-model';
import { FindUsersUseCase } from '../core/usecases/findusers/find-users-use-case';


export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const findUsersDto: FindUsersDto = new FindUsersDto(
            req.query.firstName,
            req.query.lastName,
            req.query.email,
            parseInt(req.query.start),
            parseInt(req.query.limit)
        );
        const findUsersProvider: IFindUsersProvider = new FindUsersProvider(userModel);
        const findUsersUseCase: FindUsersUseCase = new FindUsersUseCase(findUsersProvider);

        const users: User[] = await findUsersUseCase.findUsers(findUsersDto);
        res.json(users);
    } catch (e) {
        next(e);
    }
}