import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() theme: 'dark' | 'light' = 'dark';
  @Input() activeItem = 'My products';

  readonly items = ['My products', 'Sales', 'Dealers', 'Buyer list', 'Rating'];
}
