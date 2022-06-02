import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@mui/material/Grid'
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { useNavigate } from 'react-router-dom';
// Importing the json data
import data from '../../Resources/LessonData.json'

import AppContainer from "./AppContainer"
import { lightBlue } from '@material-ui/core/colors';

const drawerWidth = 310;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    padding: '1% 0% 0% 0%',
    background: '#f8f8f8',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#4c4c4c'
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: '#232b36',
  },
  drawerHeader: {
    // display: 'flex',
    position: 'relative',
    alignItems: 'center',
    // padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    // justifyContent: 'flex-end',
    cursor: 'pointer',
    background: '#1a2129',
    padding: '7% 0% 2% 0%',
    color: '#b4b5b8'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: '#f8f8f8',
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  nestedList:{
    background: '#363738',
    color: '#94969a',
  },
  SideTab:{
    fontWeight: 700,
    borderBottom: '0.5px solid #4f5051',
    color: '#b4b5b8'
  },
  activeSideTab:{
    background: '#363738',
    fontWeight: '700',
    color: 'white',
    borderBottom: '0.5px solid #4f5051',
    transition: '0.3s all ease-in-out',
    '&:hover':{
      background: '#444444',
      fontWeight: '700',
      color: 'white',   
    }
  },
  activeSideInnerTab:{
    background: 'lightGray',
    fontWeight: '700',
    color: 'white',
    transition: '0.3s all ease-in-out',
    '&:hover':{
      background: 'gray',
      fontWeight: '700',
      color: 'white',   
    }
  }
}));

export default function SideNav() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [OpenTopicID, setOpenTopicID] = React.useState([-1,-1]);
  const [OpenTopic, setOpenTopic] = React.useState(false);

  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (TopicId, InnerTopicID) => {
    if (OpenTopicID[0] === -1 || TopicId !== OpenTopicID[0] || OpenTopicID[1] !== InnerTopicID){
      if (TopicId !== OpenTopicID[0])
        setOpenTopicID([TopicId,-1]);
      else
        setOpenTopicID([TopicId,InnerTopicID]);
    }else 
        setOpenTopicID([TopicId,InnerTopicID]);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap onClick={() => {navigate("")}} style={{cursor: 'pointer', color: '#4c4c4c'}}>
            {open ? "" : "Mastering React JS"}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <div style={{position: 'relative', border: '2px solid transparent'}}>
            <h3 onClick={() => {navigate("")}} style={{position: 'relative', width: '80%', left: '5%'}} >
              Mastering React JS
            </h3>
            <IconButton onClick={handleDrawerClose} style={{color: '#94969a', position: 'absolute',top:'0%', right: '2%'}}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
        </div>
        <Divider/>
        <List style={{padding: '0px'}}>
          {data.map((item, index) => {
              if (item.Topics.length === 0){
                  return (
                    <ListItem button key={index} onClick={(event) => {navigate(item.url); handleClick(index, -1)}} 
                        className={(OpenTopicID[0] === index) ? classes.activeSideTab : classes.SideTab}
                    >
                        {/* <ListItemIcon></ListItemIcon> */}
                        <ListItemText primary={item.title} />
                    </ListItem>
                  )
              }else{
                  return(
                    <React.Fragment key={index}>
                        <Divider />
                        <ListItem key={index} button onClick={() => { handleClick(index, OpenTopicID[1]); 
                          setOpenTopic((OpenTopicID[0] === index ) ? !OpenTopic : true)}} className={(OpenTopicID[0] === index) ? classes.activeSideTab : classes.SideTab}
                        >
                            {/* <ListItemIcon></ListItemIcon> */}
                            <ListItemText primary={item.title} />
                            {OpenTopicID[0] && OpenTopic === index ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={OpenTopicID[0] === index && OpenTopic} timeout="auto" unmountOnExit className={classes.nestedList}>
                            {item.Topics.map((topic, index1) => {
                                return (
                                    <List 
                                      key={index1} component="div" disablePadding 
                                      onClick={() => {navigate(topic[1]); handleClick(index, index1)}}
                                      className={(OpenTopicID[1] === index1) ? classes.activeSideInnerTab :  classes.SideTab}
                                    >
                                      <ListItem button className={classes.nested}>
                                          {/* <ListItemIcon></ListItemIcon> */}
                                          <ListItemText primary={topic[0]} />
                                    </ListItem>
                                    </List>
                                    )
                                })}
                        </Collapse>
                    </React.Fragment>
                    
                  )
              }
          })}
        </List>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div style={{padding: '1%'}} />
        <Grid container direction="row" justifyContent="center" alignItems="center" >
            <Grid item xs={12} >
                <AppContainer />
            </Grid>
        </Grid>
      </main>
    </div>
  );
}
