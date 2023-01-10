import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { DumbComponent } from '../core/dumb-component';
import { User } from '../core/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent extends DumbComponent{
  @Input()
  user!: User;

  @Output()
  activeChanged = new EventEmitter();

  constructor() {
    super();
  }

  emitActive(): void {
    this.activeChanged.emit();
  }
}
