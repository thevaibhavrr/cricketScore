import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { getMatchDetail } from "../../api/api";

function MyCard(match) {
  const [mathcDetail , SetMatchDetail]= useState({})
  const [open,SetOpen] = useState(false);
  const handelClick = async (id) => {
    await getMatchDetail(id)
      .then((data) => {
        console.log("Match data", data);
        SetMatchDetail(data)
        handelOpen()
      })
      .catch((e) => {
        console.log("error", e);
      });
    // alert(id)
  };
  const getMatchCard = () => {
    return (
      <Card style={{ marginTop: 20 }}>
        <CardContent>
          <Grid
            container
            justifyContent="center"
            spacing={7}
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h5">{match.match.teams[0]}</Typography>
            </Grid>
            <Grid item>
              <img
                style={{ width: 100 }}
                src={require("../../img/vs.png")}
                alt="vs im"
              />
            </Grid>
            <Grid item>
              <Typography variant="h5">{match.match.teams[1]}</Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container justifyContent="center">
            <Button
              onClick={() => {
                handelClick(match.match.id);
              }}
              variant="contained"
              color="primary"
            >
              Show Details
            </Button>
            <Button
              style={{ marginLeft: 15 }}
              variant="contained"
              color="primary"
            >
              Start Time : {new Date(match.match.dateTimeGMT).toLocaleString()}
            </Button>
          </Grid>
        </CardActions>
      </Card>
    );
  };

  const handelClose = ()=>{
    SetOpen(false)
  }
  const handelOpen = ()=>{
    SetOpen(true);
  }

  const getDailog =()=>(
    <Dialog open={open} onClose={handelClose}>
      <DialogTitle id="alert-dialog-title">{"Match Details....."}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography>{mathcDetail.status}</Typography>
          <Typography>
            Match{" "}
            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
              {" "}
              {mathcDetail.matchstarted ? "Strated" : "Stil Not start "}{" "}
            </span>
          </Typography>
          <Typography>
            Score{" "}
            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
              {" "}
              {mathcDetail.score}
            </span>
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handelClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )


  return (
    getMatchCard()
    //  getDailog()
     )
}

export default MyCard;
