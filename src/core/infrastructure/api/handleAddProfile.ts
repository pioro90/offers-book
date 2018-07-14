import * as httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';
import { AddProfileCommand } from '../../commands/addprofile/AddProfileCommand';
import { ProfileRepository } from '../../domain/profile/ProfileRepository';
import { ProfileDocumentRepository } from '../repository/ProfileDocumentRepository';
import { profileModel } from '../repository/schema/profileModel';
import { ProfileFactory } from '../../domain/profile/ProfileFactory';
import { AddProfileCommandHandler } from '../../commands/addprofile/AddProfileCommandHandler';


export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const command: AddProfileCommand = req.body;
        const profileRepository: ProfileRepository = new ProfileDocumentRepository(profileModel);
        const profileFactory: ProfileFactory = new ProfileFactory();

        const commandHandler: AddProfileCommandHandler = new AddProfileCommandHandler(profileRepository, profileFactory);

        const profileId: string = await commandHandler.handle(command);
        res.status(httpStatus.CREATED).json(profileId);
    } catch (e) {
        next(e);
    }
}
