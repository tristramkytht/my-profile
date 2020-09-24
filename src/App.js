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

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

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
          <Grid item xs={12} sm={4}>
            <img src={gradpic} alt="Kyth" className='gradpic'/>
          </Grid>
          <Grid item xs={12} sm={8}>
            <h1>Hi! I'm Kyth</h1>
            <h2>Here are a few things to know about me.</h2>
            <ul>
              <li>I graduated with a Bachelor's Degree in Computer Science from the University of the Philippines Diliman</li>
            </ul>
          </Grid>
        </Grid>
      </div>
      <div className='parallax-header' style={{backgroundImage: 'url('+project+')', height: '80vh'}}/>
      <div>
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
          <Tab label="OSSS Website" {...a11yProps(3)} />
          <Tab label="Soil Classifier" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div>
            <h1>An Analysis on the Performance of Feature Subset Selection using Genetic Algorithm on Conformational B-Cell Epitope Prediction Models</h1>
            <h2>Abstract</h2>
            The search for B-cell epitopes has become an important part of vaccine design and effective diagnostics. Because of this, several studies have been conducted to create computational B-cell epitope predictors using machine learning to help, and possibly replace, experimental methods to lower its cost and time consumption. However, there was no empirical method used to select the features to be used in training the models which may affect their efficiency and accuracy. In this paper, a wrapper feature selection approach using genetic search was used to reduce the initial feature set of 22 features to be used in creating a B-cell epitope predictor using nu-SVC. By reducing the number of features, the time it took to train and test a predictor was reduced by at least 48.06% and the maximum memory usage was reduced by at least 35.436%, making it more efficient and less costly. It was also observed that However, this also caused the accuracy of the predictors to decrease by at least 0.8292% as seen in their performance on a balanced benchmark dataset. In contrast, the reduction of the number of features caused the models created to have higher accuracy than a model trained with the whole feature set when tested on a realistic benchmark dataset.
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          Item Five
        </TabPanel>
      </SwipeableViews>
      </div>
      <div className='parallax-header' style={{backgroundImage: 'url('+educ+')', height: '100vh'}}/>
    </div>
  );
}

export default App;
