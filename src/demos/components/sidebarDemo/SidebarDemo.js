import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import VisibilityIcon from '@material-ui/icons/Visibility'
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial'
import StyleIcon from '@material-ui/icons/Style'
import SettingsIcon from '@material-ui/icons/Settings'
import Tooltip from '@material-ui/core/Tooltip'
import EditIcon from '@material-ui/icons/Edit'
import Badge from '@material-ui/core/Badge'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
    width: '100%'
  },
  item: {}
}))

export default function SidebarDemo(props) {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Grid
        container
        spacing={1}
        direction='column'
        justifyContent='cetner'
        alignItems='stretch'
      >
        <Grid item>
          <Tooltip title='View from' placement='right-start'>
            <IconButton
              size='medium'
              className={classes.item}
              onClick={() => props.setMode('view')}
            >
              <VisibilityIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title='Your saved questions' placement='right-start'>
            <IconButton size='medium' className={classes.item}    onClick={() => props.setOpenSavedForms(true)}>
              <Badge badgeContent={Object.keys(props.storage).length} color='secondary' >
                <FolderSpecialIcon />
              </Badge>
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title='Style form' placement='right-start'>
            <IconButton
              size='medium'
              className={classes.item}
              onClick={() => props.setStyles(true)}
              //disabled={props.mode !== "view"}
            >
              <StyleIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title='Edit from' placement='right-start'>
            <IconButton
              size='medium'
              className={classes.item}
              onClick={() => props.setMode('build')}
            >
              <EditIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  )
}
