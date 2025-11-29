import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';

const Footer = () => {
  return (
    <div style={{ width: '100%', maxWidth: '100%', marginTop: '2rem' }}>
      <Grid
      
         container 
         justifyContent="space-around"
        spacing={4}
        sx={{
          bgcolor: 'black',
          color: 'white',
          py: 6,
          px: { xs: 2, sm: 6, md: 10 },
          width: '100%',
        }}
      >
        {/* Company */}
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            height: '100%',
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>Company</Typography>
          <Button color="inherit">About</Button>
          <Button color="inherit">Blog</Button>
          <Button color="inherit">Press</Button>
          <Button color="inherit">Jobs</Button>
          <Button color="inherit">Partners</Button>
        </Grid>

        {/* Solutions */}
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            height: '100%',
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>Solutions</Typography>
          <Button color="inherit">Marketing</Button>
          <Button color="inherit">Analytics</Button>
          <Button color="inherit">Commerce</Button>
          <Button color="inherit">Insights</Button>
          <Button color="inherit">Support</Button>
        </Grid>

        {/* Documentation */}
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            height: '100%',
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>Documentation</Typography>
          <Button color="inherit">Guides</Button>
          <Button color="inherit">API Status</Button>
        </Grid>

        {/* Legal */}
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            height: '100%',
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>Legal</Typography>
          <Button color="inherit">Claim</Button>
          <Button color="inherit">Privacy</Button>
          <Button color="inherit">Terms</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
