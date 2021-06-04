import {Injectable} from '@angular/core';

@Injectable()
export class SliderImgServices {
  private objetoTarjetaNin: InterfaceSlider [] =  [
    {
      imagenSlider: '../../../assets/escuela/unnamed2.png',
      titulo: '',
      descrip: ''
    },
    {
      imagenSlider: '../../../assets/escuela/10859256.jpg',
      titulo: '',
      descrip: ''
    },
    {
      imagenSlider: '../../../assets/escuela/unnamed.jpg',
      titulo: '',
      descrip: ''
    },

  ];

  getTarjetas(): any {
    return this.objetoTarjetaNin;
  }
}

export interface InterfaceSlider {
  imagenSlider: string;
  titulo: string;
  descrip: string;
}
