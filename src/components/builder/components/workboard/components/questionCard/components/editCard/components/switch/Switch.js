import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import SwitchInput from '../../../../../../../../../shared/customInputs/SwitchInput'
import { setValue } from '../../../../../../../../../../utils/utils'

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    maxHeight: 72,
    minHeight: 2,
    padding: theme.spacing(1)
  },
  gridItemFlexEnd: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    maxHeight: 72,
    minHeight: 2,
    padding: theme.spacing(1)
  },
  break: {
    borderTop: '1px solid #d3d3d3',
    width: '100%',
    height: 0
  },

  input: {
    backgroundColor: '#fff'
  }
}))

export default function Switch(props) {
  const classes = useStyles()
  if (props.data[0].value === '') props.data[0].value = 'NO'
  return (
    <React.Fragment>
      <Grid item xs={12} className={classes.gridItemFlexEnd}>
        <hr className={classes.break} />
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <SwitchInput
          answerA={'No'}
          answerB={'Yes'}
          value={props.data[0].value}
          onChange={(v) =>
            props.onChange(props.index, 'inputs', [
              ...setValue(props.data, 0, v)
            ])
          }
        />
      </Grid>
    </React.Fragment>
  )
}
