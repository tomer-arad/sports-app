import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
      },
  }));


function SelectCategory({ onChange, category }) {

    const classes = useStyles();
    const handleChange = (event, value) => onChange(value)

    return (
        <div>
            <Paper className={classes.root}>
                <Tabs
                    value={category}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="All Games" value="all" />
                    <Tab label="Football" value="football" />
                    <Tab label="Basketball" value="basketball" />
                </Tabs>
            </Paper>
        </div>
    )
}

export default SelectCategory;
