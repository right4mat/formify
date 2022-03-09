import React, {
  useCallback,
  useMemo,
  memo,
  useRef,
  useEffect,
  useState
} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { InputsEdit } from './models/inputs'
import Type from '../../../../../../shared/types/Type'
import types from '../../../../../../../shared/models/types'
import json2mq from 'json2mq'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: 'flex',
    justifyContent: 'flex-start',
    maxHeight: 72
  },
  input: {
    backgroundColor: '#fff'
  }
}))

const InputToRender = memo((props) => {
  const Input = InputsEdit[props.type].input
  console.log('Inputs re-render ' + props.index)

  if (Input) {
    return (
      <Input
        index={props.index}
        data={props.inputs}
        onChange={props.onChange}
      />
    )
  }
})

function EditCard(props) {
  const classes = useStyles()
  const measureWidth = useRef(null)
  // const matches = useMediaQuery(
  //   json2mq({
  //     maxWidth: 1000,
  //   })
  // );
  const [width, setWidth] = useState(null)
  const getWidth = (width) => {
    console.log(width)
    return width <= 600
  }

  useEffect(() => {
    if (measureWidth.current) {
      console.log(measureWidth.current.offsetWidth)
      setWidth(measureWidth.current.offsetWidth)
    } else {
      setWidth(null)
    }
  }, [])

  return (
    <React.Fragment >
      <Grid item xs={getWidth(width) ? 12 : 8} className={classes.gridItem}>
        <TextField
          required
          placeholder={InputsEdit[props.type].placeholder1}
          className={classes.input}
          label={InputsEdit[props.type].label1}
          variant='outlined'
          fullWidth
          InputLabelProps={{
            shrink: true
          }}
          value={props.question}
          onChange={(e) => {
            props.onChange(props.index, 'question', e.target.value)
          }}
        />
      </Grid>
      <Grid item xs={getWidth(width) ? 12 : 4} className={classes.gridItem}>
        <Select
          size='small'
          className={classes.input}
          value={props.type}
          onChange={(e) => props.onChange(props.index, 'type', e.target.value)}
          variant='outlined'
          fullWidth
        >
          {Object.keys(types).map((key, index) => (
            <MenuItem value={key} key={key}>
              <Type
                text={types[key].text}
                icon={types[key].icon}
                iconColor={types[key].iconColor}
                color={types[key].color}
              />
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid ref={measureWidth} item xs={12} className={classes.gridItem}>
        <TextField
          size='small'
          placeholder={'Explain further...'}
          className={classes.input}
          label='Optional help text'
          variant='outlined'
          fullWidth
          InputLabelProps={{
            shrink: true
          }}
          value={props.detail}
          onChange={(e) =>
            props.onChange(props.index, 'detail', e.target.value)
          }
        />
      </Grid>
      <InputToRender
        type={props.type}
        index={props.index}
        inputs={props.inputs}
        onChange={props.onChange}
      />
    </React.Fragment>
  )
}

export default memo(EditCard)
