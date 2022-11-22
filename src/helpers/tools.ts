import axios from "axios";

export const getDollarValue = async () => {
    try {
        const response = await axios.get('https://economia.awesomeapi.com.br/all/USD-BRL');
        return response.data.USD.ask;
    } catch (error) {
        console.error("Error:", error);
    }
}

export const getTimestamp = () => {
    const timestamp = new Date().getTime();
    return timestamp;
}

export const formatDigits = (value: string): string => {
    let digits = 2;

    if (Number(value) < 1) {
        const decimals = countDecimalPoint(value);

        if (decimals > 0 && decimals <= 4) {
            digits = 4;
        } else if (decimals > 4) {
            digits = 8;
        }
    }

    return (Number(value).toFixed(digits));
}

export const countDecimalPoint = (value: string) => {
    const decimals = value.split('.')[1];
    return decimals.length;
}

export const findLetter = (word: string) => {
    let result = word.match(/[a-z, A-Z]/g);

    let aux = word.replace(result![0], ` ${result}`);
    return aux;
}