import {Component} from '@angular/core';

@Component({
  selector: 'app-contract-card',
  templateUrl: './contract-card.component.html',
  styleUrls: ['./contract-card.component.css']
})
export class ContractCardComponent {
  subject: string = 'example subject';
  origin:string = 'origin';
  destination:string = 'destination';
  dateOfCreation:string = 'dateofcreation';
  timeOfCreation:string = 'timeofcreation';
  quantityOfPerson = '3';
  clientName = 'clientname';
  phoneNumber = '23456789';
  price = '1323';
}
