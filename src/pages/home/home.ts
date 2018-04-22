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
		var latlng = {lat: -19.9061619, lng: -43.9442227};
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
	}
}