const mje = document.querySelector('#mje')
document.querySelector('#createUser').addEventListener('submit',e=>{
    e.preventDefault()
    const data = Object.fromEntries(
        new FormData(e.target)
    )
	llamandoAPI(data)
})

const llamandoAPI = async (data) => {
	const options = {
		method: 'POST',
		headers: {
			'Content-Type':'application/json'
		},
        body:JSON.stringify(data),
		cache: 'no-cache'
	}
	const respuesta = await fetch(`/api/usuarios`,options)
	const data2 = await respuesta.json()
	console.log(data2)
}