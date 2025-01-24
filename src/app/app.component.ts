import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  static nextId = 0;
  title = 'ng-test-component-not-destroyed';
  @HostBinding() id = `app-${AppComponent.nextId++}`;
}
