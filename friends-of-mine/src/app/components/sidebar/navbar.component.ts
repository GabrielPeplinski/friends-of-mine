import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title: string = 'Friends Of Mine'

  onTextClick(): void {
    window.alert('Evento adicionado')
  }

  showMenu = true;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
