import { fizzBuzz } from '../src/fizzbuzz'

describe('FizzBuzz', () => {

    it('should return 1 when input is 1', () => {
        expect(fizzBuzz(1)).toEqual(1)
    })

    it('should return fizz when input is multiple of 3', () => {
        expect(fizzBuzz(3)).toEqual('fizz')
        expect(fizzBuzz(9)).toEqual('fizz')
    })

})
