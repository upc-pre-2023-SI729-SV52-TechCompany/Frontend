import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  servicesToShow = [
    {
      serviceName: 'Servicio 1',
      serviceType: 'Tipo 1',
      vehicleType: 'Vehículo 1',
      serviceUrl: '/ruta-detalle-1'
    },
    {
      serviceName: 'Servicio 2',
      serviceType: 'Tipo 2',
      vehicleType: 'Vehículo 2',
      serviceUrl: '/ruta-detalle-2'
    },
    {
      serviceName: 'Servicio 3',
      serviceType: 'Tipo 3',
      vehicleType: 'Vehículo 3',
      serviceUrl: '/ruta-detalle-3'
    },
  ];

  historyToShow = [
    {
      name: 'Historia 1',
      fromAddress: 'Dirección 1',
      toAddress: 'Dirección 2'
    },
    {
      name: 'Historia 2',
      fromAddress: 'Dirección 1',
      toAddress: 'Dirección 2'
    },
    {
      name: 'Historia 3',
      fromAddress: 'Dirección 1',
      toAddress: 'Dirección 2'
    },
  ];
}

