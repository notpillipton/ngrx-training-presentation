import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    PanelModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
