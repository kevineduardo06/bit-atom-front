import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTerapiasComponent } from './lista-terapias.component';

describe('ListaTerapiasComponent', () => {
  let component: ListaTerapiasComponent;
  let fixture: ComponentFixture<ListaTerapiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTerapiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTerapiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
