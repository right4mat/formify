import React, { useState, memo, useCallback, useRef, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { onItemChange } from '../shared/functions/onItemChanges'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { form as formTemplate } from '../builder/models/formModel'
import { Inputs } from './models/inputs'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { validateForm } from './functions/validator'

const useStyles = makeStyles((theme) => ({
  form: {
    minHeight: '100%',
    minWidth: '100%',
    paddingBottom: theme.spacing(4)
  }
}))

const InputToRender = memo((props) => {
  const Input = Inputs[props.type].input

  if (Input) {
    return (
      <Input
        index={props.index}
        question={props.question}
        placeholder={props.placeholder}
        required={props.required}
        hidden={props.hidden}
        disabled={props.disabled}
        id={props.id}
        detail={props.detail}
        type={props.type}
        inputs={props.inputs}
        onChange={props.onChange}
        fullWidth={props.fullWidth}
        error={props.error}
      />
    )
  }
})

export default function Viewer(props) {
  const classes = useStyles()
  const theme = createTheme(props.theme)
  const [form, setForm] = useState(props.form)
  const formOrignal = useRef(JSON.parse(JSON.stringify(props.form)))

  const onItemChangeCB = useCallback(
    (index, key, value) => {
      onItemChange(index, key, value, setForm, false)
      props.onChange(form)
    },
    [setForm]
  )

  useEffect(() => {
    setForm(props.form)
  }, [props.form])

  return (
    <ThemeProvider theme={theme}>
      <Box width={'100%'} height={'100%'} style={{ position: 'relative' }}>
        <Box marginBottom={5}>
          <Typography variant='h3'>{form && form.title}</Typography>
        </Box>
        <form className={classes.form} noValidate={false}>
          {form &&
            form.items
              .filter((item) => !item.hidden)
              .map((item, index) => (
                <Box marginBottom={5}>
                  <InputToRender
                    index={index}
                    question={item.question || ''}
                    placeholder={item.placeholder}
                    required={item.required}
                    hidden={item.hidden}
                    error={item.error}
                    disabled={item.disabled}
                    id={item.id}
                    detail={item.detail}
                    type={item.type}
                    inputs={item.inputs}
                    onChange={onItemChangeCB}
                    fullWidth={true}
                  />
                </Box>
              ))}
          <Box marginBottom={5} marginTop={10}>
            <Button
              variant='contained'
              onClick={() => {
                if (validateForm(form)) {
                  props.onSubmit(form)
                } else setForm((old) => ({ ...old }))
              }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </ThemeProvider>
  )
}
