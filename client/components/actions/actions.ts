import {Component, ViewEncapsulation, Attribute} from 'angular2/angular2';

@Component({
  templateUrl: './components/actions/actions.html',
  selector: 'y-actions',
  encapsulation: ViewEncapsulation.Native
})
export class ActionsCmp {
  actions: string[];

  constructor(@Attribute("actions") actions: string) {
    this.actions = actions.split(',').map((action: string) => action.trim());
  }
}
