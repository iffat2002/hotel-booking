import React, { useState, useRef } from "react";
import dayjs from "dayjs";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import RemoveIcon from "@mui/icons-material/Remove";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import InputAdornment from "@mui/material/InputAdornment";
import AddIcon from "@mui/icons-material/Add";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);
import useTheme from "@mui/styles/useTheme";
import {
  Card,
  CardContent,
  CardActions,
  Stack,
  Autocomplete,
  TextField,
  Box,
  Typography,
  Paper,
  Grid,
  Popper,
  Button,
  IconButton,
  ClickAwayListener,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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

const Hotels = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [booking, setBooking] = useState(false);
  const [anchorbooking, setAnchorbooking] = useState(null);
  const [calender, setCalender] = useState(false);
  const [anchorCalender, setAnchorCalender] = useState(null);
  const [value, setValue] = useState(
    "City, airport, region, landmark or property name"
  );

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };
  const handleCalender = (event) => {
    setAnchorCalender(event.currentTarget);
    setCalender((previousOpen) => !previousOpen);
  };
  const handleBooking = (event) => {
    setAnchorbooking(event.currentTarget);
    setBooking((previousOpen) => !previousOpen);
  };

  const [dateValue, setDateValue] = useState([
    dayjs().startOf("day"),
    dayjs().add(1, "day").startOf("day"),
  ]);

  const handleDateChange = (newValue) => {
    setDateValue(newValue);
    console.log(newValue); // Log the new date values
  };
  const formatDate = (date) =>
    date ? date.format("ddd, MMM, DD") : "Select date";
  const calculateNights = (startDate, endDate) => {
    if (startDate && endDate) {
      return endDate.diff(startDate, "day");
    }
    return 0;
  };
  const theme = useTheme();
  //room booking
  const [room, setRoom] = useState(1);
  const handleRooms = (e) => {
    if (e === "addRoom") {
      setRoom(room + 1);
    } else if (e === "subRoom" && room > 1) {
      setRoom(room - 1);
    } else if (e === "addAdult") {
      setAdult(adult + 1);
    } else if (e === "subAdult" && adult > 1) {
      setAdult(adult - 1);
    } else if (e === "addChild") {
      setChild(child + 1);
    } else if (e === "subChild" && child > 0) {
      setChild(child - 1);
    }
  };

  const [adult, setAdult] = useState(2);
  const [child, setChild] = useState(0);
  const roombooking = [
    {
      title: "Rooms",
      value: room,
      text: "",
      add: "addRoom",
      sub: "subRoom",
    },
    {
      title: "Adults",
      value: adult,
      text: "18+ yrs",
      add: "addAdult",
      sub: "subAdult",
      state: { adult },
    },
    {
      title: "Children",
      value: child,
      text: "0-17 yrs",
      add: "addChild",
      sub: "subChild",
      state: { child },
    },
  ];
  const labelvalue = () => {
    return `${room} ${room > 1 ? "rooms," : "room,"} ${adult} ${
      adult > 1 ? "adults," : "adult,"
    } ${child} ${child > 1 ? "children" : "child"}`;
    console.log("value of room", room);
  };
  const handleClickAway = (event) => {
    if (
      !anchorEl?.contains(event.target) &&
      !anchorCalender?.contains(event.target) &&
      !anchorbooking?.contains(event.target)
    ) {
      setOpen(false);
      setCalender(false);
      setBooking(false);
    }
  };
  return (
    <Box position="relative" mt={2}>
      <Stack direction="row" spacing={1}>
        <TextField
          label="Destinations"
          InputLabelProps={{
            shrink: true,
          }}
          onClick={handleClick}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          variant="standard"
          size="small"
          sx={{
            background: "white",
            width: "400px",
            fontStyle: "bold",
            padding: "6px",
            borderRadius: "4px",
            border: "1px solid lightgray",
            "& .MuiInput-underline:before": {
              borderBottom: "none",
            },
            "& .MuiInput-underline:hover:before": {
              borderBottom: "none !important",
            },
            "& .MuiFormLabel-root": {
              padding: "8px",
            },
            "& .MuiInputBase-input": {
              fontWeight: "600",
              color: "gray",
            },
          }}
        />
        <ClickAwayListener onClickAway={handleClickAway}>
          <Popper
            open={open}
            anchorEl={anchorEl}
            placement="bottom-start"
            style={{ width: "600px" }}
          >
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
                  <Grid
                    item
                    xs={6}
                    sm={4}
                    md={3}
                    key={index}
                    style={{ padding: 0 }}
                    spacing={0}
                  >
                    <Box style={{ padding: 0 }}>
                      <Button
                        variant="text"
                        onClick={() => {
                          setValue(destination); // Call onSelect with destination
                          setOpen(false);
                        }}
                        sx={{
                          margin: "0px",
                          color: "gray",
                          fontSize: "12px",
                          padding: 1,
                          width: "100%",
                          justifyContent: "flex-start",
                          textTransform: "none",
                          "&:hover": {
                            backgroundColor: "#e1e9f7",
                          },
                        }}
                      >
                        <Typography>{destination}</Typography>
                      </Button>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Popper>
        </ClickAwayListener>

        <Box
          mt={2}
          sx={{
            width: "max-content",
            border: "1px solid lightgray",
            borderRadius: "4px",
          }}
          onClick={handleCalender}
        >
          <TextField
            variant="standard"
            placement="bottom-start"
            size="small"
            label="Check-in"
            value={formatDate(dateValue[0])}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              width: "120px",
              padding: "6px 8px 0px 8px",
              cursor: "pointer",
              "& .MuiInput-underline:before": {
                borderBottom: "none",
              },
              "& .MuiInputBase-input": {
                fontWeight: "600",
              },
              "& .MuiInput-underline:hover:before": {
                borderBottom: "none !important",
              },
              "& .MuiFormLabel-root": {
                padding: "8px",
              },
            }}
          />
          <Typography
            variant="body1"
            sx={{
              width: "100px",
              display: "inline-block",
              padding: "8px",
              textAlign: "justify",
              paddingTop: "15px",
            }}
          >
            {dateValue[0] && dateValue[1]
              ? `${calculateNights(dateValue[0], dateValue[1])} nights`
              : "0 nights"}
          </Typography>
          <TextField
            variant="standard"
            size="small"
            label="Check-out"
            value={formatDate(dateValue[1])}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              width: "120px",
              padding: "6px 8px 0px 8px",
              cursor: "pointer",
              "& .MuiInput-underline:before": {
                borderBottom: "none",
              },
              "& .MuiInputBase-input": {
                fontWeight: "600",
              },
              "& .MuiInput-underline:hover:before": {
                borderBottom: "none !important",
              },
              "& .MuiFormLabel-root": {
                padding: "8px",
              },
            }}
          />
        </Box>
        <TextField
          variant="standard"
          size="small"
          label="Rooms and Guests"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="arrow">
                  <KeyboardArrowDownIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          value={labelvalue()}
          onClick={handleBooking}
          InputLabelProps={{
            shrink: true,
          }}
          SelectProps={{
            native: true,
          }}
          sx={{
            width: "270px",
            position: "relative",
            border: "1px solid lightgray",
            padding: "6px 8px 0px 8px",
            cursor: "pointer",
            "& .MuiInput-underline:before": {
              borderBottom: "none",
            },
            "& .MuiInputBase-input": {
              fontWeight: "600",
            },
            "& .MuiInput-underline:hover:before": {
              borderBottom: "none !important",
            },
            "& .MuiFormLabel-root": {
              padding: "8px",
            },
          }}
        ></TextField>
        <Button
          variant="contained"
          sx={{ fontWeight: "700", textTransform: "none", fontSize:"large" }}
        >
          <SearchIcon /> Search
        </Button>
      </Stack>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Popper
          open={calender}
          anchorEl={anchorCalender}
          placement="bottom-start"
          // style={{ width: "600px" }}
        >
          <Paper>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateRangeCalendar
                value={dateValue}
                onChange={handleDateChange}
              />
            </LocalizationProvider>
          </Paper>
        </Popper>
      </ClickAwayListener>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Popper
          open={booking}
          anchorEl={anchorbooking}
          placement="bottom-start"
          sx={{ width: "270px" }}
        >
          {" "}
          <Card>
            <CardContent>
              {roombooking.map((option) => (
                <Stack
                  direction="row"
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "2px",
                  }}
                  key={option.title}
                  value={option.value}
                >
                  <Typography
                    variant="text"
                    sx={{
                      fontSize: "smaller",
                      textTransform: "none",
                      color: "black",
                    }}
                  >
                    {option.title}
                    <span style={{ color: "gray", marginLeft: "6px" }}>
                      {option.text}
                    </span>
                  </Typography>
                  <Box sx={{ display: "flex", gap: "6px" }}>
                    <RemoveIcon
                      color="primary"
                      onClick={() => handleRooms(option.sub)}
                      disable
                      sx={{
                        // Adjust size as needed
                        borderRadius: "50%",
                        border: "2px solid",
                        fontSize: "22px",
                        cursor: "pointer",
                        backgroundColor: "transparent", // Default background color or gray if disabled
                        color:
                          option.value === 1
                            ? theme.palette.grey[400]
                            : theme.palette.primary.main,

                        "&:hover": {
                          color:
                            option.value === 1
                              ? theme.palette.grey[400]
                              : "white",
                          backgroundColor:
                            option.value === 1
                              ? "transparent"
                              : theme.palette.primary.main,
                          border: option.value === 1 ? "2px solid" : "none",
                        },
                        // Adjust padding to ensure the icon fits well inside the circle
                      }}
                    />
                    {option.value}
                    <AddIcon
                      color="primary"
                      onClick={() => handleRooms(option.add)}
                      sx={{
                        // Adjust size as needed
                        borderRadius: "50%",
                        fontSize: "22px",
                        cursor: "pointer",
                        border: "2px solid",
                        backgroundColor: "transparent", // Default background color
                        "&:hover": {
                          backgroundColor: theme.palette.primary.main,
                          fill: "white",
                          border: "none",
                        },
                        // Adjust padding to ensure the icon fits well inside the circle
                      }}
                    />
                  </Box>
                </Stack>
              ))}
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end" }}>
              <Button
                size="small"
                variant="contained"
                onClick={() => setBooking(false)}
              >
                Done
              </Button>
            </CardActions>
          </Card>
        </Popper>
      </ClickAwayListener>
    </Box>
  );
};

export default Hotels;
