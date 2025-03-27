import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importando o AppRoutingModule
import { AppComponent } from './app.component'; // Importando o AppComponent

// Importando módulos do Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';  // Para a barra de ferramentas
import { MatButtonModule } from '@angular/material/button';    // Para botões, caso necessário

// Importando o módulo ClienteModule onde o CadastrarComponent está localizado
import { ClienteModule } from './cliente/cliente.module';  // Certifique-se de que o caminho está correto

@NgModule({
  declarations: [
    AppComponent  // Declarando o componente principal da aplicação
  ],
  imports: [
    BrowserModule,          // Importando o módulo do navegador
    AppRoutingModule,       // Importando o módulo de rotas
    MatToolbarModule,       // Incluindo o MatToolbarModule do Angular Material
    MatButtonModule,        // Incluindo o MatButtonModule do Angular Material (se necessário)
    ClienteModule           // Importando o módulo Cliente, que contém o CadastrarComponent
  ],
  providers: [],           // Serviços globais, se necessário
  bootstrap: [AppComponent] // Definindo o componente inicial da aplicação
})
export class AppModule { }

