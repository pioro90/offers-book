import { RightQuery } from './RightQuery';
import { RightView } from './RightView';

export interface RightFinder {
    find(query: RightQuery): Promise<RightView>;
}