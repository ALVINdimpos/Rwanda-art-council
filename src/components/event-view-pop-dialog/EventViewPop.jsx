import React from 'react';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Dialog} from '@material-ui/core';
import  MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import  Typography from '@material-ui/core/Typography';
import { GrFormViewHide } from 'react-icons/gr';
import { makeStyles } from '@material-ui/core/styles';
const useStyle=makeStyles({
    btn:{
         background:"transparent",
         border:"none",
         '&:hover':{
            border:"none",
            transition:".1s",
         }
         }

});



const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function EventViewPop({children,title}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

const classes=useStyle();

  return (
    <div>
      <Button className={classes.btn} onClick={handleClickOpen}>
        <GrFormViewHide />
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
           {title}
        </DialogTitle>
        <DialogContent dividers>
        {children}          
        </DialogContent>       
      </Dialog>
    </div>
  );
}
