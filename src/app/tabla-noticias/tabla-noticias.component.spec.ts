import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaNoticiasComponent } from './tabla-noticias.component';

describe('TablaNoticiasComponent', () => {
  let component: TablaNoticiasComponent;
  let fixture: ComponentFixture<TablaNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaNoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
