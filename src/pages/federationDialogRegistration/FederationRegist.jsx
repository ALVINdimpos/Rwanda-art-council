import React from 'react';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import   Typography   from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyle=makeStyles({
    btn:{
            cursor:"pointer",
            width:"150px",
            opacity: .9,
            backgroundColor: "#C5801A",
             height: "40px",
             border:"none",
            borderRadius: "6px",
            fontSize:"11px",
           '&:hover':{
              transition:"ease",
              borderRadius: "6px",
              opacity: ".4px",
              border:"1.5px solid",
              background:"transparent",
              fontSize:"11px",
              padding: "5px 0px",

    },

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

export function FederationRegist({children,title}) {
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
        <PersonAddAltIcon /> <strong className={classes.lbl}>New</strong> 
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



