import React from 'react';
import {
  makeStyles,
  Button,
  Box,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Paper
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';

import {
  handleShowSettleUp,
  handleShowSettleTransaction
} from './redux-store/actions';
import { HANDLE_TRANSACTION } from './gql/mutations';
import { USER_ID } from './utils/constants';
import { GET_RECENT_ACTIVITY } from './gql/queries';

const useStyles = makeStyles({
  title: {
    borderBottom: '1px solid black',
    backgroundColor: '#5BC5A7',
  },
  titleText: {
    fontWeight: 'bold',
    color: 'white'
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    margin: '5px'
  },
  image: {
    width: '50%'
  },
  button: {
    backgroundColor: '#3d95ce',
    borderRadius: '5px'
  },

});

const SettleUp = ({ id }) => {
  const dispatch = useDispatch();
  const isSettleUp = useSelector(({ reducers }) => reducers.showSettleUp);
  const handleClose = () => {
    dispatch(handleShowSettleUp(isSettleUp));
  };

  const classes = useStyles();
  return (
    <Paper>
      <Dialog
        open={isSettleUp}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth='xs'
        fullWidth={true}
      >
        <Box className={classes.title}>
          <DialogTitle
            className={classes.titleText}
            id="form-dialog-title"
          >
            Settle up
            </DialogTitle>
        </Box>
        <DialogContent>
          <Box>
            <h2>Choose a payment method</h2>
          </Box>
          <Box className={classes.buttons} display='flex' flexDirection='column'>
            <Button
              variant='contained'
              type='button'
              color='primary'
              onClick={handleClose}
              className={classes.buttons}
            >
              Record a cash payment
            </Button>
            <Button
              className={classes.buttons}
              variant='outlined'
            >
              <img className={classes.image} src='paypal.png' alt='paypal' />
            </Button>
            <button
              variant='contained'
              className={classes.button}
            >
              <img className={classes.image} src='venmo.png' alt='venmo' />
            </button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Box display='flex' justifyContent='flex-end'>
            <Button
              variant='contained'
              type='button'
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant='contained'
              type='button'
              color='primary'
            >
              Save
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default SettleUp;
