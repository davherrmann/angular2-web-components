import {Component, ViewEncapsulation, Attribute, Input, FormBuilder, ControlGroup, Control, Validators, Validator} from 'angular2/angular2';
import {FORM_DIRECTIVES, ViewChild, NgForm, ElementRef} from 'angular2/angular2';

@Component({
  templateUrl: './components/form/form.html',
  styles: [':host {display: block;}'],
  styleUrls: ['css/bootstrap.min.css', 'components/form/form.css'],
  encapsulation: ViewEncapsulation.Native,
  inputs: ['fields', 'title'],
  directives: [FORM_DIRECTIVES],
  selector: 'y-form'
})
export class FormCmp {
  _fields: string;
  _title: string;

  parsedFieldGroups: any[];
  formBuilder: FormBuilder;
  formModel: ControlGroup;

  showOverlay: boolean = false;

  @ViewChild('submitButton') form: ElementRef;

  constructor(fb: FormBuilder, @Attribute('fields') fields: string) {
    this.formBuilder = fb;
    this.formModel = this.formBuilder.group({});
  }

  public set fields(value: string) {
    if (value == null) {
      return;
    }
    this._fields = value;
    this.formModel = this.formBuilder.group({});
    this.parsedFieldGroups = this.parseFieldGroups(value);
  }

  public get fields(): string {
    return this._fields;
  }

  public submit() {
    this.form.nativeElement.click();
  }

  public parseFields(fieldGroup: string): any[] {
    let parsedFields: any[] = [];

    fieldGroup.split('_').map((rawField: string) => {
      let name: string;
      let type: string;
      let widths: string;
      let labelWidth: string;
      let inputWidth: string;
      let rawValidators: string;
      let min = '';
      let max = '';
      [name, type, widths, rawValidators] = rawField.split(':');
      [labelWidth, inputWidth] = nn(widths).split('/');

      if (rawValidators != null) {
        rawValidators.split('/').map((rawValidator: string) => {
          if (rawValidator.trim().startsWith('min')) {
            min = rawValidator.replace('min(', '').replace(')', '').trim();
          }
          if (rawValidator.trim().startsWith('max')) {
            max = rawValidator.replace('max(', '').replace(')', '').trim();
          }
        });
      }

      let field: any = {
        required: nn(name).includes('*'),
        min: min,
        max: max,
        name: nn(name).trim().replace('*', ''),
        type: nn(type).trim(),
        labelWidth: nn(labelWidth).trim().length < 1 ? '2' : nn(labelWidth).trim().replace('?', 'undef'),
        inputWidth: nn(inputWidth).trim().length < 1 ? '3' : nn(inputWidth).trim().replace('?', 'undef')
      };
      parsedFields.push(field);

      let control: Control = new Control(null);
      this.formModel.addControl(field.name, control);
    });

    return parsedFields;
  }

  public parseFieldGroups(fields: string): any[] {
    let fieldGroups: any[] = [];

    fields.split(',').map((fields: string) => {
      fieldGroups.push(this.parseFields(fields));
    });

    return fieldGroups;
  }

  public onSubmit(event: Event): void {
    console.log(this.formModel);
    this.showOverlay = true;
    event.preventDefault();
  }

  public hideOverlay(): void {
    this.showOverlay = false;
  }

  public formValues(): any[] {
    let values: any[] = [];

    let valueObject: Object = this.formModel.value;
    for (let key in valueObject) {
      if (valueObject.hasOwnProperty(key)) {
        values.push({key: key, value: valueObject[key]});
      }
    }

    return values;
  }
}

function nn(nullableString: string): string {
  return nullableString == null ? '' : nullableString;
}
