import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  content: string = 'A new world is waiting for you!';
  picture: string = 'http://www.wearebrandcollective.com/wp-content/uploads/2016/03/GetInTouchImagebright.png';


}
