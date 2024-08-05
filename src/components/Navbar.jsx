import React from 'react'
import Image from "next/image";
import logo from "../../public/logo.png";
import { Inter } from "next/font/google";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "@/styles/Home.module.css";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import { TextField, Stack, InputAdornment } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { makeStyles, useTheme } from "@mui/styles";


export const Navbar = () => {
   
    const searchedPlaces = [
      { city: "Popular Destination", country: "" },
      { city: "Bangkok", country: "Thailand" },
      { city: "Shanghai", country: "China" },
      { city: "Beijing", country: "China" },
      { city: "Hong Kong", country: "China" },
      { city: "Tokyo", country: "Japan" },
    ];
    const navItems = ["App", "Customer Support", <LanguageIcon />];
  return (
    <div>
          <AppBar component="nav" position="static" sx={{ background:"inherit",boxShadow:"none"}} >
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Stack direction="row" sx={{ alignItems: "center" }}>
                <IconButton
                  aria-label="open drawer"
                  edge="start"
                  sx={{ mr: 2 }}
                >
                  <Image
                    src="/logo.png"
                    alt="trip.com logo"
                    width={140}
                    height={30}
                  ></Image>
                </IconButton>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={searchedPlaces}
                  getOptionLabel={(option) =>
                    `${option.city} ${option.country}`
                  }
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      {...props}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "medium",
                        backgroundColor:
                          option.city === "Popular Destination"
                            ? "#f0f0f0"
                            : "inherit",
                        pointerEvents:
                          option.city === "Popular Destination"
                            ? "none"
                            : "auto",
                      }}
                    >
                      {option.city !== "Popular Destination" && (
                        <LocationOnIcon
                          sx={{ marginRight: 1, fontSize: "medium" }}
                        />
                      )}
                      <Box
                        component="span"
                        sx={{ marginRight: 2, color: "gray" }}
                      >
                        {option.city}{" "}
                      </Box>
                      <Box component="span" sx={{ color: "#93959b" }}>
                        {option.country}
                      </Box>
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Destination, attraction, hotel, etc"
                      variant="standard"
                      size="small"
                      sx={{
                        background: "white",
                        width: "300px",
                        padding: "4px",
                        borderRadius: "4px",

                        "& .MuiInput-underline:before": {
                          borderBottom: "none",
                        },
                        "& .MuiInput-underline:after": {
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
                        "& .MuiInputBase-input": {
                          padding: 0,
                        },
                        "& .MuiAutocomplete-inputRoot": {
                          paddingRight: "0px !important",
                        },
                      }}
                      InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                          <InputAdornment position="end">
                            <Button
                              variant="contained"
                              sx={{ minWidth: "30px", padding: "1px" }}
                            >
                              <SearchIcon />
                            </Button>
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </Stack>
              {/* <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                MUI
              </Typography> */}
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Button
                    variant="text"
                    component="a"
                    key={item}
                    sx={{
                      color: "#fff",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                      },
                    }}
                  >
                    {item}
                  </Button>
                ))}
                <Button
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    color: "white",
                    marginRight: 1,
                    textTransform: "none",
                    "&:hover": {
                      background: "white",
                      color: "blue",
                    },
                  }}
                >
                  Search Bookings
                </Button>
                <Button
                  variant="filled"
                  sx={{
                    backgroundColor: "white",
                    color: "black",
                    textTransform: "none",
                    "&:hover": {
                      background: "white",
                      color: "blue",
                    },
                  }}
                >
                  Sign In / Register
                </Button>
              </Box>
            </Toolbar>
          </AppBar></div>
  )
}
