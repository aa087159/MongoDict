import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const CreateTabs = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const { data:{entry, pronunciation, definition} } = props

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const paperStyles = makeStyles(theme => ({
        root: {
          padding: theme.spacing(3, 2),
          marginBottom: '50px',
          backgroundColor: '#FFF6D0'
    },}));
    const paper = paperStyles();
    
    const splitPronun = (data) =>{
        let arr = data.split(',')
        return `Zhuyin: ${arr[0]} Pinyin: ${arr[1]}`
    }    

    const split = (data) =>{
        let arr = data.split(',')
        console.log(arr)
        let total = arr.map((item, index)=>{
            return(
                <Paper className={paper.root} key={index}>
                    <Typography variant="h5" component="h3">
                        {arr[0]}
                    </Typography>
                    <Typography component="p">
                        {arr[1]}
                        {arr[2]}
                        {arr[3]}
                    </Typography>
                </Paper>
            )
        })
        return total
    }  

  return (
    <div className={classes.root}>
        <div>
            <h2 className="">{entry}</h2>
            <h6 className="">{splitPronun(pronunciation)}</h6>
        </div>

        <AppBar position="static">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Chinesisch-Deutsch" {...a11yProps(0)} />
                <Tab label="Rechtschreibung" {...a11yProps(1)} />
                <Tab label="Synonyme" {...a11yProps(2)} />
                <Tab label="Chinesich-Englisch" {...a11yProps(3)} />
                
                
            </Tabs>
        </AppBar>

        <TabPanel value={value} index={0}>
            VERB
            {definition}
        </TabPanel>

        <TabPanel value={value} index={1}>
            Rechtschreibung
        </TabPanel>

        <TabPanel value={value} index={2}>
            Item Three
        </TabPanel>

        <TabPanel value={value} index={3}>
            Item Three
        </TabPanel>
    </div>
  );
}

export default CreateTabs