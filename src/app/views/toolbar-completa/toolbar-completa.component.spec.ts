import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarCompletaComponent } from './toolbar-completa.component';

describe('ToolbarCompletaComponent', () => {
  let component: ToolbarCompletaComponent;
  let fixture: ComponentFixture<ToolbarCompletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarCompletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarCompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
