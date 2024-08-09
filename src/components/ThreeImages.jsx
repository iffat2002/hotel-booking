import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";


const ImageWrapper = styled(Box)({
  overflow: "hidden",
  borderRadius: '10px',
  cursor:"pointer",
  "& img": {
    transition: "transform 0.3s ease-in-out",
    width: "100%",
    height: "auto",
    borderRadius: '10px',
  },
  "&:hover img": {
    transform: "scale(1.1)",
    borderRadius: '10px',
  },
});

const ThreeImages = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        borderTopLeftRadius: "30px",
        borderTopRightRadius: "30px",
        padding:"25px 0px"
      }}
    >
      <Grid container spacing={2} sx={{ width: "90%", margin: "auto", }}>
        <Grid item xs={4} >
          <ImageWrapper>
            <img
              src="https://ak-d.tripcdn.com/images/1gz1h12000d5icpilD452.jpg"
              alt="Image 1"
              
            />
          </ImageWrapper>
        </Grid>
        <Grid item xs={4}>
          <ImageWrapper>
            <img src="https://dimg04.tripcdn.com/images/0a13l12000815zxlz6BBB.jpg" alt="Image 2" />
          </ImageWrapper>
        </Grid>
        <Grid item xs={4}>
          <ImageWrapper>
            <img src="https://dimg04.tripcdn.com/images/0a14812000evuh4q8C900.png" alt="Image 3" />
          </ImageWrapper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ThreeImages;
