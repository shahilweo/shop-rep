import * as React from 'react';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import "./PopModal.css"; 

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function PopupModal({ title, children, open, ModalClose, cancelbtn, cancelbtnTxt, savebtn, savebtnTxt, savebtnFunct }) { 
  return (
    <>
      <BootstrapDialog
        onClose={ModalClose}
        aria-labelledby="largeModal"
        open={open}>
        <BootstrapDialogTitle id="largeModal" onClose={ModalClose}>{title}</BootstrapDialogTitle> 
        <DialogContent dividers sx={{width: "100%"}}>{children}</DialogContent> 
        <DialogActions >
          {cancelbtn && <Button autoFocus onClick={ModalClose} > {cancelbtnTxt} </Button> }
          {savebtn && <Button autoFocus onClick={savebtnFunct}> {savebtnTxt} </Button>}          
        </DialogActions> 
      </BootstrapDialog>
    </>
  );
}