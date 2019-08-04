import { average } from './functions';

describe('Test my Fn', () => {
    it('average should  work', () => {
        expect(average(3, '3', 3)).toEqual('Average is 3');
    });
});
