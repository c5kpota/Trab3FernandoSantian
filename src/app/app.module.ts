import { BrowserModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoute } from './app.router';
import { CommonModule } from '@angular/common';
import { Menu } from './componentes/menu/menu';
import { AlterarSenha } from './pages/alterar-senha/alterarSenha';
import { CadastrarCliente } from './pages/cadastrar-cliente/cadastrarCliente';
import { CadastrarUsuario } from './pages/cadastrar-usuario/cadastrarUsuario';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatNativeDateModule, MatDatepickerModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    Menu,
    AlterarSenha,
    CadastrarCliente,
    CadastrarUsuario
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    FormsModule,MatDatepickerModule, MatNativeDateModule,
    ReactiveFormsModule,
    AppRoute,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
