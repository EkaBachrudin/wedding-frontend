import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from 'src/service/product.service';

import { HttpClientModule } from '@angular/common/http';
import { WeddingModule } from './wedding/wedding.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, WeddingModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
