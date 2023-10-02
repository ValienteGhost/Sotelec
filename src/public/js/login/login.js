const mje = document.querySelector('#ErrorLoginMensaje')
document.querySelector('#FormLoginTecnico').addEventListener('submit',e=>{
    e.preventDefault()
    const data = Object.fromEntries(
        new FormData(e.target)
    )
    //console.log(data)
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
	const respuesta = await fetch(`/api/tecnicos/login`,options)
	const data2 = await respuesta.json()
	console.log(data2)
	data2.success ? window.location.replace('/api/ticket') : mje.innerHTML=data2.message
}