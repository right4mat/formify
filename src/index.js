import React from 'react'
import styles from './styles.module.css'
import DemoTest from './demos/Demo'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Demo = () => <Demo/>
