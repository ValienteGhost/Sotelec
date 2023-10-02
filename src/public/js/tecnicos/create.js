
//const mje = document.querySelector('#mje')
//const mje = document.querySelector('#createUsermje')
document.querySelector('#FormCreateTecnico').addEventListener('submit',e=>{
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
	const respuesta = await fetch(`/api/tecnicos`,options)
	const data2 = await respuesta.json()
	if(data2.success){
		window.location.replace('/')
	}

}