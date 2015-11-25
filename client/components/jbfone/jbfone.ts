import {Component, Attribute, ViewEncapsulation, Provider, Input} from 'angular2/angular2';

import {ActionsCmp} from '../actions/actions';
import {FormCmp} from '../form/form';
import {FrameCmp} from '../frame/frame';

@Component({
  templateUrl: 'components/jbfone/jbfone.html',
  selector: 'jbfone',
  directives: [ActionsCmp, FormCmp, FrameCmp]
})
export class JBFOne {
  @Input() title: string;
  @Input() fields: string;
}
