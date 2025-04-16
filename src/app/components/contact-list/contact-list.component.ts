import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { __importDefault } from 'tslib';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-list',
  imports: [NgFor, CommonModule, FormsModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit{
  contacts: Contact[] = [];

  constructor(private contactService: ContactService){}

  ngOnInit() {
    this.contactService.contacts$.subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  deleteContact(id: number){
    this.contactService.deleteContact(id);
    this.contacts = this.contactService.getContacts();
  }

  editingContactId: number | null = null;

  startEditing(contactId: number) {
    this.editingContactId = contactId;
  }

  saveContact(contact: any){
    this.editingContactId = null;
  }
}
