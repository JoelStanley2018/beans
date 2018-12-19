import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PetService } from './pet.service';

import { AppComponent } from './app.component';
import { SingleComponent } from './single/single.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { AppRoutingModule } from './app-routing.module';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleComponent,
    ListComponent,
    NewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
