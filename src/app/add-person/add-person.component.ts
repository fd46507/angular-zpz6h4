import { Component, OnInit } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
})
export class AddPersonComponent implements OnInit, PersonInterface {
  firstName?: string;
  familyName?: string;
  age?: number;
  address: {
    city?: string;
    street?: string;
    postCode?: string;
  };
  constructor() {}

  addPerson() {
  }

  ngOnInit() {}
}
