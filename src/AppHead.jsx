import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import { AppBar,Toolbar,Typography,CssBaseline,useScrollTrigger,Box,Slide } from '@material-ui/core';  
import { AppBar, Toolbar, Typography, CssBaseline, useScrollTrigger, Box, Slide, Container } from '@material-ui/core';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import CssBaseline from '@mui/material/CssBaseline';
// import useScrollTrigger from '@mui/material/useScrollTrigger';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Slide from '@mui/material/Slide';

interface Props{
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
//   children: React.ReactElement; 
children: React.ReactElement | React.ReactElement[];
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div">
              <div  ><p className='marktitle'>MARKDOWN PLATFORM...</p></div>
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
            .map(
              () => ``,
            )
            .join('\n')}
        </Box>
      </Container>
    </React.Fragment>
  );
}