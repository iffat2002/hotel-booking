
import React from 'react';
import { Tooltip, styled } from '@mui/material';

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .MuiTooltip-tooltip`]: {
    backgroundColor: 'white',
    color: "grey",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
    fontSize: "0.8rem",
    whiteSpace: "nowrap",
    maxWidth: "max-content",
    padding: "16px",
  },
  [`& .MuiTooltip-arrow`]: {
    color: 'white',
  },
});

const WhiteTooltip = (props) => {
  return <CustomTooltip {...props} />;
};

export default WhiteTooltip;
