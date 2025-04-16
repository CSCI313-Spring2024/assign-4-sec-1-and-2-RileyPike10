import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [];
  private nextId = 1;

  private contactsSubject = new BehaviorSubject<Contact[]>(this.contacts);
  contacts$ = this.contactsSubject.asObservable();

  getContacts(): Contact[]{
    return this.contacts;
  }

  addContact(contact: Contact){
    contact.id = this.nextId++;
    this.contacts.push(contact);
  }

  deleteContact(id: number){
    this.contacts = this.contacts.filter(c => c.id !== id);
  }
  constructor() { }
}
