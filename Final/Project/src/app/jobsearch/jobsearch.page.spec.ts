import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobsearchPage } from './jobsearch.page';

describe('JobsearchPage', () => {
  let component: JobsearchPage;
  let fixture: ComponentFixture<JobsearchPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JobsearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
