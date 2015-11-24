import {Component, ViewEncapsulation, Attribute} from 'angular2/angular2';

@Component({
  templateUrl: './components/form/form.html',
  styles: [':host {display: block;}'],
  styleUrls: ['css/bootstrap.min.css', 'components/form/form.css'],
  encapsulation: ViewEncapsulation.Native,
  selector: 'y-form',
  properties: ['title', 'fields']
})
export class FormCmp {
  fields: string[] = [];
  title: string;

  public parseFields(fieldGroup: string): any[] {
    let parsedFields: any[] = [];

    fieldGroup.split('_').map((field: string) => {
      let name: string;
      let type: string;
      let widths: string;
      let labelWidth: string;
      let inputWidth: string;
      [name, type, widths] = field.split(':');
      [labelWidth, inputWidth] = nn(widths).split('/');
      parsedFields.push({
        required: nn(name).includes('*'),
        name: nn(name).trim().replace('*', ''),
        type: nn(type).trim(),
        labelWidth: nn(labelWidth).trim().length < 1 ? '2' : nn(labelWidth).trim().replace('?', 'undef'),
        inputWidth: nn(inputWidth).trim().length < 1 ? '3' : nn(inputWidth).trim().replace('?', 'undef')
      });
    });

    return parsedFields;
  }

  public parseFieldGroups(fields: string): any[] {
    return fields.split(',');
  }


}

function nn(nullableString: string): string {
  return nullableString == null ? '' : nullableString;
}
