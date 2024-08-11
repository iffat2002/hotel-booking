
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

const HotelCard = ({ card }) => (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ borderRadius: "8px", height: "100%", paddingTop: "0px" }}>
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
            sx={{ transition: "transform 0.3s ease-in-out", width: "100%", height: "183" }}
            height="183"
            image={card.imageUrl}
            alt={card.title}
          />
        </Box>
        <CardContent>
          <Typography variant="h7" sx={{ fontWeight: "700" }}>
            {card.title}
          </Typography>
          <Rating value={card.rating} precision={0.5} max={5} readOnly />
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
            >
              {card.rating} <span style={{ fontSize: "small", fontWeight: "400" }}> /5</span>{" "}
            </Typography>
            <Link href="/" sx={{ color: "darkblue" }}>
              {card.reviews} reviews
            </Link>
          </Stack>
          <Typography variant="h6" sx={{ fontWeight: "700", textAlign: "right" }}>
            {card.price}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
  
  export default HotelCard;
  