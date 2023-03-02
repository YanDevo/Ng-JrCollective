import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { NameComponent } from './FormModelExercise/components/name/name.component';
import { CityComponent } from './FormModelExercise/components/city/city.component';
import { FormComponent } from './FormModelExercise/container/form.component';
import { ShippingAddressComponent } from './FormModelExercise/components/shipping-address/shipping-address.component';
import { FavouriteAristotleQuoteComponent } from './FormModelExercise/components/favourite-aristotle-quote/favourite-aristotle-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    NameComponent,
    CityComponent,
    FormComponent,
    ShippingAddressComponent,
    FavouriteAristotleQuoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
