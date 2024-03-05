import React, { useContext } from 'react'
import styles from "../scss/pop.module.scss"
import { myContext } from './Context'

function Pop() {
	const { popSt, setPopSt, pData, setPData } = useContext(myContext);

	return (
		<div onClick={() => { setPopSt("") }} className={`${styles.popBg} ${popSt == "active" ? styles.active : ""}`}>
			<div className={styles.popBox}>
				<div className={styles.bInfo}>
					<figure className={styles.bPoster}><img src={pData.image} /></figure>
					<div className={styles.infoText}>
						<p className={styles.title}>{pData.title}</p>
						<p className={styles.author}>{pData.author}</p>
						<p className={styles.price}>규정가 {pData.discount} 원</p>
						<p className={styles.pub}>{pData.publisher}</p>
					</div>
				</div>
				<div className={styles.descBox}>
					<p className={styles.bDesc}>{pData.description}</p>
				</div>
			</div>
		</div>
	)
}

export default Pop