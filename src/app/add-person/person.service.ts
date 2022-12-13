import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable()
export class PersonService {
  constructor() {}

  saveToLocalStorage(person: Person) {
    window.localStorage.setItem(
      `${localStorage.length}`,
      JSON.stringify(person)
    );
    // window.localStorage.clear();
    // var KeyName = window.localStorage.length;
    // console.log(Object.keys(localStorage));
    // console.log(window.localStorage);
  }
}
