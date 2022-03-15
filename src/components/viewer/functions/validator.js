import types from '../../shared/models/types'
export function validateForm(formData) {
  for (f of formData.items) {
    if (!types[f.type].validator) return true
    if (f.required && !types[f.type].validator(f)) {
      f.error = true
      console.log(f.question + ' not valid')
      return false
    }
    f.error = false
  }
  return true
}
