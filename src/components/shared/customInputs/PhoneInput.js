import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  FlexEnd: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  areaCode: {
    width: '15%',
    paddingRight: theme.spacing(1)
  },
  phoneNumber: {
    width: '85%'
  }
}))

export default function Phone(props) {
  const classes = useStyles()

  return (
    <Box className={classes.FlexEnd}>
      <Box item xs={2} className={classes.areaCode}>
        {' '}
        <TextField
          disabled={props.disabled}
          required={props.required}
          placeholder={'+ 61'}
          className={props.className}
          label={props.areaLabel}
          variant={props.variant}
          fullWidth
          InputLabelProps={props.InputLabelProps}
          onChange={(e) => {
            if (!props.value)
              return props.onChange({ ctry: e.target.value, number: '' })

            props.value.ctry = e.target.value
            props.onChange(props.value)
          }}
          value={props.value ? props.value.ctry : ''}
        />
      </Box>
      <Box xs={10} className={classes.phoneNumber}>
        {' '}
        <TextField
          disabled={props.disabled}
          required={props.required}
          placeholder={props.placeholder}
          className={props.className}
          label={props.phoneLabel}
          variant={props.variant}
          fullWidth
          InputLabelProps={props.InputLabelProps}
          onChange={(e) => {
            if (!props.value)
              return props.onChange({ ctry: '', number: e.target.value })

            props.value.number = e.target.value
            props.onChange(props.value)
          }}
          value={props.value ? props.value.number : ''}
        />
      </Box>
    </Box>
  )
}
