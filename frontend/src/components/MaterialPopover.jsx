import React, { useState, useEffect } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const MaterialPopover = ({ btnRef, children, eventType = 'click', toggleMenu }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  useEffect(() => {
    const handleOpen = (event) => {
      setAnchorEl(event.currentTarget);
      if (toggleMenu) toggleMenu();
      
    };

    const handleClose = () => {
      setAnchorEl(null);
      if (toggleMenu) toggleMenu();
      // console.log("closed")
    };

    const currentBtnRef = btnRef.current;

    if (currentBtnRef) {
      if (eventType === 'mouseover') {
        currentBtnRef.addEventListener('mouseover', handleOpen);
        currentBtnRef.addEventListener('mouseout', debounce(handleClose,1000));
      } else {
        currentBtnRef.addEventListener(eventType, handleOpen);
        // If you want to handle closing on click outside or similar, you need extra logic here
      }

      return () => {
        if (currentBtnRef) {
          if (eventType === 'mouseover') {
            currentBtnRef.removeEventListener('mouseover', handleOpen);
            currentBtnRef.removeEventListener('mouseout', debounce(handleClose,1000));
          } else {
            currentBtnRef.removeEventListener(eventType, handleOpen);
          }
        }
      };
    }
  }, [btnRef, eventType, toggleMenu]);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={() => {
        setAnchorEl(null);
        if (toggleMenu) toggleMenu();
      }}
      onMouseOut={() => {
        if (eventType == "mouseover")
          setAnchorEl(null);
      }}
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'right',
      }}
    >
      <Typography>{children}</Typography>
    </Popover>
  );
};

export default MaterialPopover;
