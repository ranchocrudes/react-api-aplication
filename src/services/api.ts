import axios from "axios";
import { useEffect } from "react";
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

export function apiBtc(setValue: any, days: number) {
    axios
        .get('https://cors-anywhere.herokuapp.com/https://api.blockchain.info/charts/market-price?timespan=' +
            days +
            'days')
        .then((response) => {
            setValue((response.data.values).map((item: any) => item.y))
        });
}
