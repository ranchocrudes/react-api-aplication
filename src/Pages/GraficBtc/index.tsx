import { useEffect, useState } from 'react';
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';
import BarSup from '../../components/BarSup';
import { apiBtc } from '../../services/api';
import './style.css'

interface Btc {
    date: string
    value: number | unknown;
}

const pdata: Btc[] = [
    {
        date: '25/08/2022',

        value: 21591
    },
    {
        date: '26/08/2022',

        value: 20209
    },
    {
        date: '27/08/2022',

        value: 20051
    },
    {
        date: '28/08/2022',

        value: 19571
    },
    {
        date: '29/08/2022',

        value: 20275
    },
    {
        date: '',
        value: 0
    }
];

export default function GraficBtc() {
    const [value, setValue] = useState<number>()
    const date = new Date().toLocaleDateString();
    useEffect(() => {
        apiBtc(setValue)
        pdata.forEach(vet => {
            if (vet.date == '') {
                vet.date = date;
                vet.value = value;
            }
        })
    }, [value]);
    return (
        <>
            <BarSup />
            <div className="graficContainer">
                <h1 className="textBtc">
                    Grafic Btc
                </h1>
                <ResponsiveContainer width="90%" aspect={3} >
                    <LineChart data={pdata} >
                        <CartesianGrid />
                        <XAxis dataKey="date"
                            interval={'preserveStartEnd'} />
                        <YAxis></YAxis>
                        <Legend />
                        <Tooltip />

                        <Line dataKey="value"
                            stroke="red" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}

