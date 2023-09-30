import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.css']
})
export class HistoryCardComponent {
  @Input() name: string = '';
  @Input() fromAddress: string = '';
  @Input() toAddress: string = '';
}
