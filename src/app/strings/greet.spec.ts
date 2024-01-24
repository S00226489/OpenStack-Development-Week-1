import {greet} from './greet';

describe('greet', () => {
    it('it should include the name in the message', () => {
        expect(greet('Aiden Farrell S00226489')).toContain('Aiden Farrell S00226489');
    });


});