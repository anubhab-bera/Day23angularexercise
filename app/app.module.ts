import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';
import { BindingComponent } from './binding/binding.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PipeexComponent } from './pipeex/pipeex.component';
import { CustompipePipe } from './custompipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    BindingComponent,
    HomeComponent,
    NavComponent,
    PipeexComponent,
    CustompipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
