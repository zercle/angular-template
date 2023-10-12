import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsInHeaderComponent } from './tabs-in-header.component';

describe('LayoutWithTabsInHeaderComponent', () => {
  let component: TabsInHeaderComponent;
  let fixture: ComponentFixture<TabsInHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [TabsInHeaderComponent]
})
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsInHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
