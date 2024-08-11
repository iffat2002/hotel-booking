import React, { useState } from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Rating,
  IconButton,
  Link,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SavingsIcon from "@mui/icons-material/Savings";

const cardData = [
  {
    id: 1,
    title: "Sukhumvit Park, Bangkok - Marriott Executive Apartments",
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
  {
    id: 4,
    title: "Siam Kempinski Hotel Bangkok",
    rating: 4.6,
    imageUrl:
      "https://img.staticmb.com/mbcontent/images/crop/uploads/2024/2/most-expensive-hotels-in-the-world_0_1200.jpg", // Replace with actual image URL
    reviews: 400,
    price: "US$180",
  },
  {
    id: 5,
    title: "Anantara Riverside Bangkok Resort",
    rating: 4.8,
    imageUrl:
      "https://connectmauritius-prod.s3.eu-west-1.amazonaws.com/small_Anelia_Infinity_Pool_Mauritius_com_4_0eedb15afc.jpg", // Replace with actual image URL
    reviews: 350,
    price: "US$220",
  },
  {
    id: 6,
    title: "Park Plaza Bangkok Soi 18",
    rating: 4.4,
    imageUrl:
      "https://www.travelandleisure.com/thmb/ougvV0q9Cq9RSeyVPQxPblFI1z8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/halekulani-okinawa-029-TOPHOTELSWB21-e36bf85d672a434e9f8c8d08917bc50f.jpg", // Replace with actual image URL
    reviews: 280,
    price: "US$130",
  },
];

const WelcomePack = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    if (currentIndex < cardData.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Box
      sx={{
        width: "90%",
        margin: "30px auto",
        height: "400px",

        backgroundColor: theme.palette.primary.main,
        borderRadius: "12px",
        position: "relative",
        backgroundImage:
          "url('https://file.tripcdn.com/files/7/ibu_online_assets/online-new-guest/kv_1.png')",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid container spacing={2} sx={{ padding: 4, paddingTop: 0 }}>
        <Grid item xs={3}>
          <Typography
            sx={{
              color: "white",
              fontWeight: "700",
              fontSize: "xx-large",
              padding: "45px 0px",
            }}
          >
            Save Big on Your First Booking
          </Typography>
        </Grid>
        <Grid item xs={9} sx={{ position: "relative" }}>
          <Grid container spacing={2} sx={{ paddingTop: "4px" }}>
            {cardData
              .slice(currentIndex, currentIndex + itemsPerPage)
              .map((card) => (
                <Grid item xs={12} sm={6} md={4} key={card.id}>
                  <Card
                    sx={{
                      borderRadius: "8px",
                      height: "100%",
                      paddingTop: "0px",
                    }}
                  >
                    <Box
                      sx={{
                        overflow: "hidden", // Ensure the image doesn’t overflow out of the card
                        "&:hover img": {
                          transform: "scale(1.1)", // Scale the image on hover
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          transition: "transform 0.3s ease-in-out", // Smooth transition
                          width: "100%",
                          height: "183",
                        }}
                        height="183"
                        image={card.imageUrl}
                        alt={card.title}
                      />
                    </Box>
                    <CardContent>
                      <Typography
                        variant="h7"
                        component="div"
                        sx={{ textTransformation: "none", fontWeight: "700" }}
                      >
                        {card.title}
                      </Typography>
                      <Rating
                        value={card.rating}
                        precision={0.5}
                        max={5}
                        readOnly
                      />
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography
                          variant="h7"
                          sx={{
                            fontWeight: "700",
                            color: "white",
                            background: "darkblue",
                            width: "max-content",
                            borderRadius: "20px",
                            borderTopRightRadius: "0px",
                            padding: "3px 8px",
                          }}
                          component="div"
                        >
                          {card.rating}
                          <span
                            style={{ fontSize: "small", fontWeight: "400" }}
                          >
                            {" "}
                            /5
                          </span>{" "}
                        </Typography>
                        <Link href="/" sx={{ color: "darkblue" }}>
                          {card.reviews} reviews
                        </Link>
                      </Stack>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "700", textAlign: "right" }}
                      >
                        {card.price}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>

          <IconButton
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            sx={{
              position: "absolute",
              top: "50%",
              left: "-20px",
              transform: "translateY(-50%)",
              backgroundColor: theme.palette.primary.dark,
              color: "white",
              "&:hover": {
                backgroundColor: theme.palette.primary.light,
              },
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>

          <IconButton
            onClick={handleNext}
            disabled={currentIndex >= cardData.length - itemsPerPage}
            sx={{
              position: "absolute",
              top: "50%",
              right: "-20px",
              transform: "translateY(-50%)",
              backgroundColor: theme.palette.primary.dark,
              color: "white",
              "&:hover": {
                backgroundColor: theme.palette.primary.light,
              },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Typography
        variant="h6"
        sx={{
          position: "absolute",
          left: "0px",
          top: "0px",
          color: "white",
          padding: 1,
          background: "#0a6ac9",
          borderRadius: "12px",
          display: "flex",
          gap: 1,
          alignItems: "center",
        }}
      >
        <SavingsIcon />
        Welcome Pack
      </Typography>
    </Box>
  );
};

export default WelcomePack;
