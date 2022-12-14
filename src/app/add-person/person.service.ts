import { Injectable } from '@angular/core';
import { Person } from './person';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor() {}

  saveToLocalStorage(person: Person) {
    person.id = localStorage.length - 1;
    window.localStorage.setItem(
      `${localStorage.length - 1}`,
      JSON.stringify(person)
    );
    // localStorage.clear();
    // console.log(window.localStorage);
  }

  getLocalStorage() {
    let people: Array<Person> = [];
    console.log(window.localStorage);
    for (let i = 0; i < window.localStorage.length - 1; i++) {
      // console.log(JSON.parse(window.localStorage[i]));
      people.push(JSON.parse(window.localStorage[i]));
    }
    console.log(people[0].address['city']);
    return people;
    // JSON.parse()
  }
}
