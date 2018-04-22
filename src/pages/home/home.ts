import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CriarTrajetoPage } from '../criartrajeto/criartrajeto';
import { DatePicker } from '@ionic-native/date-picker';

declare var google;

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
	@ViewChild('map') mapElement: ElementRef;
	public btStart = true;
	public etapa1 = false;
	public etapa2 = false;

	map: any;
	push: any;
	constructor(public navCtrl: NavController,
		public datePicker: DatePicker) {
	}
	//	this.loadMap();
	ionViewDidLoad(){
		this.datePicker.show({
			date: new Date(),
			mode: 'date',
			androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
		}).then(
		date => console.log('Got date: ', date),
		err => console.log('Error occurred while getting date: ', err)
		);
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
	hideBtStart(objs){
		this.btStart = false;
		this.etapa1 = true;
	}
	hideEtapa1(){
		this.etapa1 = false;
	}

	onSuccess(date) {
		alert('Selected date: ' + date);
	}

	onError(error){
		alert('Error: ' + error);
	}

}