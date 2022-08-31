import React from "react";
import "./style.css";
import { Grid } from "@mui/material";

export default function Box({ childToParent, onDelete }: any) {
  const siglaCoin = childToParent.name.substring(3, 0);
 console.log(siglaCoin);
  return (
    < >
    
      <Grid className="boxContainer"  item xs={2} sm={3} md={4}>
        <div style={{display:'flex',backgroundColor:'red',margin:'20px'}}>

       
        <Grid item className="box" xs={2} sm={3} md={5}>
          <h1 className="sigla">{siglaCoin}</h1>
          <div className="line" />
        </Grid>

        <Grid container className="textContainer">

          <h1 className="text">Sigla:{childToParent.name}</h1>
          <h1 className="text">Valor:{childToParent.value}</h1>
          <Grid className="delete" container   minHeight={30} maxWidth={30} onClick={() => onDelete(childToParent)}>X</Grid>
        </Grid>
        
        </div>
      </Grid>
     
    </>
  );
}
