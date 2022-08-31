import { Grid } from "@mui/material";
import React, { useState } from "react";
import BarSup from "../../components/BarSup";
import Box from "../../components/Box";
import SearchBar from "../../components/SearchBar";
import "./style.css";

interface Coin {
  name: string;
  value: number;
}
function CurrencyLayer() {
  const [coin, SetCoin] = useState<Coin[]>([]);

  const childToParent = (childdata: any) => {
    SetCoin((oldValue: any) => [...oldValue, childdata]);
  };

  const handleDelete = (item: any) => {
    SetCoin((oldValue) =>
      oldValue.filter((value) => value.name !== item.name)
    );
  };
  return (
    <>
      <BarSup />
      <Grid id="container" container>
        <Grid item md={2}>
          <SearchBar childToParent={childToParent} />
        </Grid>
        <div className="card" style={coin.length === 0 ? { display: 'none' } : {}}>
          <Grid container columns={{ xs: 8, sm: 12, md: 18 }}>
            {coin.map((item) => (
              <Box childToParent={item} onDelete={handleDelete} />
            ))}
          </Grid>
        </div>
      </Grid>
    </>
  );
}

export default CurrencyLayer;
