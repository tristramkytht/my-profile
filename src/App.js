import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import './App.css';
import NasaPic from './apis/Caller.js'

import gradpic from './images/gradpic.jpg'
import ishtar from './images/ishtar.jpg'
import educ from './images/educ.gif'
import project from './images/project.jpg'

import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className='overall'>
      <NasaPic/>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} zeroMinWidth>
            <img src={gradpic} alt="Kyth" className='gradpic'/>
          </Grid>
          <Grid item xs={12} sm={8} zeroMinWidth>
            <h1>Hi! I'm Kyth</h1>
            <h2>Here are a few things to know about me.</h2>
            <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>Education</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>University of the Philippines Diliman (UPD), BS Computer Science</li>
                  <ul>
                    <li>DOST-SEI Merit Scholar</li>
                    <li>University Scholar (2nd Sem AY 2018-2019; 1st Sem AY 2019-2020)</li>
                  </ul>
                  <li>Rizal National Science High School</li>
                </ul>

              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>Affiliations</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>UP Center for Student Innovations (UP CSI)</li>
                  <ul>
                    <li>Director for External Relations (2019-2020)</li>
                    <li>Associate Director for External Relations (2019)</li>
                    <li>External Relations Member (2016-2018)</li>
                  </ul>
                  <li>UP Tabletop</li>
                  <ul>
                    <li>Internals Committee Member (2018-2019</li>
                  </ul>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>Experiences</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>Nokia R&D Philippines Internship</li>
                  <li>DevCamp Marketing Manager</li>
                  <li>EX Series Marketing Manager</li>
                  <li>Filipino Patriot Scholar Project Attendee</li>
                </ul>
              </AccordionDetails>
            </Accordion>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className='parallax-header' style={{backgroundImage: 'url('+project+')', height: '80vh'}}/>
      <div className='projectsPart'>
        <h1 style={{textAlign: 'center'}}>Past Projects</h1>
        <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Thesis" {...a11yProps(0)} />
          <Tab label="ParkU" {...a11yProps(1)} />
          <Tab label="FooBu" {...a11yProps(2)} />
          <Tab label="Soil Classifier" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Typography variant='h4' align='center' gutterBottom>
            An Analysis on the Performance of Feature Subset Selection using Genetic Algorithm on Conformational B-Cell Epitope Prediction Models
          </Typography>
          <br/>
          <Typography variant='h5' gutterBottom>
            Feature Reduction for Machine Learning Optimization
          </Typography>
          <br/>
          <Typography variant='h6' gutterBottom>
            By reducing the number of features used to train a model, not only does it lower the time and memory consumed by the process, but it may also increase the accuracy of the created model by eliminating features that serve as noise in the current problem space. A genetic algorithm was used to create the subset of features that only consists of the features that have a positive effect on a model's performance.
          </Typography>
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
          <Typography variant='h4' align='center' gutterBottom>
            ParkU: Smart Parking System
          </Typography>
          <br/>
          <Typography variant='h5' gutterBottom>
            IoT Project using AWS EC2
          </Typography>
          <br/>
          <Typography variant='h6' gutterBottom>
            This project uses the camera module of the Raspberry Pi to send a picture of a parking lot to an EC2 server which then uses machine learning to count the cars. It then sends the number of free parking slots to a mobile app. In the mobile app, a user can know how many slots a parking area has and how many of them are currently vacant.
          </Typography>
          
        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction}>
          <Typography variant='h4' align='center' gutterBottom>
            FooBu: Your Personal Food Buddy
          </Typography>
          <br/>
          <Typography variant='h5' gutterBottom>
            Django Project for Database CRUD Operations
          </Typography>
          <br/>
          <Typography variant='h6' gutterBottom>
            A simple website for restaurant owners to display their menu and for foodies to review them. This project implements the CRUD functions on a database of food items, restaurants, restaurant owners, users, and food reviews.
          </Typography>
        </TabPanel>

        <TabPanel value={value} index={3} dir={theme.direction}>
        <Typography variant='h4' align='center' gutterBottom>
            Soil Classifier
          </Typography>
          <br/>
          <Typography variant='h5' gutterBottom>
            Using a Neural Network to Predict Unknown Soil Layers 
          </Typography>
          <br/>
          <Typography variant='h6' gutterBottom>
            In Civil Engineering, knowing the soil composition of the area is a crucial step to be done before any structure can be built. This tool uses an artificial neural network to predict the soil composition of a layer underground given its depth and the composition and characteristics of the layers above and below it.
          </Typography>
            
        </TabPanel>
      </SwipeableViews>
      </div>
      <div className='parallax-header' style={{backgroundImage: 'url('+educ+')', height: '100vh'}}/>
    </div>
  );
}

export default App;
