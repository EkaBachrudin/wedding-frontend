import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CoverComponent {
  showed = true;

  hideCover() {
    this.showed = false;
  }
}
