import React from "react";
import Image from "next";
import { Link, Box, Stack, Typography, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";
const QRcode = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "450px",
        position: "relative",
        backgroundImage:
          "url(https://pages.trip.com/images/online-adu/bg_3.webp)",
        backgroundPosition: "50%",
        backgroundSize: "cover",
      }}
    >
      <Stack
        direction="row"
        sx={{
          height: "100%",
          width: "500px",
          right: "0px",
          alignItems: "center",
          position: "absolute",
          zInedx: "2",
        }}
      >
        <Box
          sx={{
            height: "90%",
            width: "inherit",
            backgroundImage:
              "url(https://pages.trip.com/images/online-adu/showImg.png)",
            borderRadius: " 9999px 0 0 9999px",
            backgroundSize: "cover",
          }}
        ></Box>
      </Stack>
      <Box
        sx={{
          width: "80%",
          height: "100%",
          margin: "auto",
          display: "flex",

          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          component="div"
          variant="h4"
          sx={{ color: "white", fontWeight: "700" }}
        >
          Your all-in-one travel app
        </Typography>
        <Stack
          direction="row"
          sx={{
            backgroundColor: "#2346FF",
            width: "360px",
            borderRadius: "50px",
            padding: "10px",
            fontWeight: "700",
            color: "white",
            margin: "10px 0px",
          }}
        >
          <CheckIcon />
          <Typography variant="h7" sx={{ marginRight: "10px" }}>
            App-only Deals
          </Typography>
          <CheckIcon />
          <Typography variant="h7">Easy Trip Planning</Typography>
        </Stack>
        <Stack direction="row" padding="20px 0px">
          <Box
            sx={{
              width: "160px",
              height: "160px",
              borderRadius: "2px",
              backgroundSize: "cover",
              border: "6px solid white",
              backgroundImage:
                "url(data:image/png;base64,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)",
            }}
          ></Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                borderColor: "white",
                borderRadius: '0.5px',

                color: "white",

                "& hr": {
                  mx: 0.5,
                  borderColor: "white",
                },
              }}
            >
              <Box sx={{ padding: "0px 25px",  }}>
                <Typography variant="h4">1.3M+</Typography>
                <Typography variant="h7">Daily Users</Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box sx={{ padding: "0px 25px",  }}>
                <Typography variant="h4">130K+</Typography>
                <Typography variant="h7">Daily Downloads</Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box sx={{ padding: "0px 25px",  }}>
                <Typography variant="h4">4.7</Typography>
                <Typography variant="h7">Rating</Typography>
              </Box>
            
            </Box>
            <Stack direction="row" padding="10px 20px" gap="15px">
            <img src="https://pages.trip.com/images/download-button/en-us/ios-en-us.png" style={{width:"120px"}}></img>
                <img src="https://pages.trip.com/images/download-button/en-us/android-en-us.png" style={{width:"120px"}}></img>
            </Stack>
            <Typography variant="h6" sx={{color:"white", padding:"0px 20px" }}>Scan the QR code to download the app</Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default QRcode;
