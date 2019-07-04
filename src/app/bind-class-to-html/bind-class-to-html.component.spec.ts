import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindClassToHTMLComponent } from './bind-class-to-html.component';

describe('BindClassToHTMLComponent', () => {
  let component: BindClassToHTMLComponent;
  let fixture: ComponentFixture<BindClassToHTMLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindClassToHTMLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindClassToHTMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
