import { Component, OnInit } from '@angular/core';
import { SliderImgServices } from '../../services/sliderImg.services';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
 recuperarImgSlider: any [] = [];
  constructor( private sliderImg: SliderImgServices) { }

  ngOnInit(): void {
    this.recuperarImgSlider = this.sliderImg.getTarjetas();
    console.log(this.recuperarImgSlider);
  }

}
