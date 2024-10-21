import crypto from 'crypto';
import { Item } from './item';
import { ItemGenerator } from './item-generator';


jest.mock('crypto')

describe('Item Generator', () => {

    it('should return an element', () => {
        jest.spyOn(crypto, 'randomInt').mockImplementation(() => 4);
        const result = ItemGenerator.generate()

        expect(result).toBe(Item.ETHER);
    })

})

