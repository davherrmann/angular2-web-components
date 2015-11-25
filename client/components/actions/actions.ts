import {Component, ViewEncapsulation, Attribute, Output, Input, EventEmitter} from 'angular2/angular2';
import {ObservableWrapper} from 'angular2/src/facade/async';

@Component({
  templateUrl: './components/actions/actions.html',
  styles: [':host {display: block;}'],
  styleUrls: ['css/bootstrap.min.css', 'components/actions/actions.css'],
  selector: 'y-actions',
  encapsulation: ViewEncapsulation.Native
})
export class ActionsCmp {
  @Input() actions: string;
  @Output() test: EventEmitter<string> = new EventEmitter<string>();

  public subscribe(onAction: (action: string) => void): void {
    onAction('test');
    ObservableWrapper.subscribe(this.test, onAction);
  }

  public raiseAction(action: string) {
    this.test.next(action);
  }

  public parseActions(actions: string): any[] {
    let parsedActions: any[] = [];

    actions.split(',').map((action: string) => {
      let name: string;
      let type: string;
      [name, type] = action.split(':');
      parsedActions.push({
        option: name.trim().startsWith('*') ? 'btn-primary' : 'btn-default',
        name: name.trim().replace('*', ''),
        type: type.trim()
      });
    });

    return parsedActions;
  }
}
