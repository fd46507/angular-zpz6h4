import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../add-person/person.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  name: string = '';
  li_id: number = 0;
  components: Array<string> = [];
  personService: PersonService = new PersonService();

  constructor(protected router: Router) {}

  ngOnInit() {
    this.addPeopleFromLocalStorage();
  }

  addPeopleFromLocalStorage() {
    let people = this.personService.getLocalStorage();
    let ol = document.getElementById('lista');
    let li = document.createElement('li');
    for (let i = 0; i < people.length; i++) {
      li.innerHTML = this.components[this.li_id] + ' ';
    }
  }

  addPerson() {
    this.components.push('cyrk');
    let ul = document.getElementById('lista');
    let li = document.createElement('li');
    li.innerHTML = this.components[this.li_id] + ' ';
    let a = document.createElement('a');
    a.innerHTML = 'usuń';
    a.setAttribute('href', '#');
    a.addEventListener('click', this.deleteComponent.bind(null, ul, li));
    li.appendChild(a);
    ul.appendChild(li);
    this.li_id++;
    this.name = '';
  }

  deleteComponent(ul, li) {
    ul.removeChild(li);
  }
}
