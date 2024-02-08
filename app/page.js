"use client"
import styles from "./page.module.scss"
import { useContext, useEffect } from 'react'
import { myContext } from './components/Context'
import { useRouter } from 'next/navigation'

export default function Home() {
  const {data, fetchFn, setSrchInp} = useContext(myContext);
  let {page, setPage} = useContext(myContext);
  const navi = useRouter();

  console.log(data);

  useEffect(() => {
		fetchFn();
	}, [])

  const searching = (e) => {
    e.preventDefault();
    fetchFn("search", e.target.searchV.value);
  };


  // if(!data) {return <>로딩중</>}
  return (
    <>
    <form onSubmit={(e)=>{searching(e)}}>
      <input onChange={(e)=>{setSrchInp(e.target.value)}} name="searchV"/>
    </form>
    <ul className={styles.list}>
      {
      data.map((item) => (
        <li className={styles.books}>
          <figure className={styles.bPoster}><img src={item.image}/></figure>
          <p>{item.title}</p>
          <a onClick={()=>{
            navi.push(`/pages/detail?key=${item.isbn}`);
          }}>자세히 보기</a>
        </li>
      ))
      }
      <button onClick={()=>{fetchFn("more", setPage(++page))}}>더보기</button>
    </ul>
    </>
  )
}
