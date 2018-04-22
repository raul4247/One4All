import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google;

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
	@ViewChild('map') mapElement: ElementRef;
	map: any;
	
	constructor(public navCtrl: NavController) {
		
	}
	ionViewDidLoad(){
		this.loadMap();
	}
	loadMap(){
		var uluru = {lat: -25.363, lng: 131.044};
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 4,
			center: uluru
		});
		var marker = new google.maps.Marker({
			position: uluru,
			map: map
		});
		let latLng = new google.maps.LatLng(-34.9290, 138.6010);

		let mapOptions = {
			center: latLng,
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}

		this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

	}
}