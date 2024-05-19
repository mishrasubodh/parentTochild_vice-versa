import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./child/child.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ParentComponent, ChildComponent]
})
export class AppComponent {
  title = 'parentTochild_vice-versa';
}
