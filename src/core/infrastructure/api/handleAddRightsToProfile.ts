import * as httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';
import { ProfileRepository } from '../../domain/profile/ProfileRepository';
import { ProfileDocumentRepository } from '../repository/ProfileDocumentRepository';
import { profileModel } from '../repository/schema/profileModel';
import { AddRightsToProfileCommand } from '../../commands/addrightstoprofile/AddRightsToProfileCommand';
import { RightRepository } from '../../domain/right/RightRepository';
import { RightDocumentRepository } from '../repository/RightDocumentRepository';
import { rightModel } from '../repository/schema/rightModel';
import { AddRightsToProfileCommandHandler } from '../../commands/addrightstoprofile/AddRightsToProfileCommandHandler';


export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const command: AddRightsToProfileCommand = new AddRightsToProfileCommand(req.params.id, req.body.rightsIds);
        const profileRepository: ProfileRepository = new ProfileDocumentRepository(profileModel);
        const rightRepository: RightRepository = new RightDocumentRepository(rightModel);

        const commandHandler: AddRightsToProfileCommandHandler = new AddRightsToProfileCommandHandler(rightRepository, profileRepository);

        await commandHandler.handle(command);
        res.status(httpStatus.CREATED).send();
    } catch (e) {
        next(e);
    }
}
