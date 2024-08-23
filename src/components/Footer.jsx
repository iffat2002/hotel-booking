import React,{useState} from 'react'
import { Link, Box, Stack, Typography, Divider,Tabs, Grid, Paper, 
  Tab,
  Button, List, ListItem, ListItemText
   } from "@mui/material";
   import PropTypes from "prop-types";
   import { useTheme } from "@mui/material/styles";

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
  

const Footer = () => {
  const hotels = [
    "Best Hotels in Shanghai",
    "Best Hotels in Hong Kong",
    "Best Hotels in Las Vegas",
    "Best Hotels in Bangkok",
    "Best Hotels in Beijing",
    "Best Hotels in Guangzhou",
    "Best Hotels in NYC",
    "Best Hotels in Singapore",
    "Best Hotels in Kuala Lumpur",
    "Best Hotels in Dubai",
    "Best Hotels in Chicago",
    "Best Hotels in San Diego",
    "Best Hotels in Miami",
    "Best Hotels in New Orleans",
    "Best Hotels in Nashville",
    "Best Hotels in Boston",
    "Best Hotels in Orlando",
    "Best Hotels in Savannah",
    "Best Hotels in Charleston",
    "Best Hotels in Los Angeles",
    "Hotels in Bangkok",
    "Hotels in Da Nang"
  ];
  
  const flights = [
    "Flights from Cairo to Jeddah",
    "Flights from Dubai to Riyadh",
    "Flights from London to New York",
    "Flights from London to Dubai",
    "Flights from Kuala Lumpur to Singapore",
    "Flights from Dubai to Jeddah",
    "Flights from Orlando to San Juan",
    "Flights from Dubai to Mumbai",
    "Flights from Cairo to Riyadh",
    "Flights from Dubai to Delhi",
    "Flights from Bangkok to Phuket",
    "Flights from Shanghai to Beijing",
    "Flights from New York to Los Angeles",
    "Flights from San Francisco to New York",
    "Flights from New York to Miami",
    "Flights from Boston to Miami",
    "Flights from Dallas to Las Vegas",
    "Flights from Boston to Orlando",
    "Flights from Chicago to Phoenix",
    "Flights from Chicago to Miami"
  ];
  
  const attractions = [
    "Attractions in Illinois",
    "Attractions in Chicago",
    "Attractions in Nashville",
    "Attractions in Las Vegas",
    "Attractions in San Francisco",
    "Attractions in New York",
    "Attractions in Orlando",
    "Attractions in Atlanta",
    "Things to do in Orlando"
  ];
  
  
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width:"90%", margin:"40px auto"}}>
<Typography variant="h4" component="div" sx={{fontWeight:"700"}}>
Trip.com Recommendations
</Typography>

<Box sx={{ width: "100%", mt: 4 }}>
        <Box sx={{ borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{ "& .MuiTabs-indicator": { display: "none" } }}
            aria-label="basic tabs example"
          >
            <Tab
              sx={{
                backgroundColor: "#F0F2FA",
                marginRight: 2,
                borderRadius: 1,
                color: "black",
                minHeight: "35px",
                padding: "10px",
                textTransform: "none",
                
                "&:hover": {
                  color: theme.palette.primary.dark,
                },
                ...(value === 0 && {
                  backgroundColor: "#0F294D",
                  color: "white !important",
                 
                }),
              }}
              label="Featured Hotel Destinations"
              {...a11yProps(0)}
            />
            <Tab
              sx={{
                backgroundColor: "#F0F2FA",
                marginRight: 2,
                borderRadius: 1,
                color: "black",
                minHeight: "35px",
                padding: "10px",
                textTransform: "none",
        
                "&:hover": {
                  color: theme.palette.primary.dark,
                },
                ...(value === 1 && {
                  backgroundColor: "#0F294D",
                  color: "white !important",
                }),
              }}
              label="Popular Flights"
              {...a11yProps(1)}
            />
            <Tab
              sx={{
                backgroundColor: "#F0F2FA",
                marginRight: 2,
                borderRadius: 1,
                color: "black",
                minHeight: "35px",
                padding: "10px",
                textTransform: "none",
          
                "&:hover": {
                  color: theme.palette.primary.dark,
                },
                ...(value === 2 && {
                  backgroundColor: "#0F294D",
                  color: "white !important",
                
                }),
              }}
              label="Featured Guides"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        </Box>
        <CustomTabPanel value={value} index={0}>
        <Paper  elevation={3} sx={{padding:'5px 15px'}}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Stack direction="row"  sx={{ flexWrap: 'wrap', }}>
  {hotels.map((hotel, index) => (
    <Stack key={index} sx={{ width: '18%', justifyContent:"flex-start", }}>
      <ListItem disableGutters sx={{paddingTop:"0px"}}>
       <Link href="#" underline="none" color="#1F1F1F" sx={{"&:hover":{color:"blue", cursor:"pointer"}, }}> <ListItemText primary={hotel}  /></Link>
      </ListItem>
    </Stack>
  ))}
</Stack>
</List>
</Paper>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
        <Paper  elevation={3} sx={{padding:'5px 15px'}}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Stack direction="row"  sx={{ flexWrap: 'wrap', }}>
  {flights.map((flight, index) => (
    <Stack key={index} sx={{ width: '20%', justifyContent:"flex-start", }}>
      <ListItem disableGutters sx={{paddingTop:"0px"}}>
       <Link href="#" underline="none" color="#1F1F1F" sx={{"&:hover":{color:"blue", cursor:"pointer"}, }}> <ListItemText primary={flight}  /></Link>
      </ListItem>
    </Stack>
  ))}
</Stack>
</List>
</Paper>
        </CustomTabPanel>
       
        <CustomTabPanel value={value} index={2}>
        <Paper  elevation={3} sx={{padding:'5px 15px'}}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Stack direction="row"  sx={{ flexWrap: 'wrap', }}>
  {attractions.map((attraction, index) => (
    <Stack key={index} sx={{ width: '20%', justifyContent:"flex-start", }}>
      <ListItem disableGutters sx={{paddingTop:"0px"}}>
       <Link href="#" underline="none" color="#1F1F1F" sx={{"&:hover":{color:"blue", cursor:"pointer"}, }}> <ListItemText primary={attraction}  /></Link>
      </ListItem>
    </Stack>
  ))}
</Stack>
</List>
</Paper>
        </CustomTabPanel>
       <Divider  style={{margin:"40px 0px",  borderWidth: '0.5px solid'}}></Divider>
       <Typography>check</Typography>
    </Box>
  )
}

export default Footer