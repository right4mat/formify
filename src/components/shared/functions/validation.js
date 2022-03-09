import { isNumeric, validateEmail } from '../../../utils/helpers'

export function valSelection(f) {
  for (x of f.inputs) if (x.selected) return true
  return false
}

export function valFile(f) {
  if (f.inputs[0].value.file) return true
  return false
}

export function valText(f) {
  if (f.inputs[0].value) return true
  return false
}

export function valSwitch(f) {
  return true
}

export function valEmail(f) {
  return validateEmail(f.inputs[0].value)
}

export function valPhone(f) {
  if (!f.inputs[0].value.ctry) return false

  return isNumeric(f.inputs[0].value.number)
}


export function valNumber(f) {
  return isNumeric(f.inputs[0].value)
}
