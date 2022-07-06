import React from 'react'
import styles from "./PrimaryButton.module.css"

export default function PrimaryButton(props) {
  let inlineStyle = {
    marginTop: props.marginTop + "px"
  }
  return (
    <button style={inlineStyle} className={styles.PrimaryButton} >{props.label}</button>
  )
}
