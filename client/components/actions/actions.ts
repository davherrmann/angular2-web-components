import {Component, ViewEncapsulation, Attribute} from 'angular2/angular2';

@Component({
  templateUrl: './components/actions/actions.html',
  styles: [':host {display: block;}'],
  styleUrls: ['css/bootstrap.min.css', 'components/actions/actions.css'],
  selector: 'y-actions',
  properties: ['actions'],
  encapsulation: ViewEncapsulation.Native
})
export class ActionsCmp {
  actions: string;

  public parseActions(actions: string): any[] {
    let parsedActions: any[] = [];

    actions.split(',').map((action: string) => {
      let name: string;
      let type: string;
      [name, type] = action.split(':');
      parsedActions.push({
        name: name,
        type: type
      });
    });

    return parsedActions;
  }
}
