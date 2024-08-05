import React from "react";
import { useState } from "react";
import Link from "@mui/material/Link";
import styles from "@/styles/Home.module.css";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import useTheme from "@mui/styles/useTheme";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownHovered, setDropdownHovered] = useState(false);

  const carItems = [
    { text: "Car Rental", url: "/car-rental" },
    { text: "Car Leasing", url: "/car-leasing" },
  ];

  const attractionsItems = [
    { text: "City Tours", url: "/city-tours" },
    { text: "Adventure Tours", url: "/adventure-tours" },
  ];
  const theme = useTheme();

  const Dropdown = ({ items }) => (
    <Stack
      onMouseEnter={() => setDropdownHovered(true)}
      onMouseLeave={() => setDropdownHovered(false)}
      sx={{ marginTop: "5px", position: "absolute", zIndex: "30" }}
    >
      <Paper>
        <MenuList>
          {items.map((item, index) => (
            <MenuItem key={index}>
              <Link
                href={item.url}
                underline="none"
                sx={{
                  color: "inherit",
                  "&:hover": {
                    color: theme.palette.primary.main,
                  },
                }}
              >
                {item.text}
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </Paper>
    </Stack>
  );

  const links = [
    { text: "Hotels", url: "/hotels" },
    { text: "Flights", url: "/flights" },
    { text: "Trains", url: "/trains" },
    {
      text: "Cars",
      url: "/cars",
      onMouseEnter: () => setActiveDropdown("cars"),
      onMouseLeave: () => {
        setTimeout(() => {
          if (!dropdownHovered) {
            setActiveDropdown(null);
          }
        }, 200);
      },
      dropdownItems: carItems,
    },
    {
      text: "Attractions & Tours",
      url: "/attractions-tours",
      onMouseEnter: () => setActiveDropdown("attractions"),
      onMouseLeave: () => {
        setTimeout(() => {
          if (!dropdownHovered) {
            setActiveDropdown(null);
          }
        }, 200);
      },
      dropdownItems: attractionsItems,
    },
    { text: "Flight + Hotel", url: "/flight-hotel" },
    { text: "Destinations", url: "/destinations" },
    { text: "Trip.com Rewards", url: "/rewards" },
    { text: "Deals", url: "/deals" },
  ];

  return (
    <div>
      <Stack
        direction="row"
        sx={{
          padding: "0px 24px",
          gap: "32px",
        
          
        }}
      >
        {links.map((link, index) => (
          <div key={index}>
            <Link
              underline="never"
              href={link.url}
              className={styles.link}
              sx={{ textDecoration: "none" }}
              onMouseEnter={link.onMouseEnter}
              onMouseLeave={link.onMouseLeave}
            >
              <Typography
                component="span"
                sx={{
                  color: "lightgray",

                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                {link.text}
              </Typography>
            </Link>
            {activeDropdown === "cars" &&
              link.dropdownItems &&
              link.text === "Cars" && <Dropdown items={link.dropdownItems} />}
            {activeDropdown === "attractions" &&
              link.dropdownItems &&
              link.text === "Attractions & Tours" && (
                <Dropdown items={link.dropdownItems} />
              )}
          </div>
        ))}
      </Stack>
    </div>
  );
};

export default Header;
