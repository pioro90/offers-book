import { Repository } from '../../../common/ddd/Repository';
import { Right } from './Right';

export interface RightRepository extends Repository<Right> {

    loadAll(ids: string[]): Promise<Right[]>;

}