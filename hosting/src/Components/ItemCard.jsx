import React from "react";

import { Button, Card, Stack, Typography } from "@mui/material";

import prueba from "../assets/products-images/prueba.jpg";

export default function ItemCard({ item }) {
  return (
    <Card raised sx={{ borderRadius: 2, height: 350 }}>
      <Stack alignContent="space-between" alignItems="stretch">
        <img sx={{ height: 140 }} src={prueba} alt="product" />

        <Stack>
          <Typography variant="h7" fontWeight="bold" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </Stack>

        <Stack direction="row">
          <Typography variant="h6" color="text.secondary">
            {item.price}
          </Typography>
          <Button size="small" variant="contained">
            Ver producto
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
}
