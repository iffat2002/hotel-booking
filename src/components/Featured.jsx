import { React, useState } from "react";
import HotelCard from "./subComponent/HotelCard";
import {
  Box,
  Grid,
  Stack,
  Typography,
  Tabs,
  Tab,
  Button,
  Link,
  Card,
  CardContent,
  CardMedia,
  Rating,
} from "@mui/material";
import PropTypes from "prop-types";
import styles from "../styles/Home.module.css";
import { useTheme } from "@mui/material/styles";
import WhiteTooltip from "./subComponent/whiteTooltip";

const shanghaiData = [
  {
    id: 1,
    title: "Sukhumvit Park, Bangkok Marriott Executive ",
    rating: 4.5,
    imageUrl:
      "https://www.hotelscombined.co.uk/himg/6c/0d/c7/leonardo-2091356-HISHA_6076473916_O-459641.jpg",

    reviews: 250,
    price: "US$156",
  },
  {
    id: 2,
    title: "The Landmark Bangkok",
    rating: 4.2,
    imageUrl:
      "https://www.travelandleisure.com/thmb/jTtnWV1IbSv-kil_GGdJbk8cTkQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/capella-bangkok-004-TOPHOTELSWB21-fc4a3afc3272422799a46f5d08c0be4e.jpg", // Replace with actual image URL
    reviews: 300,
    price: "US$140",
  },
  {
    id: 3,
    title: "Shangri-La Hotel, Bangkok",
    rating: 4.7,
    imageUrl:
      "https://www.travelandleisure.com/thmb/1jcK9OesPquJsxUKIsZEzV_9_Yg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/waldorf-astoria-maldives-ithaafushi-03_100HTLSWB22-dff1e73d284649b0b5fc35c50bf25362.jpg", // Replace with actual image URL
    reviews: 500,
    price: "US$200",
  },
];
const beijingData = [
  {
    id: 1,
    title: "Beijing Marriott Hotel Northeast - Beijing Stadium (Bird's Nest)",
    rating: 4.6,
    imageUrl:
      "https://cdn.britannica.com/20/20120-050-89764C76/Tiananmen-entryway-Imperial-City-China-Beijing.jpg",
    reviews: 320,
    price: "US$180",
  },
  {
    id: 2,
    title: "Hilton Beijing Wangfujing",
    rating: 4.4,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIPsqJ5Cmq9MGAckzn1VyIYGUpEv6VuarbiQ&s",
    reviews: 280,
    price: "US$170",
  },
  {
    id: 3,
    title: "The Ritz-Carlton Beijing",
    rating: 4.8,
    imageUrl:
      "https://cdn.britannica.com/61/117761-050-B328BD72/Tiananmen-entryway-Imperial-City-Beijing.jpg",
    reviews: 450,
    price: "US$220",
  },
];

const tokyoData = [
  {
    id: 1,
    title: "Shinjuku Gyoen National Garden - The Tokyo",
    rating: 4.7,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRhpCEGA33m-NqlP0x9IGmZ3KYAo5SsRdvqw&s",
    reviews: 4030,
    price: "US$210",
  },
  {
    id: 2,
    title: "Park Hyatt Tokyo",
    rating: 4.9,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3R7ytCTFGE7xS2_l7PoHTyS2MuO2QAVs63g&s",
    reviews: 5130,
    price: "US$250",
  },
  {
    id: 3,
    title: "The Peninsula Tokyo",
    rating: 4.8,
    imageUrl:
      "https://content.r9cdn.net/rimg/dimg/30/2c/c2817db5-city-21033-159036d7254.jpg?width=1366&height=768&xhint=1051&yhint=774&crop=true",
    reviews: 490,
    price: "US$230",
  },
];

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
      {value === index && <Box sx={{ pt: 1 }}>{children}</Box>}
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
        height: "580px",
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
                minHeight: "35px",
                padding: "10px",
                textTransform: "none",
                boxShadow: "0 8px 16px 0 rgba(15,41,77,.08)",
                "&:hover": {
                  color: theme.palette.primary.dark,
                },
                ...(value === 0 && {
                  backgroundColor: "#0F294D",
                  color: "white !important",
                  fontWeight: "700",
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
                minHeight: "35px",
                padding: "10px",
                textTransform: "none",
                boxShadow: "0 8px 16px 0 rgba(15,41,77,.08)",
                "&:hover": {
                  color: theme.palette.primary.dark,
                },
                ...(value === 1 && {
                  backgroundColor: "#0F294D",
                  color: "white !important",
                  fontWeight: "700",
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
                minHeight: "35px",
                padding: "10px",
                textTransform: "none",
                boxShadow: "0 8px 16px 0 rgba(15,41,77,.08)",
                "&:hover": {
                  color: theme.palette.primary.dark,
                },
                ...(value === 2 && {
                  backgroundColor: "#0F294D",
                  color: "white !important",
                  fontWeight: "700",
                }),
              }}
              label="Tokyo"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Grid container spacing={2}>
            <Grid item xs={9} sx={{ position: "relative" }}>
              <Grid container spacing={2}>
                {shanghaiData.map((card) => (
                  <HotelCard key={card.id} card={card} />
                ))}
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Card
                sx={{
                  borderRadius: "8px",
                  maxHeight: "365px",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    overflow: "hidden",
                    "&:hover img": {
                      transform: "scale(1.1)", 
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      transition: "transform 0.3s ease-in-out", 
                      width: "100%",
                      maxHeight: "380",
                    }}
                    image="https://aw-s.tripcdn.com/modules/ibu/online-home/b0c8dc949e5e03c58041e395601d75a7.b0c8dc949e5e03c58041e395601d75a7.png"
                    alt="go now"
                  />
                </Box>
                <CardContent
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    bottom: 0,
                    color: "white",
                    background:
                      "linear-gradient(180deg, transparent, #5a9aa5 48px, #5a9aa5)",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      textTransformation: "none",
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    Discover great deals on hotels around the world
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      textTransformation: "none",
                      fontWeight: "700",
                      width: "100%",
                      mt: 1,
                    }}
                  >
                    Go Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
        <Grid container spacing={2}>
            <Grid item xs={9} sx={{ position: "relative" }}>
              <Grid container spacing={2}>
                {beijingData.map((card) => (
                  <HotelCard key={card.id} card={card} />
                ))}
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Card
                sx={{
                  borderRadius: "8px",
                  maxHeight: "365px",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    overflow: "hidden",
                    "&:hover img": {
                      transform: "scale(1.1)", 
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      transition: "transform 0.3s ease-in-out", 
                      width: "100%",
                      maxHeight: "380",
                    }}
                    image="https://aw-s.tripcdn.com/modules/ibu/online-home/b0c8dc949e5e03c58041e395601d75a7.b0c8dc949e5e03c58041e395601d75a7.png"
                    alt="go now"
                  />
                </Box>
                <CardContent
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    bottom: 0,
                    color: "white",
                    background:
                      "linear-gradient(180deg, transparent, #5a9aa5 48px, #5a9aa5)",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      textTransformation: "none",
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    Discover great deals on hotels around the world
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      textTransformation: "none",
                      fontWeight: "700",
                      width: "100%",
                      mt: 1,
                    }}
                  >
                    Go Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
        <Grid container spacing={2}>
            <Grid item xs={9} sx={{ position: "relative" }}>
              <Grid container spacing={2}>
                {tokyoData.map((card) => (
                  <HotelCard key={card.id} card={card} />
                ))}
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Card
                sx={{
                  borderRadius: "8px",
                  maxHeight: "365px",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    overflow: "hidden",
                    "&:hover img": {
                      transform: "scale(1.1)", 
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      transition: "transform 0.3s ease-in-out", 
                      width: "100%",
                      maxHeight: "380",
                    }}
                    image="https://aw-s.tripcdn.com/modules/ibu/online-home/b0c8dc949e5e03c58041e395601d75a7.b0c8dc949e5e03c58041e395601d75a7.png"
                    alt="go now"
                  />
                </Box>
                <CardContent
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    bottom: 0,
                    color: "white",
                    background:
                      "linear-gradient(180deg, transparent, #5a9aa5 48px, #5a9aa5)",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      textTransformation: "none",
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    Discover great deals on hotels around the world
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      textTransformation: "none",
                      fontWeight: "700",
                      width: "100%",
                      mt: 1,
                    }}
                  >
                    Go Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default Featured;
