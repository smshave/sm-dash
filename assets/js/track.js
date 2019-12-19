

$(document).keypress(function (e) {
    if (e.which == 13) {
        event.preventDefault();
        var user_id=document.getElementById("trackingNumber").value;
        window.location.href="?trackingNumber="+user_id+"&language=en";
    }
});

    

function myFunction(){
		var user_id=document.getElementById("trackingNumber").value;
		window.location.href="?trackingNumber="+user_id+"&language=en";
	}

var trackid = window.location.search;

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api-eu.dhl.com/track/shipments" + trackid,
  "method": "GET",
  "headers": {
    "DHL-API-Key": "secrets.Consumer_Key",
    "Content-Type": "application/json",
  },
  "data": ""
};

$.ajax(settings).done(function (jcontent){
    
    
     // Time last
	var d1 = new Date(jcontent.shipments[0].status.timestamp);
var formattedDate = d1.getDate() + "-" + (d1.getMonth() + 1) + "-" + d1.getFullYear();
var hours = (d1.getHours() < 10) ? "0" + d1.getHours() : d1.getHours();
var minutes = (d1.getMinutes() < 10) ? "0" + d1.getMinutes() : d1.getMinutes();
var formattedTime = hours + ":" + minutes;
	formattedDate = formattedDate + " " + formattedTime;
    
    //Last color
    var color1 = "badge badge-pill badge-primary" ;
var logo = "ni ni-spaceship" ;
 badge = "badge badge-pill badge-primary" ;   

  var event = jcontent.shipments[0].status.description;

if (event == 'Spedizione in consegna'|| event == 'With delivery courier'){
    var colork = "-info" ;
    logo = "ni ni-delivery-fast" ;
    color1 = "badge badge-pill badge-info" ;
    badge = "badge badge-pill badge-info" ;
    }
else if (event == 'Spedizione ritirata' || event == 'Shipment picked up'  || event.includes("istruzioni") || event.includes("instruction")) {
    logo = "ni ni-box-2";
    colork = "-default" ;
    color1 = "badge badge-pill badge-default" ;
    badge = "badge badge-pill badge-default" ;
}
else if (event.includes("Spedizione Consegnata") || event.includes("Delivered")){
    colork = "-success"  ;
    color1 = "badge badge-pill badge-success" ;
    logo = "ni ni-check-bold" ;
    badge = "badge badge-pill badge-success" ;
}
else if (event.includes("Spedizione arrivata") || event.includes("Arrived at Delivery")){
    colork = "-warning"  ;
    logo = "ni ni-pin-3" ;
}
else if (event == 'Errore' || event == 'Error'){
    colork = "-allert"  ;
    logo = "ni ni-bell-55" ;
}

else  colork =  "-primary" ;
   
   var last = document.getElementById('last');
last.innerHTML += '<div class="card card-stats"><div class="card-body"><div class="row"><div class="col"><h5 class="card-title text-uppercase text-muted mb-0" id>' + formattedDate + '</h5><span class="h2 text' + colork + ' font-weight-bold mb-0">' + jcontent.shipments[0].status.description + '</span></div><div class="col-auto"><div class="icon icon-shape bg' + colork + ' text-white rounded-circle shadow"><i class="' + logo + '"></i></div></div></div><p class="mt-3 mb-0 text-sm"><span class="text mr-2"> Shipping number : </i></span><span class="text-nowrap">' + jcontent.shipments[0].id + '</span></p><p class="mt-3 mb-0 text-sm"> <span class="text-success mr-2"><i class="fas fa-map-marker-alt"></i> Da : </span> <span class="text-nowrap">' + jcontent.shipments[0].origin.address.addressLocality + '</span> </p><p class="mt-3 mb-0 text-sm"> <span class="text-success mr-2"><i class="fas fa-map-marker-alt"></i> A : </span> <span class="text-nowrap">' + jcontent.shipments[0].destination.address.addressLocality + '</span> </p></div></div>';
   


var output = document.getElementById('id');
output.innerHTML = 'Shipping number ' + jcontent.shipments[0].id + ' details';

for (var i = 0; i < jcontent.shipments[0].events.length; i++) {
    
color1 = "badge badge-pill badge-primary" ;
logo = "ni ni-spaceship" ;
var bae = "badge badge-pill badge-primary" ;   

  event = jcontent.shipments[0].events[i].description;

if (event == 'Spedizione in consegna'|| event == 'With delivery courier'){
    var color = "timeline-step badge-info" ;
    logo = "ni ni-delivery-fast" ;
    color1 = "badge badge-pill badge-info" ;
    badge = "badge badge-pill badge-info" ;
    }
else if (event == 'Spedizione ritirata' || event == 'Shipment picked up') {
    logo = "ni ni-box-2";
    color = "timeline-step badge-default" ;
    color1 = "badge badge-pill badge-default" ;
    badge = "badge badge-pill badge-default" ;
}
else if (event.includes("Spedizione Consegnata") || event.includes("Delivered")){
    color = "timeline-step badge-success"  ;
    color1 = "badge badge-pill badge-success" ;
    logo = "ni ni-check-bold" ;
    badge = "badge badge-pill badge-success" ;
}
else if (event.includes("Spedizione arrivata") || event.includes("Arrived at Delivery")){
    color = "timeline-step badge-warning"  ;
    color1 = "badge badge-pill badge-warning";
    logo = "ni ni-pin-3" ;
    badge = "badge badge-pill badge-warning" ;
}
else if (event == 'Errore' || event == 'Error'){
    color = "timeline-step badge-allert"  ;
    color1 = "badge badge-pill badge-allert" ;
    logo = "ni ni-bell-55" ;
    badge = "badge badge-pill badge-allert" ;
}

else  color =  "timeline-step badge-primary" ;


        // Time detail
d1 = new Date(jcontent.shipments[0].events[i].timestamp);
formattedDate = d1.getDate() + "-" + (d1.getMonth() + 1) + "-" + d1.getFullYear();
hours = (d1.getHours() < 10) ? "0" + d1.getHours() : d1.getHours();
minutes = (d1.getMinutes() < 10) ? "0" + d1.getMinutes() : d1.getMinutes();
formattedTime = hours + ":" + minutes;
formattedDate = formattedDate + " " + formattedTime;
    
    
var output1 = document.getElementById('output');
output1.innerHTML += '<div class="timeline-block"><span class="' + color + '"><i class="' + logo + '"></i></span><div class="timeline-content"><small class="text-muted font-weight-bold">' + formattedDate + '</small><h5 class=" mt-3 mb-0">' + jcontent.shipments[0].events[i].location.address.addressLocality + '</h5><p class=" text-sm mt-1 mb-0">' + jcontent.shipments[0].events[i].description + '</p><div class="mt-3"><span class="' + color1 + '">' + jcontent.shipments[0].id + '</span></div></div></div>';


document.getElementById("trackingNumber").value = jcontent.shipments[0].id;

}
});


