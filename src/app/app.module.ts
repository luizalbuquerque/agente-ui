import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button'; // Importe o módulo MatButtonModule
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsolidatedDataComponent } from './consolidated-data/consolidated-data.component';
import { UploadComponent } from './upload/upload.component';
import { MatCardModule } from '@angular/material/card'; // Importe o módulo MatCardModule


@NgModule({
  declarations: [
    AppComponent,
    ConsolidatedDataComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressBarModule,
    MatButtonModule, // Adicione o MatButtonModule aqui
    MatToolbarModule, // Adicione o MatToolbarModule aqui
    MatCardModule, // Adicione o MatCardModule aqui
    AppRoutingModule,
    FormsModule // Adicione o FormsModule aqui

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
