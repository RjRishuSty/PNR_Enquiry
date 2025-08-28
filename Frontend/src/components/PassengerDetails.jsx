import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { formatDateTime } from "../utils/formatDateTime";
import { formatJourneyClass } from "../utils/formatJourneyClass";

const PassengerDetails = ({ isOpenModal, setIsOpenModal, pnrData }) => {
   const smallMobile = useMediaQuery('(max-width:545px)');

  return (
    <Dialog
      open={isOpenModal}
      onClose={() => setIsOpenModal(false)}
      fullWidth
      maxWidth={smallMobile?"lg": "md"}
    >
      <DialogTitle
        variant="h6"
        sx={{ fontWeight: 600, fontFamily: "Montserrat, sans-serif" }}
      >
        Indian Railways Journey Details
      </DialogTitle>
      <DialogContent dividers>
        {pnrData ? (
          <Box>
            <Grid container spacing={2} display="flex" flexDirection="row">
              <Grid size={{ xs: 12, sm: 12, md: 6 }} sx={{ py: 2 }}>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                >
                  PNR Number :-{" "}
                  <Typography
                    variant="subtitle2"
                    component="span"
                    sx={{ letterSpacing: 0.5 }}
                  >
                    {pnrData.pnrNumber}
                  </Typography>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                >
                  Train Name :-{" "}
                  <Typography
                    variant="subtitle2"
                    component="span"
                    sx={{ letterSpacing: 0.5 }}
                  >
                    {" "}
                    {pnrData.trainName} ({pnrData.trainNumber})
                  </Typography>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                >
                  Class :-{" "}
                  <Typography
                    variant="subtitle2"
                    component="span"
                    sx={{ letterSpacing: 0.5, textTransform: "uppercase" }}
                  >
                    {formatJourneyClass(pnrData.journeyClass)}
                  </Typography>
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                >
                  Journey Date :-{" "}
                  <Typography
                    component="span"
                    sx={{ textTransform: "uppercase" }}
                  >
                    {formatDateTime(pnrData.dateOfJourney)}
                  </Typography>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                >
                  Arrival Date :-{" "}
                  <Typography
                    component="span"
                    sx={{ textTransform: "uppercase" }}
                  >
                    {formatDateTime(pnrData.arrivalDate)}
                  </Typography>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                >
                  From :-{" "}
                  <Typography
                    variant="subtitle2"
                    component="span"
                    sx={{ letterSpacing: 0.5 }}
                  >
                    {pnrData.sourceStation}
                  </Typography>{" "}
                  ➝ To :-{" "}
                  <Typography
                    variant="subtitle2"
                    component="span"
                    sx={{ letterSpacing: 0.5 }}
                  >
                    {pnrData.destinationStation}
                  </Typography>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
                >
                  Quota :-{" "}
                  <Typography
                    variant="subtitle2"
                    component="span"
                    sx={{ letterSpacing: 0.5 }}
                  >
                    {pnrData.quota}
                  </Typography>
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Passenger Details:-
                </Typography>
                <List>
                  {pnrData.passengerList?.map((p, i) => (
                    <ListItem key={i} sx={{ borderBottom: "1px solid #eee" }}>
                      <ListItemText
                        primary={`Passenger ${i + 1}`}
                        secondary={`Booking: ${p.bookingStatus} → Current: ${p.currentStatus}`}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Typography>No data available</Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={() => setIsOpenModal(false)}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PassengerDetails;
