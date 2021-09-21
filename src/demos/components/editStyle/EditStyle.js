import { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { JSONEditor } from "react-json-editor-viewer";
import { createTheme } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
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
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
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

export default function EditStyles(props) {
  const [theme, setTheme] = useState(props.theme);
  const handleClickOpen = () => {
    props.setOpen(true);
  };
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Dialog
      fullWidth
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.open}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Edit form style
      </DialogTitle>
      <DialogContent dividers fullWidth>
        <Typography gutterBottom>
          This project uses Material UI. This allowed us to wrap the form
          component in a theme provider. You can can add your own JSON theme
          object to forms for custom styling. Learn more by clicking the links
          bellow.
        </Typography>

        <Typography gutterBottom>
          <Link
            href="https://material-ui.com/customization/theming/"
            marginBottom={10}
          >
            Material UI theming
          </Link>
          <br />
          <Link href="https://material-ui.com/customization/default-theme/">
            Default theme object
          </Link>
        </Typography>
        <div
          style={{
            paddingTop: 40,
          }}
        >
          <JSONEditor
            data={theme}
            collapsible
            onChange={(key, value, parent, data) => {
              setTheme(data);
            }}
            //view="dual"
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={() => props.setTheme(createTheme(theme))}
          color="primary"
        >
          Save changes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
