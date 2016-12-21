import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hellooooo {{name}}</h1>`,
})
export class AppComponent  {
  title = 'Tour of Heroes';
  hero = 'Windstorm';
}
