import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpDialogComponent } from './sp-dialog.component';

describe('SpDialogComponent', () => {
  let component: SpDialogComponent;
  let fixture: ComponentFixture<SpDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpDialogComponent]
    });
    fixture = TestBed.createComponent(SpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
