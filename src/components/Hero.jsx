import React, { useState, useEffect } from "react";
import { Box, Typography, AppBar, Tabs, Tab } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import  Hotels  from "./subComponent/Hotels";
import styles from "@/styles/Home.module.css";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const Hero = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  useEffect(() => {
    // Ensure any side effects or client-specific logic are here
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <Typography
          variant="h4"
          component="h4"
          sx={{ fontWeight: "600", color: "white", textAlign: "center" }}
        >
          Your Trip Starts Here
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
          <Typography
            variant="h7"
            sx={{
              mx: 2,
              cursor: "pointer",
              color: "white",
              textDecoration: "underline",
              textDecorationStyle: "dotted",
              lineHeight: "1px",
            }}
          >
            Secure Payment
          </Typography>
          <Box
            component="span"
            sx={{
              height: "16px",
              width: "1px",
              backgroundColor: "white",
              mx: 1,
            }}
          />
          <Typography
            variant="h7"
            sx={{
              mx: 2,
              cursor: "pointer",
              color: "white",
              textDecoration: "underline",
              textDecorationStyle: "dotted",
              lineHeight: "1px",
            }}
          >
            Support in approx 30s
          </Typography>
        </Box>
        <Box sx={{ width: "100%", margin: "auto" }}>
          <AppBar position="static" sx={{ borderRadius: "30px", background: "rgba(15, 41, 77, .8)", backdropFilter: "blur(6px)", width: "60%", margin: "auto" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
              sx={{
                padding: "5px",
                "& .css-1aquho2-MuiTabs-indicator": {
                  display: 'none',
                },
              }}
            >
              <Tab label="Item One" {...a11yProps(0)} sx={{ ...(value === 0 && { backgroundColor: 'background.paper', color: '#0f294d', borderRadius: "30px" }), }} />
              <Tab label="Item Two" {...a11yProps(1)} sx={{ ...(value === 1 && { backgroundColor: 'background.paper', color: '#0f294d', borderRadius: "30px" }), }} />
              <Tab label="Item Three" {...a11yProps(2)} sx={{ ...(value === 2 && { backgroundColor: 'background.paper', color: '#0f294d', borderRadius: "30px" }), }} />
            </Tabs>
          </AppBar>
          <Box sx={{ bgcolor: "background.paper", marginTop: "-20px", width: "100%", borderRadius: "10px" }}>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                <Hotels />
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                Item Three
              </TabPanel>
            </SwipeableViews>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Hero;
