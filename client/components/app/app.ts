import {Component, ViewEncapsulation} from 'angular2/angular2';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';

import {FrameCmp} from '../frame/frame';
import {FormCmp} from '../form/form';
import {ActionsCmp} from '../actions/actions';
import {JBFOne} from '../jbfone/jbfone';

@Component({
  selector: 'app',
  styles: [':host {display: block;}'],
  styleUrls: ['css/bootstrap.min.css'],
  templateUrl: './components/app/app.html',
  encapsulation: ViewEncapsulation.Native,
  directives: [ROUTER_DIRECTIVES, FrameCmp, FormCmp, ActionsCmp, JBFOne]
})
export class AppCmp {}
