import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaViewerComponent } from './idea-viewer.component';

describe('IdeaViewerComponent', () => {
  let component: IdeaViewerComponent;
  let fixture: ComponentFixture<IdeaViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
