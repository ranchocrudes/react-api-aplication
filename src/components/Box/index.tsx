import React from "react";
import "./style.css";
import { Grid } from "@mui/material";

export default function Box({ childToParent, onDelete }: any) {

  if(childToParent != null)
  {
    console.log(childToParent);
  const siglaCoin = childToParent.name.substring(3, 0);
  return (
    < >
      <Grid className="boxContainer" item xs={2} sm={3} md={4}>
        <Grid item className="box" xs={2} sm={3} md={5}>
          <h1 className="sigla">{siglaCoin}</h1>
          <div className="line" />
        </Grid>

        <Grid  item className="textContainer">
     
            <h1 className="text">Sigla:{childToParent.name}</h1>
            <h1 className="text">Valor:{childToParent.value}</h1>
        </Grid>
        <div className="deleteContainer">
            <Grid className="delete" minHeight={30} maxWidth={30} onClick={() => onDelete(childToParent)}><h1 className="X">X</h1></Grid>
          </div>
      </Grid>
    </>
  );
  }
  else{
    return <h1>{''}</h1>;
  }
 
}

