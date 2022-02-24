import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import CommentIcon from '@material-ui/icons/Comment'
import ListAltIcon from '@material-ui/icons/ListAlt'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
})

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions)

export default function SavedForms(props) {
  const handleClickOpen = () => {
    props.setOpen(true)
  }
  const handleClose = () => {
    props.setOpen(false)
  }

  return (
    <Dialog
      fullWidth
      onClose={handleClose}
      aria-labelledby='customized-dialog-title'
      open={props.open}
    >
      <DialogTitle id='customized-dialog-title' onClose={handleClose}>
        View submitted forms
      </DialogTitle>
      <DialogContent dividers fullWidth>
        <Typography gutterBottom>
          Forms can easily be persisted due to the JSON structure
        </Typography>
      </DialogContent>
      <List fullWidth>
        {Object.keys(props.forms).map((k) => (
          <ListItem
            key={k}
            role={undefined}
            dense
            button
            onClick={() => {
              props.switchForm(props.forms[k].form, props.forms[k].submission)
              handleClose()
            }}
          >
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText
              primary={props.forms[k].form.title}
              secondary={props.forms[k].date}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge='end'
                onClick={() => {
                  delete props.forms[k]
                  props.setForms({ ...props.forms })
                }}
              >
                <DeleteOutlineIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      {/* <DialogActions>
        <Button
          autoFocus
          onClick={() => props.setTheme(createTheme(theme))}
          color="primary"
        >
          Save changes
        </Button>
      </DialogActions> */}
    </Dialog>
  )
}
