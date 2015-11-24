import {Component, ViewEncapsulation} from 'angular2/angular2';

@Component({
  templateUrl: './components/frame/frame.html',
  styles: [':host {display: block;}'],
  styleUrls: ['css/bootstrap.min.css', 'components/frame/frame.css'],
  selector: 'y-frame',
  encapsulation: ViewEncapsulation.Native
})
export class FrameCmp {}
