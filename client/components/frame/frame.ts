import {Component, ViewEncapsulation, ContentChild, ContentChildren, Query, QueryList} from 'angular2/angular2';
import {ActionsCmp} from '../actions/actions';
import {FormCmp} from '../form/form';

@Component({
  templateUrl: './components/frame/frame.html',
  styles: [':host {display: block;}'],
  styleUrls: ['css/bootstrap.min.css', 'components/frame/frame.css'],
  selector: 'y-frame',
  directives: [ActionsCmp, FormCmp],
  encapsulation: ViewEncapsulation.Native
})
export class FrameCmp {
  @ContentChild(FormCmp) private form: FormCmp;
  @ContentChildren(ActionsCmp) private actions: QueryList<ActionsCmp>;

  afterContentInit() {
    this.actions.map((action: ActionsCmp) => {
      action.subscribe((value: string) => this.onActionBarAction(value));
    });
  }

  public onActionBarAction(action: string): void {
    if (action.trim() === 'save') {
      this.form.submit();
    }
  }
}
