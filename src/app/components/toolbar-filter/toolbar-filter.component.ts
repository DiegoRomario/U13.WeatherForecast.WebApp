import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'u13-toolbar-filter',
  templateUrl: './toolbar-filter.component.html',
  styleUrls: ['./toolbar-filter.component.scss']
})
export class ToolbarFilterComponent {
  value: string = '';
  @Input() label: string;
  @Input() placeHolder: string;
  @Output() public filterEvent = new EventEmitter<string>();
  search() {
    this.filterEvent.emit(this.value);
  }

}
