import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  firstName = '';
  lastName = '';
  email = '';
  phone = '';

  constructor(private contactService: ContactService){}

  addContact(){
    const newContact = new Contact(0, this.firstName, this.lastName, this.email, this.phone);
    this.contactService.addContact(newContact);

    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phone = '';
  }

}
