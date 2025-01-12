import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SmallCardsComponent } from './components/small-cards/small-cards.component';
import { ApresentBuscaComponent } from './components/apresent-busca/apresent-busca.component';
import { BigCardsComponent } from './components/big-cards/big-cards.component';
import { HeaderSiteComponent } from './components/header-site/header-site.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AvaliacaoComponent } from './components/avaliacao/avaliacao.component';
import { LocationPageComponent } from './components/pages/location-page/location-page.component';
import { BigPicCardComponent } from './components/location-page/big-pic-card/big-pic-card.component';
import { SmallPicCardComponent } from './components/location-page/small-pic-card/small-pic-card.component';
import { AppresenLocalComponent } from './components/location-page/appresen-local/appresen-local.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SmallCardsComponent,
    ApresentBuscaComponent,
    BigCardsComponent,
    HeaderSiteComponent,
    AvaliacaoComponent,
    LocationPageComponent,
    BigPicCardComponent,
    SmallPicCardComponent,
    AppresenLocalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
