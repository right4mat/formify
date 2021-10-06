import React from 'react'
import styles from './styles.module.css'
import DemoTest from './demos/Demo'
import BuilderExport from './components/builder/Main'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Demo = () => <DemoTest/>

export const Builder = (props) => <BuilderExport {...props}/>
