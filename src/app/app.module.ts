import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import * as reducers from '@store/reducers/index';
import * as effects from '@store/effects/index';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPanelContainerComponent } from './features/layout/main-panel-container/main-panel-container.component';
import { DetailPanelContainerComponent } from './features/layout/detail-panel-container/detail-panel-container.component';
import { QuotesTableComponent } from './features/quotes/quotes-table/quotes-table.component';
import { QuotesDetailComponent } from './features/quotes/quotes-detail/quotes-detail.component';
import { LeftPanelContainerComponent } from './features/layout/left-panel-container/left-panel-container.component';
import { LeftPanelControlsComponent } from './features/left-panel/left-panel-controls/left-panel-controls.component';
import { LeftPanelMonitorComponent } from './features/left-panel/left-panel-monitor/left-panel-monitor.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailPanelContainerComponent,
    MainPanelContainerComponent,
    QuotesTableComponent,
    QuotesDetailComponent,
    LeftPanelContainerComponent,
    LeftPanelControlsComponent,
    LeftPanelMonitorComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    HttpClientModule,
    PanelModule,
    StoreModule.forRoot(reducers.applicationReducers),
    EffectsModule.forRoot([...effects.effects]),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
