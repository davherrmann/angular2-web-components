import {COMMON_DIRECTIVES, COMMON_PIPES, Component, Validators,
  ControlGroup, Control, Observable, ViewEncapsulation} from 'angular2/angular2';

import {validateEmail} from '../../core/web_util';
import {Contact} from '../../core/dto';
import {ContactService} from './contact_service';
import {Autofocus} from '../../directives/Autofocus';
import {CustomOrderByPipe} from '../../pipes/CustomOrderByPipe';

@Component({
  selector: 'contact',
  templateUrl: './components/contact/contact.html',
  encapsulation: ViewEncapsulation.Native,
  directives: [COMMON_DIRECTIVES, Autofocus],
  pipes: [COMMON_PIPES, CustomOrderByPipe],
  viewProviders: [ContactService]
})
export class ContactCmp {

  form: ControlGroup;
  contacts: Contact[];

  constructor(private contactService: ContactService) {

    this.form = new ControlGroup({
      _id: new Control(null),
      name: new Control(null, Validators.required),
      email: new Control(null, validateEmail)
    });

    this.find();
  }

  saveOne() {

    const data: Contact = this.form.value;

    let obs: Observable<Contact>;

    if (data._id) {
      obs = this.contactService.updateOne(data);
    } else {
      obs = this.contactService.createOne(data);
    }

    obs.subscribe((res: Contact) => {
      this.resetForm();
      this.find();
    });
  }

  removeOne(event: Event, data: Contact) {

    event.stopPropagation();

    this.contactService.removeOneById(data._id)
      .subscribe((res: Contact) => {
        this.resetForm();
        this.find();
      });
  }

  selectOne(data: Contact) {
    this.contactService.findOneById(data._id)
      .subscribe((res: Contact) => {
        this.resetForm(res);
      });
  }

  find() {
    this.contactService.find()
      .subscribe((res: Contact[]) => {
        this.contacts = res;
      });
  }

  resetForm(data: Contact = {}) {
    for (let prop in this.form.controls) {
      (<Control>this.form.controls[prop]).updateValue(data[prop]);
    }
  }

}
