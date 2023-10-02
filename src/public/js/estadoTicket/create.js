const mje = document.querySelector('#mje')
document.querySelector('#createUser').addEventListener('submit',e=>{
    e.preventDefault()
    const data = Object.fromEntries(
        new FormData(e.target)
    )
    console.log(data)
	//llamandoAPI(data)
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
	const respuesta = await fetch(`/api/products2/store`,options)
	const data2 = await respuesta.json()
	data2.success ? mje.innerHTML=data2.message : mje.innerHTML=data2.description
	console.log(data2)


	document.querySelector('#formReset').addEventListener('submit',e=>{
		e.preventDefault()
		const data = Object.fromEntries(
			new FormData(e.target)
		)
		llamandoAPI(data)
	})
	
	const llamandoAPI = async (data) =>{
		const options = {
			method: 'POST',
			headers:{
				'Accept': 'applicaciont/json',
				'Content-Type': 'applicaciont/json'
			},
			body:JSON.stringify(data),
			cache: 'no-cache'
		}
		const respuesta = await fetch(`/api/users/reset`,options)
		const data2 = await respuesta.json()
		const { access_token } = data2;
		if (access_token) {
			localStorage.setItem("access_token",access_token);
		}
		if (data2.success){
			mje.innerHTML = `<div class = "alert alert-success alert dismissible fade show" role = "alert">
			<strong>${mje.innerHTML='Revise su correo'}</strong>
			<button type ="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
			</div>`
		}else{
			mje.innerHTML = `<div class = "alert alert-success alert dismissible fade show" role = "alert">
			<strong>${mje.innerHTML=data2.message}</strong>
			<button type ="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
			</div>`
		}
	}
}