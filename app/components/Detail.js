"use client"
import { useSearchParams } from 'next/navigation'
import Router, { useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'
import { myContext } from './Context'
import styles from "../scss/detail.module.scss"

function Detail() {
    const {fetchFn, dData} = useContext(myContext);
    const params = useSearchParams()
    // const item = JSON.parse(router.get("item"))
    // const item = router.query;
    const key = params.get("key");
    console.log(key)
    const item = dData;

    useEffect(()=>{
      fetchFn("detail", key);
    }, [])

  return (
    <>
      <div>{item.title}</div>
      <div>{item.link}</div>
      <div>{item.description}</div>
    </>
  )
}

export default Detail