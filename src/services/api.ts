import axios from "axios";

export function api(setCoin: any, coin: string) {
    axios
        .get(
            "https://api.apilayer.com/currency_data/live?source=" +
            coin +
            "&currencies=",
            {
                headers: {
                    apiKey: "rpy5qaKIQBgUCDdC9OZUDmi8mCN189Bc"
                }
            }
        )
        .then((response) => {
            setCoin(
                Object.keys(response.data.quotes).map((item, index) => ({
                    name: Object.keys(response.data.quotes)[index],
                    value: Object.values(response.data.quotes)[index]
                }))
            );
        });
}

export function apiBtc(setValue: number | any,) {
    axios
        .get("https://api.blockchain.com/v3/exchange/tickers/BTC-USD", {
            headers: {
                apiKey: "1405af28-6a19-4f74-bbef-b62874fd93ff"
            }
        })
        .then((response) => {
            setValue(response.data.last_trade_price);
        });
}
