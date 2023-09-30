import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent {
  @Input() serviceName: string = '';
  @Input() serviceType: string = '';
  @Input() vehicleType: string = '';
  @Input() serviceUrl: string = '';
}
