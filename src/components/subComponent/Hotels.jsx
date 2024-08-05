import React, { useState } from "react";
import { Autocomplete, TextField, Box, Typography, Paper, Grid, Popper, Button } from "@mui/material";

const destinations = [
  "Bangkok",
  "Shanghai",
  "Hong Kong",
  "Singapore",
  "Beijing",
  "Guangzhou",
  "Tokyo",
  "Dubai",
  "Seoul",
  "Bali",
];

// Custom Popper component
const CustomPopper = (props) => {
  const { anchorEl, open, onSelect, ...rest } = props;
  
  if (!open) return null;

  return (
    <Popper anchorEl={anchorEl} open={open} placement="bottom-start" style={{ width: "700px" }}>
      <Paper>
        <Grid container spacing={0}>
          <Typography
            variant="h7"
            sx={{
              display: "block",
              width: "100%",
              fontWeight: "700",
              color: "gray",
              background: "#f0f0f0",
              padding: 1,
            }}
          >
            Popular Destinations
          </Typography>
          {destinations.map((destination, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Button
                variant="text"
                onClick={() => {
                  onSelect(destination); // Call onSelect with destination
                  
                }}
                sx={{
                  margin: "0px",
                  color: "gray",
                  fontSize: "12px",
                  width: "120px",
                  justifyContent: "flex-start",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#e1e9f7",
                  },
                }}
              >
                <Typography>{destination}</Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Popper>
  );
};

// Hotels component with updated styling and functionality
const Hotels = () => {
  const [value, setValue] = useState("");

  const handleSelect = (destination) => {
    setValue(destination);
  };

  return (
    <Box position="relative">
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        options={destinations}
        isOptionEqualToValue={(option, value) => option === value}
        PopperComponent={(props) => (
          <CustomPopper
            {...props}
            onSelect={handleSelect}
          />
        )}
        disableListWrap
        renderInput={(params) => (
          <TextField
            {...params}
            value={value}
            placeholder="Destinations" // Show placeholder when no value
            variant="standard"
            size="small"
            sx={{
              background: "white",
              width: "300px",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid lightgray",
              "& .MuiInput-underline:before": {
                borderBottom: "none",
              },
              "& .MuiInput-underline:hover:before": {
                borderBottom: "none !important",
              },
              "& .MuiInput-underline:hover:after": {
                borderBottom: "none !important",
              },
              "& .MuiInput-underline:hover": {
                borderBottom: "none !important",
              },
            }}
          />
        )}
      />
    </Box>
  );
};

export default Hotels;
