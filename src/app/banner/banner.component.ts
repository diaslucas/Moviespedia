import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'banner',
  templateUrl: './banner.component.html'
})

export class BannerComponent {
    
  @Input() urlImg: string = 'https://www.wpromote.com/img/case_study/silicon_valley_piper_boys.png';

}

