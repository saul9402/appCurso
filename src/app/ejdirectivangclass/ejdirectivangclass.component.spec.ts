import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjdirectivangclassComponent } from './ejdirectivangclass.component';

describe('EjdirectivangclassComponent', () => {
  let component: EjdirectivangclassComponent;
  let fixture: ComponentFixture<EjdirectivangclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjdirectivangclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjdirectivangclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
