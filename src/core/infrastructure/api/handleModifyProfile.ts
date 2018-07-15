import * as httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';
import { ProfileRepository } from '../../domain/profile/ProfileRepository';
import { ProfileDocumentRepository } from '../repository/ProfileDocumentRepository';
import { profileModel } from '../repository/schema/profileModel';
import { ModifyProfileCommand } from '../../commands/modifyprofile/ModifyProfileCommand';
import { RightRepository } from '../../domain/right/RightRepository';
import { RightDocumentRepository } from '../repository/RightDocumentRepository';
import { rightModel } from '../repository/schema/rightModel';
import { ModifyProfileCommandHandler } from '../../commands/modifyprofile/ModifyProfileCommandHandler';
import { ProfileRight } from '../../commands/modifyprofile/ProfileRight';


export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const command: ModifyProfileCommand = new ModifyProfileCommand(req.params.id,
            req.body.name,
            new ProfileRight(req.body.rights.addedRights, req.body.rights.removedRights));
        const profileRepository: ProfileRepository = new ProfileDocumentRepository(profileModel);
        const rightRepository: RightRepository = new RightDocumentRepository(rightModel);

        const commandHandler: ModifyProfileCommandHandler = new ModifyProfileCommandHandler(rightRepository, profileRepository);

        await commandHandler.handle(command);
        res.status(httpStatus.CREATED).send();
    } catch (e) {
        next(e);
    }
}
