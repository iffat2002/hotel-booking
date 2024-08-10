import React from 'react';
import { Tooltip, styled } from '@mui/material';

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} placement="top" arrow />
))({
  [`& .MuiTooltip-tooltip`]: {
    backgroundColor: 'white',
    color: "grey",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
    fontSize: "0.8rem",
    whiteSpace: "nowrap",
    maxWidth: "max-content",
    padding: "16px",
    marginTop: "4px", 
  },
  [`& .MuiTooltip-arrow`]: {
    color: 'white',
    border:"none",
    width: '24px',
    height: '12px',
  

    '&:before': {
      border: 'none',
    },
  },
});

const WhiteTooltip = (props) => {
  return <CustomTooltip {...props} />;
};

export default WhiteTooltip;
