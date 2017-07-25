import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: `./navbar.html`,
  template:`<my-home></my-home>`,
  styleUrls:['./navbar.css','./login.css']
})
export class AppComponent  { name = 'Angular'; }
