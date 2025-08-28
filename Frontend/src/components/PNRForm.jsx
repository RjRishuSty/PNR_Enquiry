import {
  Box,
  Button,
  CircularProgress,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import TrainIcon from "@mui/icons-material/Train";
import { enqueueSnackbar } from "notistack";
import { getPnrStatus } from "../api/pnrApi";
import PassengerDetails from "./PassengerDetails";

const PNRForm = () => {
  //* All States are here...................
  const isMobile = useMediaQuery('(max-width:660px)');
  const [pnr, setPnr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [pnrData, setPnrData] = useState([]);
  //* Handle Validate! check pnr formate ...................
  const handleValidate = () => {
    if (!pnr) {
      enqueueSnackbar("PNR number is required", { variant: "error" });
      return false;
    }
    if (!/^\d+$/.test(pnr)) {
      enqueueSnackbar("PNR number must be numeric", { variant: "error" });
      return false;
    }
    if (pnr.length !== 10) {
      enqueueSnackbar("PNR number must be 10 digits", { variant: "error" });
      return false;
    }
    return true;
  };

  //* Handle showSnackbar..........
  const showSnackbar = (msg, variant = "info") => {
    enqueueSnackbar(typeof msg === "string" ? msg : JSON.stringify(msg), {
      variant,
    });
  };

  //* Handle Submit form data..................
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!handleValidate()) return;
    try {
      setIsLoading(true);
      const response = await getPnrStatus(pnr);
      if (response.success) {
        setPnrData(response.data);
        setIsOpenModal(true);
        showSnackbar(
          response.message ||
            "Great! We fetched your journey details successfully.",
          "success"
        );
      } else {
        showSnackbar(response.message || "Invalid PNR Number", "error");
      }
    } catch (error) {
      enqueueSnackbar(error.message || "Something went wrong", {
        variant: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
   <>
     <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        mt: 4,
        width: isMobile?"100%":"50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <TextField
        fullWidth
        size="large"
        varient="outlined"
        label="PNR Number"
        type="text"
        placeholder="Enter PNR Number"
        value={pnr}
        onChange={(e) => setPnr(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <TrainIcon color="action" />
            </InputAdornment>
          ),
        }}
      />
      <Button type="submit" size="large" variant="contained" sx={{ mt: 2 }}>
        {isLoading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          "Check Status"
        )}
      </Button>
    </Box>
    {
        isOpenModal?<PassengerDetails isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} pnrData={pnrData}/>:''
    }
   </>
  );
};

export default PNRForm;
