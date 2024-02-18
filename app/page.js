"use client"
import styles from "./page.module.scss"
import { useContext, useEffect, useState } from 'react'
import { myContext } from './components/Context'
import { useRouter } from 'next/navigation'

export default function Home() {
  const {data, fetchFn, setSrchInp} = useContext(myContext);
  const [test, setTest] = useState([]);

  let {page, setPage} = useContext(myContext);
  const navi = useRouter();

  useEffect(() => {
		fetchFn();
	}, [])

  const searching = (e) => {
    e.preventDefault();
    fetchFn("search", e.target.searchV.value);
    setPage(1);
  };

  useEffect(()=>{
    setTest(data.map((item, K)=>{
      const a = data.filter(item => {
        return item.title == "잘가!!";
      })
      console.log(a);
      item.key = K
      item.test = `wow${K}`
      return item;
    }));
    console.log(test);
  }, [data])


  // if(!data) {return <>로딩중</>}
  return (
    <section className={styles.mainSec}>
      <form className={styles.searchBox} onSubmit={(e)=>{searching(e)}}>
        <input onChange={(e)=>{setSrchInp(e.target.value)}} name="searchV"/>
      </form>
      <ul className={styles.list}>
        {
        data.map((item) => (
          <li className={styles.books}>
            <figure onClick={()=>{
              navi.push(`/pages/detail?key=${item.isbn}`);
            }} className={styles.bPoster}><img src={item.image}/></figure>
            <p className={styles.bTitle}>{item.title}</p>
          </li>
        ))
        }
        <button onClick={()=>{fetchFn("more", setPage(++page)); console.log(page);}}>더보기</button>
      </ul>
    </section>
  )
}
