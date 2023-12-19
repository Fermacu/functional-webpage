import React from "react";

import { Grid, Select, Stack, TextField, Typography } from "@mui/material";

import { data } from "../Data/data";

import ItemCard from "./ItemCard";

export default function Catalogue() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography>Catálogo de Productos</Typography>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" spacing={1}>
          <Select sx={{ width: "200px", height: "35px" }} />
          <TextField sx={{ width: "400px" }} />
        </Stack>
      </Grid>
      {data.items.map((item) => (
        <Grid item xs={6} sm={4} md={3} lg={2} key={item.id}>
          <ItemCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
}
