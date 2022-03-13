import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

declare const navigator;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
  lat:number = 0;
  lng:number = 0;
  constructor(){
    if (navigator && navigator.geolocation)
    {
      const position = ( pos ) => {
        this.lng = pos.coords.longitude;
        this.lat = pos.coords.latitude;
      };

      const error = ( error ) => {
        alert(JSON.stringify(error));
      };


      // navigator.geolocation.getCurrentPosition( position, error );
      navigator.geolocation.watchPosition( position, error);
    
    }
  }
}