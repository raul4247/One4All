import { Component, ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google;

@IonicPage()
@Component({
	selector: 'page-criar-trajeto',
	templateUrl: 'criartrajeto.html',
})
export class CriarTrajetoPage {
	@ViewChild('map') mapElement: ElementRef;
	map: any;
	push: any;

	public itemsMap = {
		markers:[]
	};
	public addresses = {
		origin: 'av. bernardo vasconcelos',
		destination: 'av. antonio carlos',
	}

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CriarTrajetoPage');
//		this.loadMap();
	}

	loadMap(){
		var latlng = {lat: -19.9061619, lng: -43.9442227};
		var directionsDisplay = new google.maps.DirectionsRenderer();
		var directionsService = new google.maps.DirectionsService();

		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 17,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			disableDefaultUI: true,
			draggable: false
		});
		var marker = new google.maps.Marker({
			position: latlng,
			map: map,
			title: 'Minha localização'
		});
		this.calculateAndDisplayRoute(directionsService, directionsDisplay, this.addresses);
	}
	calculateAndDisplayRoute(directionsService, directionsDisplay, addr){
		directionsService.route({
			origin: addr.origin,
			destination: addr.destination,
			travelMode: 'DRIVING'
		}, function(response, status) {
			if (status === 'OK') {
				directionsDisplay.setDirections(response);
			} else {
				console.log('Directions request failed due to ' + status);
			}
		})
	}

}

	/*
		BIND DOS DADOS ORIGEM E DESTINO
		this.shipment.origin = this.addresses.origin
		this.shipment.destination = this.addresses.destination

	},
		RESET MAP

		ADD MARKER

		resetMap(){
			for (var i=0;i<this.itemsMap.markers.length;i++)
				this.itemsMap.markers[i].setMap(null);
			this.addresses.origin=''
			this.addresses.destination=''	
			this.addresses.distance=''	
			this.itemsMap.markers = []
			if(typeof this.itemsMap.line !== 'undefined')
				this.itemsMap.line.setMap(null)
			this.itemsMap.directionsDisplay.setMap(null);
		},	
		addMarker(itemsMap, location, infowindow){
			var marker = new google.maps.Marker({
				position: location,
				map: itemsMap.map
			});
			itemsMap.markers.push(marker)
			marker.addListener('click', function() {
				infowindow.open(itemsMap.map, marker)
			});
			return marker
		},

		latLngToAddress(itemsMap, infowindow, latlng, addMarker, distanceLatLng, routeCalc, addr, flag){
			itemsMap.geocoder.geocode({'location': latlng}, function(results, status){
				if(status === 'OK'){
					if(results[1]){
						var marker = addMarker(itemsMap, latlng, infowindow)
						infowindow.setContent(results[1].formatted_address)
						infowindow.open(itemsMap.map, marker)
						
						if(!flag) addr.origin = results[1].formatted_address
							else{
								addr.destination = results[1].formatted_address
								addr.distance = distanceLatLng(itemsMap.markers)
								routeCalc(itemsMap.directionsService,itemsMap.directionsDisplay,addr);
								itemsMap.directionsDisplay.setMap(itemsMap.map);
							}	
							
						} 
						else
							console.log('No results found')
					} 
					else
						console.log('Geocoder failed due to: ' + status)
				});
		},
		distanceLatLng(markers){
			var A = markers[0].position
			var B = markers[1].position
			return google.maps.geometry.spherical.computeDistanceBetween(A,B)
		},
	},
	*/
