import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteAristotleQuoteComponent } from './favourite-aristotle-quote.component';

describe('FavouriteAristotleQuoteComponent', () => {
  let component: FavouriteAristotleQuoteComponent;
  let fixture: ComponentFixture<FavouriteAristotleQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteAristotleQuoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouriteAristotleQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
