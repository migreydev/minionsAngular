import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {

  terminoBusqueda: string = "";

  @Output() busqueda = new EventEmitter<string>();

  realizarBusqueda() {
    this.busqueda.emit(this.terminoBusqueda);
  }


}
