import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';

NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    WeatherSearchComponent,
    FormsModule // Add FormsModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

