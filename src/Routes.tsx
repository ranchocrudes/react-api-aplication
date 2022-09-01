import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CurrencyLayer from './Pages/CurrencyLayer';

import GraficBtc from './Pages/GraficBtc';

export function AppRoutes() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<CurrencyLayer />} />
                <Route path="/graficBtc" element={<GraficBtc />} />
            </Routes>
        </Router>
    )
}