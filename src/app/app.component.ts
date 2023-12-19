import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MinionComponent} from './minion/minion.component';
import { NavBarComponent } from './nav-bar/nav-bar.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MinionComponent, NavBarComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'minionAngular';

  nombre: string = "";


  realizarBusqueda(nombre: string) {
    this.nombre= nombre;

  }
  
}
