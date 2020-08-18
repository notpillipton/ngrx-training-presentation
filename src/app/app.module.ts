import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPanelContainerComponent } from './features/layout/main-panel-container/main-panel-container.component';
import { DetailPanelContainerComponent } from './features/layout/detail-panel-container/detail-panel-container.component';
import { QuotesTableComponent } from './features/quotes/quotes-table/quotes-table.component';
import { QuotesDetailComponent } from './features/quotes/quotes-detail/quotes-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPanelContainerComponent,
    DetailPanelContainerComponent,
    QuotesTableComponent,
    QuotesDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
