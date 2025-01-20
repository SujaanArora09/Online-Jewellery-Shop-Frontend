import { Component, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [CommonModule],
  providers: [DatePipe], 
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.css'
})
export class OrderCardComponent {
  @Input()orderItem:any;
}
