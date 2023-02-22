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

function KK(match) {
  const [mathcDetail, SetMatchDetail] = useState({});
  // console.log(mathcDetail.data);
  const [open, SetOpen] = useState(false);
  const handelClick = async (id) => {
    await getMatchDetail(id)
      .then((data) => {
        // console.log("Match data", data.data.matchStarted);
        SetMatchDetail(data);
        handelClickOpen();
      })
      .catch((e) => {
        console.log("error", e);
      });
    // alert(id)
  };

  const handelClickOpen = () => {
    SetOpen(true);
  };
  const handelClose = () => {
    SetOpen(false);
  };

  const getDailog = () => (
    <Dialog
      open={open}
      onClose={handelClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Match Details....."}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography>{mathcDetail.data.status}</Typography>
          <Typography>
            Match{" "}
            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
              {" "}
              {mathcDetail.data.matchStarted
                ? "Strated"
                : "Stil Not start "}{" "}
            </span>
          </Typography>
          <Typography>
            Score{" "}
            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
              {" "}
              {mathcDetail.data.score}
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
  );

  return getDailog();
}

export default KK;

//  const getDailog = () => (
//     <Dialog
//      open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//         ></Dialog>
//     <div open={open} onClose={handelClose}>
//       <h5 id="alert-dialog-title">{"Match Details....."}</h5>
//       <div>
//         <div id="alert-dialog-description">
//           <div>{mathcDetail.data.status}</div>
//           <div>
//             Match{" "}
//             <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
//               {" "}
//               {mathcDetail.data.matchStarted
//                 ? "Strated"
//                 : "Stil Not start "}{" "}
//             </span>
//           </div>
//           <div>
//             Score{" "}
//             <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
//               {" "}
//               {mathcDetail.data.score}
//             </span>
//           </div>
//         </div>
//       </div>
//       <div>
//         <Button onClick={handelClose} color="primary" autoFocus>
//           Close
//         </Button>
//       </div>
//     </div>
//   );
