import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdetsComponent } from './projectdets.component';

describe('ProjectdetsComponent', () => {
  let component: ProjectdetsComponent;
  let fixture: ComponentFixture<ProjectdetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectdetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectdetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
