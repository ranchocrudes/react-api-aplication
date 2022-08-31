import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Autocomplete, TextField } from "@mui/material";

interface Coin {
  name: string;
  value: number;
}

export default function SearchBar({ childToParent }: any) {
  const [value, setValue] = React.useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [busca, setBusca] = useState("");
  const [options, setOptions] = React.useState<readonly Coin[]>([]);

  useEffect(() => {
    if (busca.length === 3) {
      setLoading(true);
      api(setOptions, busca);
      setLoading(false);
    }
  }, [busca]);
  return (
    <Autocomplete
      sx={{ width: "200px" }}

      style={{ marginTop: '50px' }}
      options={options}
      clearIcon={false}
      getOptionLabel={(option: Coin) => option.name}
      renderInput={(params) => (
        <TextField
          style={{ backgroundColor: "white", color: 'white', borderRadius: 7 }}
          value={busca}
          onChange={({ target }) => { setBusca(target.value) }}
          {...params}
          label="Pesquisar"
        />
      )}
      value={value}
      onChange={(event: any, newValue: string | any) => {
        childToParent(newValue);
        setValue(newValue);
        console.log(busca)
      }}
    />
  );
}
