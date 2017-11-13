import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'default-menu',
  templateUrl: './menu.component.html'
})

export class MenuComponent {
    
ariaExpanded: string = 'false';
isCollapsed: boolean = true;
show: string = 'show';

}

