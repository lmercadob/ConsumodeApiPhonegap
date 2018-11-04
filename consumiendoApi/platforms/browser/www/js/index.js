var app={
	//Constructor de Aplicacion
	initialize: function(){
		this.bindEvents();
	},
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        //alert('bindEvents'); funciona.
    },
    onDeviceReady: function() {
    	//alert(' antes del onDeviceReady'); funciona
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        document.getElementById('btnShow').addEventListener('click',this.onClickbtnShow, false);
        //var parentElement = document.getElementById(id);
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');
        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    onClickbtnShow: function(){
    	alert('esta alerta se lanzo desde el boton desde afuera de la funcion');
    	var contenido=document.querySelector('#contenido');
    	app.traer(contenido);
    },
    traer: function(contenido)
    {
        //alert('dentro de la funcion'); aqui aun funciona
        //fetch('https://randomuser.me/api/') este api funciona
        fetch('http://127.0.0.1:8000/conductores',{mode:'no-cors'})
        .then(res=>{
            console.log(res)
            contenido.innerHTML=`${res.results}`
            alert('primera promesa')
        })
        .then(data =>{
            console.log(data.results)
            contenido.innerHTML+=`
            <p>nombre: ${data.results}</p>
            `
            alert('segunda promesa')
            //<p>nombre: ${data.results['1'].nombre}</p>
        })
    },
};