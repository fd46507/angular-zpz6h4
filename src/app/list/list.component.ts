import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../add-person/person.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  personService: PersonService = new PersonService();

  constructor(protected router: Router) {}

  ngOnInit() {
    this.addPeopleFromLocalStorage();
  }

  addPeopleFromLocalStorage() {
    let people = this.personService.getLocalStorage();
    if (people.length == 0) {
      let info = document.getElementById('info');
      info.innerHTML = 'brak elementów do wyświetlenia';
    }
    let ol = document.getElementById('lista');
    for (let i = 0; i < people.length; i++) {
      let a2 = document.createElement('a');
      a2.setAttribute('href', '#');
      a2.addEventListener(
        'click',
        this.deletePeopleFromLocalStorage.bind(
          null,
          people[i].id,
          this.personService
        )
      );
      a2.innerHTML = 'usuń';

      let a1 = document.createElement('a');
      a1.setAttribute('href', `/details/${people[i].id}`);
      a1.innerHTML = people[i].firstName + ' ' + people[i].familyName;

      let li = document.createElement('li');
      var documentFragment = document.createDocumentFragment();
      var label = document.createElement('label');
      label.innerHTML = ' [';
      var label2 = document.createElement('label');
      label2.innerHTML = ']';
      documentFragment.appendChild(a1);
      documentFragment.appendChild(label);
      documentFragment.appendChild(a2);
      documentFragment.appendChild(label2);
      li.appendChild(documentFragment);
      ol.appendChild(li);
    }
  }

  deletePeopleFromLocalStorage(index: number, personService: PersonService) {
    personService.deleteFromLocalStorage(index);
  }
}
