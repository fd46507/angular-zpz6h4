import { OnInit } from '@angular/core';

export interface PersonInterface {
  firstName?: string;
  familyName?: string;
  age?: number;
  address: {
    city?: string;
    street?: string;
    postCode?: string;
  };
}

export type Address = {
  city?: string;
  street?: string;
  postCode?: string;
};

export class Person implements OnInit, PersonInterface {
  firstName?: string;
  familyName?: string;
  age?: number;
  address: Address = {
    city: '',
    street: '',
    postCode: '',
  };
  constructor() {}

  ngOnInit() {}
}
