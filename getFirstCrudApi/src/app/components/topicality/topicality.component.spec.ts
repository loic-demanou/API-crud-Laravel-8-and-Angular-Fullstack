import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicalityComponent } from './topicality.component';

describe('TopicalityComponent', () => {
  let component: TopicalityComponent;
  let fixture: ComponentFixture<TopicalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
