import {Component, Attribute, ViewEncapsulation, Provider, Input} from 'angular2/angular2';

import {ALL_COMPONENTS} from '../components';

@Component({
  templateUrl: 'components/jbfone/jbfone.html',
  selector: 'jbfone',
  directives: [ALL_COMPONENTS]
})
export class JBFOne {
  @Input() title: string;
  @Input() fields: string;
}
