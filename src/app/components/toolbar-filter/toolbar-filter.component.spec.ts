import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarFilterComponent } from './toolbar-filter.component';

const ANY_VALUE = 'any';
describe(ToolbarFilterComponent.name, () => {
  let component: ToolbarFilterComponent;
  let fixture: ComponentFixture<ToolbarFilterComponent>;
  let searchMethodName = ToolbarFilterComponent.prototype.search.name;
  let spyFilterEvent: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolbarFilterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    spyFilterEvent = spyOn(component.filterEvent, 'emit')
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Given that ${searchMethodName} method is called, An event should be emitted sending 'value'`, () => {
    component.value = ANY_VALUE
    component.search();
    expect(spyFilterEvent).toHaveBeenCalledOnceWith(ANY_VALUE);
  });
});
