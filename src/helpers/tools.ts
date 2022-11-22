import axios from "axios";

export const getDollarValue = async () => {
    try {
        const response = await axios.get('https://economia.awesomeapi.com.br/all/USD-BRL');
        return response.data.USD.ask;
    } catch (error) {
        console.error("Error:", error);
    }
}

export const getCurrentDate = () => {
    const current_date = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
    return current_date;
}

export const formatDigits = (value: number) => {
    let digits = 0;
    (value >= 1) ? digits = 2 : digits = 6;
    return value.toFixed(digits);
}