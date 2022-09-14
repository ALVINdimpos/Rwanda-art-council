import React from 'react';
import {BiPlusMedical} from 'react-icons/bi'
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
import { makeStyles } from '@material-ui/core/styles';
const useStyle=makeStyles({
    btn:{
            width: '100px',
            padding: '12px',
            cursor: 'pointer',
            background: '#C5801A',
            color:'white',
            opacity:'.8',
            border:'none',
            textTransform:'capitalize',
            borderadius: "8px",


            '&:hover':{
                background: 'transparent',
                border: "1.5px solid #C5801A",
                color: "#C5801A",
                borderRadius: '8px',
            }
        
    },


lbl:{
  fontSize:'12px',
  paddingLeft:'5px'
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

export default function EventDialog({children,title}) {
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
      <BiPlusMedical style={{marginRight:"10px"}}/> Event
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
