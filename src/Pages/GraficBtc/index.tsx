import React, { useEffect, useState } from "react";
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
import './style.css';
import { useNavigate } from 'react-router-dom';
import { apiBtc } from '../../services/api';
import Moment from 'moment';
import { TextField } from "@mui/material";

interface Values {
    date: string
    values: number
}

export default function GraficBtc() {
    const [value, setValue] = useState([])
    const [infos, setInfos] = useState<Values[]>([])
    const [days, setDays] = React.useState<any | null>(null);
    let j = 5;

    const navigate = useNavigate();
    useEffect(() => {
        try {
            if (days != undefined) {
                apiBtc(setValue, days);

                setInfos((value.map(store => {
                    j--;
                    return {
                        date: Moment().days(j).format('DD-MM-YYYY'),
                        values: store
                    }

                })))

            }
            navigate('/graficBtc')
        }
        catch (error) {
            console.log(error)
        }
        
    }, [days]);

    return (
        <>
            <BarSup />
            <div className="graficContainer">
                <div className="containerInput">
                    <TextField
                        id="outlined-number"
                        className='input'
                        onChange={(e) => setDays(e.target.value)}
                        placeholder='Dias'
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <ResponsiveContainer width="100%" aspect={3} >
                    <LineChart data={infos} >
                        <CartesianGrid />
                        <XAxis dataKey="date"
                            interval={'preserveStartEnd'} />
                        <YAxis></YAxis>
                        <Legend />
                        <Tooltip />
                        <Line dataKey="values"
                            stroke="red" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>

            </div>
        </>
    );
}