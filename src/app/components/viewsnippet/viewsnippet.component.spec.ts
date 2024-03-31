import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsnippetComponent } from './viewsnippet.component';

describe('ViewsnippetComponent', () => {
  let component: ViewsnippetComponent;
  let fixture: ComponentFixture<ViewsnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewsnippetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewsnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
