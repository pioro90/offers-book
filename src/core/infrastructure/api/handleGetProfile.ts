import { NextFunction, Request, Response } from 'express';
import { ProfileFinder } from '../../readmodel/ProfileFinder';
import { ProfileDocumentFinder } from '../repository/queries/ProfileDocumentFinder';
import { profileModel } from '../repository/schema/profileModel';
import { GetProfileCommand } from '../../commands/getprofile/GetProfileCommand';
import { GetProfileCommandHandler } from '../../commands/getprofile/GetProfileCommandHandler';
import { ProfileView } from '../../readmodel/ProfileView';


export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const profileFinder: ProfileFinder = new ProfileDocumentFinder(profileModel);

        const command: GetProfileCommand = new GetProfileCommand(req.params.id);
        const commandHandler: GetProfileCommandHandler = new GetProfileCommandHandler(profileFinder);

        const profile: ProfileView = await commandHandler.handle(command);
        res.json(profile);
    } catch (e) {
        next(e);
    }
}
