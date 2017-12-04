import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'slider-page',
  defaultHistory: ['home-page']
})
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html'
})
export class Slider  {
	constructor(){

	}

 	public tap: string = "100%";

	tapEvent(e) {
 		this.tap = (this.tap != "1240px")?"1240px":"100%";
 	}
}
