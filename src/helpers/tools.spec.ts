import { convertMarketCap, countDecimalPoint, formatDigits, getDollarValue, getTimestamp } from "./tools";

describe('tools test', () => {
    it('should be able to get dollar value', () => {
        const dollar = getDollarValue();
        expect(dollar).not.toBeNull();
        expect(dollar).not.toBeUndefined();
    })

    it('should be able get timestamp', () => {
        const timestamp = getTimestamp();
        expect(timestamp).not.toBeNaN();
        expect(timestamp).not.toBeNull();
        expect(timestamp).not.toBeUndefined();
    })

    it('should be able to format decimal value to cash', () => {
        const cash1 = formatDigits(35.0982);
        const cash2 = formatDigits(0.087);
        expect(cash1).toEqual(35.10);
        expect(cash2).toEqual(0.0870);
    })

    it('should be able to count decimal point', () => {
        const value = countDecimalPoint('12.2034');
        expect(value).toEqual(4);
    })

    it('should be able to convert market cap to another currency', () => {
        const millions_to_billion = convertMarketCap('250.123M', 5.35);
        const billion_to_billion = convertMarketCap('22.534B', 5.35);
        const billion_to_trillion = convertMarketCap('300.435B', 5.35);
        expect(millions_to_billion).toEqual('1.338B');
        expect(billion_to_billion).toEqual('120.557B');
        expect(billion_to_trillion).toEqual('1.607T');
    })
})