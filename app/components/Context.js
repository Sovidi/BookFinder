"use client"
import axios from 'axios';
import React, { createContext, useEffect, useReducer, useState } from 'react'
export const myContext = createContext();

const insert = (state, action) => {
	switch(action.type) {
		case "main" : return action.d;
		case "search" : return action.d;
		case "more" : return action.d;
		default : return action.d;
	}
}

function Context({ children }) {
	const [data, dispatch] = useReducer(insert, []);
	const [dData, setDData] = useState([]);
	const [page, setPage] = useState(1);
	const [srchInp, setSrchInp] = useState("");

	// const dbtest = async () => {
	// 	axios.get(`/api/test`)
	// 	.then(res=>{
	// 		console.log(res.data);
	// 	})
	// }
	
	// useEffect(()=>{
	// 	dbtest();
	// }, [])	

	const fetchFn = async (type, data) => {
		let res;
		switch(type) {
			case "main" :
				res = await axios.get(`/api`);
				res = res.data;
				dispatch({type, d: res});
				break;
			case "search" :
				res = await axios.get(`/api?value=${srchInp}`);
				res = res.data;
				dispatch({type, d: res});
				break;
			case "more" :
				res = await axios.get(`/api?value=${srchInp}&num=${page}`);
				res = res.data;
				dispatch({type, d: res});
				break;	
			case "detail" :
				res = await axios.get(`/api?value=${data}`);
				res = res.data[0];
				setDData(res);
				break;	
			default : 
				res = await axios.get(`/api?value=${srchInp}&num=${page}`);
				res = res.data;
				dispatch({type, d: res});
		}
	}

	useEffect(()=>{
		fetchFn("more", "");
		console.log(page);
	}, [page]);

	return (
		<myContext.Provider value={{ data, fetchFn, dData, page, setPage, setSrchInp }}>
			{children}
		</myContext.Provider>
	)
}

export default Context