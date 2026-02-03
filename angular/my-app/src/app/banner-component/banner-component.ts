import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-banner-component',
  imports: [],
  templateUrl: './banner-component.html',
  styleUrl: './banner-component.scss',
})
export class BannerComponent {
  @Input() text: string = '';
}
