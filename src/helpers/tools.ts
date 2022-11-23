import axios from "axios";

export const getDollarValue = async () => {
    try {
        const response = await axios.get('https://economia.awesomeapi.com.br/all/USD-BRL');
        return response.data.USD.ask;
    } catch (error) {
        console.error("Error:", error);
    }
}

export const getTimestamp = (): number => {
    const timestamp = new Date().getTime();
    return timestamp;
}

export const formatDigits = (value: number): number => {
    let digits = 2;

    if (Number(value) < 1) {
        const decimals = countDecimalPoint(value.toString());

        if (decimals > 0 && decimals <= 4) {
            digits = 4;
        } else if (decimals > 4) {
            digits = 8;
        }
    }

    return parseFloat(Number(value).toFixed(digits));
}

export const countDecimalPoint = (value: string): number => {
    const decimals = value.split('.')[1];
    return decimals.length;
}

export const convertMarketCap = (marketCap: string, currency_quotation: number): string => {
    const data = extractMarketCapData(marketCap);
    const decimals = 3;

    let amount = (parseFloat(data.amount) * currency_quotation);

    let market_value = amount.toFixed(decimals);
    let unit = data.unit;

    if (amount > 1000) {
        market_value = (amount / 1000).toFixed(decimals);

        switch (data.unit) {
            case "M":
                unit = "B";
                break;
            case "B":
                unit = "T";
                break;
            default:
                unit = "M";
                break;
        }
    }

    return `${market_value}${unit}`;
}

const extractMarketCapData = (marketCapData: string) => {
    const unit_extraction = marketCapData.match(/[a-z, A-Z]/g);
    let amount = marketCapData;
    let unit = "";

    if (unit_extraction !== null) {
        amount = marketCapData.replace(unit_extraction![0], "");
        unit = unit_extraction?.toString();
    }

    return { amount, unit };
}