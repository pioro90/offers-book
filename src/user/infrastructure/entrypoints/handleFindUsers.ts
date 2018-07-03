import { NextFunction, Request, Response } from 'express';
import { FindUsersDto } from '../../core/usecases/findusers/FindUsersDto';
import { User } from '../../core/domain/User';
import { IFindUsersProvider } from '../../core/usecases/findusers/IFindUsersProvider';
import { FindUsersProvider } from '../database/FindUsersProvider';
import { userModel } from '../database/model/userModel';
import { FindUsersUseCase } from '../../core/usecases/findusers/FindUsersUseCase';


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