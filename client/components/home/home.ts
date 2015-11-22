import {Component, ViewEncapsulation} from 'angular2/angular2';
import {XLarge} from '../../directives/XLarge';

@Component({
  directives: [XLarge],
  selector: 'home',
  encapsulation: ViewEncapsulation.Native,
  templateUrl: './components/home/home.html',
  styleUrls: ['./components/home/home.css']
})
export class HomeCmp {}
