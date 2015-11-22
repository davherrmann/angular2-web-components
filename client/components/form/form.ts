import {Component, ViewEncapsulation, Attribute} from 'angular2/angular2';

@Component({
  templateUrl: './components/form/form.html',
  encapsulation: ViewEncapsulation.Native,
  selector: 'y-form'
})
export class FormCmp {
  fields: any[] = [];

  constructor(@Attribute('fields') fields: string) {
    fields.split(',').map((field: string) => {
      let name: string;
      let type: string;
      [name, type] = field.split(':');
      this.fields.push({
        name: name.trim(),
        type: type.trim()
      });
    });
  }
}
