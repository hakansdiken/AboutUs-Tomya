import React, { ReactElement } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  SvgIconProps,
} from "@mui/material";
import ".././App.css";

interface MyCardProps {
  icon: ReactElement<SvgIconProps>;
  cardText: string;
  cardHeading: string;
}

export const MyCard: React.FC<MyCardProps> = ({ icon, cardText, cardHeading }) => (
  <Grid item m={3}>
    <Card
      sx={{ borderRadius: "12px", width: "300px", height: "300px" }}
      elevation={3}
    >
      <CardContent>
        <Grid container spacing={2} direction="column">
          <Grid item>{icon}</Grid>
          <Grid item>
            <Typography variant="h5" fontWeight="bold">
              {cardHeading}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">{cardText}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </Grid>
);

