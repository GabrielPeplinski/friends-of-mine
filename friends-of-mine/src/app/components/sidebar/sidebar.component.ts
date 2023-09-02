import {Component} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  title: string = 'Friends Of Mine'

  onTextClick(): void {
    window.alert('Evento adicionado')
  }

  showMenu = true;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
