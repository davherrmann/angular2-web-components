import {Component, ViewEncapsulation} from 'angular2/angular2';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';

import {HomeCmp} from '../home/home';
import {ContactCmp} from '../contact/contact';
import {FrameCmp} from '../frame/frame';
import {FormCmp} from '../form/form';
import {ActionsCmp} from '../actions/actions';

@Component({
  selector: 'app',
  styleUrls: ['./components/app/app.css'],
  templateUrl: './components/app/app.html',
  encapsulation: ViewEncapsulation.Native,
  directives: [ROUTER_DIRECTIVES, ContactCmp, FrameCmp, FormCmp, ActionsCmp]
})
@RouteConfig([
  { path: '/', component: HomeCmp, as: 'Home' },
  { path: '/contact', component: ContactCmp, as: 'Contact' }
])
export class AppCmp {}
