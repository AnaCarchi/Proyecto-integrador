import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';  // Importa el módulo de usuarios
import { ReactiveFormsModule } from '@angular/forms'; // Para trabajar con formularios reactivos
import { HttpClientModule } from '@angular/common/http'; // Para manejar peticiones HTTP

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,  // Necesario para formularios reactivos
    HttpClientModule,  // Necesario para HTTP
    UsersModule  // Módulo de usuarios
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

