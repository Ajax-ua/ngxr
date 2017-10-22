import { Component } from '@angular/core';
import { Some } from './services/some.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(
      private some: Some
  ){

  }

  ngOnInit(){
    this.some.onInit();
  }
}
