import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'u13-toolbar-filter',
  templateUrl: './toolbar-filter.component.html',
  styleUrls: ['./toolbar-filter.component.scss']
})
export class ToolbarFilterComponent {
  value: string = '';
  @Output() public filterEvent = new EventEmitter<string>();
  search() {
    this.filterEvent.emit(this.value);
  }

}
