import React from "react";

import { Divider, Grid, IconButton, Stack, Typography } from "@mui/material";

import Catalogue from "./Catalogue";

import { Menu } from "@mui/icons-material";

export default function Navbar() {
  return (
    <Grid container sx={{ padding: "10px" }} spacing={1}>
      <Grid item xs={12}>
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton>
            <Menu />
          </IconButton>
          <Typography variant="h4"> Logo de la empresa</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={10}>
        <Catalogue />
      </Grid>
    </Grid>
  );
}
