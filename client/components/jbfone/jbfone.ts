import {Component, Attribute, ViewEncapsulation, Provider} from 'angular2/angular2';

import {ActionsCmp} from '../actions/actions';
import {FormCmp} from '../form/form';
import {FrameCmp} from '../frame/frame';

@Component({
  templateUrl: 'components/jbfone/jbfone.html',
  styles: [':host {display: block;}'],
  selector: 'jbfone',
  directives: [ActionsCmp, FormCmp, FrameCmp],
  properties: ['title', 'fields']
})
export class JBFOne {}
