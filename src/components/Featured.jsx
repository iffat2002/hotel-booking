import { React, useState } from "react";
import { Box, Grid, Stack, Typography, Tabs, Tab, Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "@/styles/Home.module.css";
import { useTheme } from "@mui/material/styles";
import WhiteTooltip from "./subComponent/whiteTooltip";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Featured = () => {
    const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: "90%",
        margin: "40px auto",
        height: "555px",
        backgroundColor: "#FDF6F4",
        borderRadius: "12px",
        position: "relative",
        padding: 3,
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "700" }} component="div">
        Featured Properties
      </Typography>
      <Box display="flex" alignItems="center" mt={3}>
        <WhiteTooltip title="We aim to offer you best possible price">
          <Typography
            variant="h7"
            sx={{
              cursor: "pointer",
              color: "#403a3a",
              fontWeight: "600",
              textDecoration: "underline",
              textDecorationStyle: "dotted",
              lineHeight: "1px",
            }}
          >
            We Price Match
          </Typography>
        </WhiteTooltip>
        <WhiteTooltip title="if the hotels confirms yours booking">
          <Typography
            variant="h7"
            sx={{
              mx: 2,
              cursor: "pointer",
              color: "#403a3a",
              fontWeight: "600",
              textDecoration: "underline",
              textDecorationStyle: "dotted",
              lineHeight: "1px",
            }}
          >
            Hotel Booking Guarantee
          </Typography>
        </WhiteTooltip>
        <WhiteTooltip title="if the hotel cant provide you room on your arival">
          <Typography
            variant="h7"
            sx={{
              cursor: "pointer",
              color: "#403a3a",
              fontWeight: "600",
              textDecoration: "underline",
              textDecorationStyle: "dotted",
              lineHeight: "1px",
            }}
          >
            Hotel Stay Guarantee
          </Typography>
        </WhiteTooltip>
      </Box>

      <Box sx={{ width: "100%", my: 4 }}>
        <Box sx={{ borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{ "& .MuiTabs-indicator": { display: "none" } }}
            aria-label="basic tabs example"
          >
            <Tab
              sx={{
                backgroundColor: "white",
                marginRight: 2,
                borderRadius: 1,
                color: "black",
                minHeight: '35px',
                padding:"10px",
                textTransform:"none",
                boxShadow: '0 8px 16px 0 rgba(15,41,77,.08)',
                "&:hover":{
                    color:theme.palette.primary.dark
                },
                ...(value === 0 && {
                  backgroundColor: "#0F294D",
                  color: "white !important",
                  fontWeight:"700",
                }),
              }}
              label="Shanghai"
              {...a11yProps(0)}
            />
            <Tab
             sx={{
                backgroundColor: "white",
                marginRight: 2,
                borderRadius: 1,
                color: "black",
                minHeight: '35px',
                padding:"10px",
                textTransform:"none",
                boxShadow: '0 8px 16px 0 rgba(15,41,77,.08)',
                "&:hover":{
                    color:theme.palette.primary.dark
                },
                ...(value === 1 && {
                  backgroundColor: "#0F294D",
                  color: "white !important",
                  fontWeight:"700",
                }),
              }}
              label="Beijing"
              {...a11yProps(1)}
            />
            <Tab
              sx={{
                backgroundColor: "white",
                marginRight: 2,
                borderRadius: 1,
                color: "black",
                minHeight: '35px',
                padding:"10px",
                textTransform:"none",
                boxShadow: '0 8px 16px 0 rgba(15,41,77,.08)',
                "&:hover":{
                    color:theme.palette.primary.dark
                },
                ...(value === 2 && {
                  backgroundColor: "#0F294D",
                  color: "white !important",
                  fontWeight:"700",
                }),
              }}
              label="Tokyo"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default Featured;
