import React, { useContext } from 'react'
import styles from "../page.module.scss"
import { myContext } from './Context'

function Pop() {
    const {popSt, setPopSt, pData, setPData} = useContext(myContext);

  return (
    <div onClick={()=>{setPopSt("")}} className={`${styles.popBg} ${popSt == "active" ? styles.active : ""}`}>
        <div className={styles.popBox}>{pData.title}</div>
    </div>
  )
}

export default Pop