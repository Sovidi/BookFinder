const { default: axios } = require("axios");


export async function GET(req) {
	const qData = Object.fromEntries(req.nextUrl.searchParams);
	const data = await axios.get(`https://openapi.naver.com/v1/search/book.json`, {
		params: { 
			query: qData.value ? qData.value : "가",
			display: qData.num ? `${qData.num}0` : "10",
		},
		headers: {
			'X-Naver-Client-Id': 'uuc9oZkuNAedZCQhnQrZ',
			'X-Naver-Client-Secret': 'xYefDXICyl'
		}
	});

	console.log(qData);
	
	return Response.json(data.data.items);
}