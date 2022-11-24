import { validateData } from "./validate";

describe('validate functions', () => {
    it('should be able to check if the valid value', () => {
        const value = 'test';
        expect(validateData(value)).toBeTruthy();
    })

    it('should be able to check if the invalid value', () => {
        const empty_value = '';
        const null_value = null;
        const undefined_value = undefined;
        expect(validateData(empty_value)).toBeFalsy();
        expect(validateData(null_value)).toBeFalsy();
        expect(validateData(undefined_value)).toBeFalsy();
    })
})