import React from 'react';
import { Box, makeStyles, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles({
  topbar: {
    backgroundColor: '#EEEEEE',
    minHeight: '64px',
    borderBottom: '1px solid #ddd'
  },
  header: {
    verticalAlign: 'middle',
    fontSize: '24px',
    paddingLeft: '15px',
    height: '38px',
    lineHeight: '38px',
    maxWidth: '315px'
  },
  buttons: {
    lineHeight: '18px',
    marginLeft: '7px',
    padding: '9px 14px'
  }
});

const Topbar = ({ history }) => {
  const handleRouteToAddExpense = () => {
    history.push('/create-expense')
  };

  const classes = useStyles();
  return (
    <Box
      display='flex'
      justifyContent='space-between'
      className={classes.topbar}
    >
      <h1 className={classes.header}>
        Dashboard
      </h1>
      <Box
        display='flex'
        justifyContent='flex-end'
        alignItems='center'
        className={classes.buttonsContainer}
      >
        <Box>
          <Button
            variant='contained'
            size='medium'
            color='secondary'
            onClick={handleRouteToAddExpense}
          >
            Add an expense
          </Button>
        </Box>
        <Box className={classes.buttons}>
          <Button
            size='medium'
            variant='contained'
            color='primary'
          >
            Settle up
          </Button>
        </Box>
      </Box>
    </Box>
  )
};

export default withRouter(Topbar);
