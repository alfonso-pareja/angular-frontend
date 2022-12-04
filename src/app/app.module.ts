import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbTabsetModule, NbInputModule, NbButtonModule, NbActionsModule, NbIconModule, NbTreeGridModule, NbToastrService, NbToastrModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ListTrackService } from './services/list-tracks.service';
import { ListTracksComponent } from './list-tracks/list-tracks.component';

import { FinderComponent } from './components/finder/finder.component';
import { TableComponent } from './components/table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { UtilService } from './services/util.service';

@NgModule({
  declarations: [
    AppComponent,
    ListTracksComponent,
    FinderComponent,
    TableComponent,
    AudioPlayerComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbToastrModule.forRoot(),
    NbLayoutModule,
    NbCardModule,
    NbActionsModule,
    NbTreeGridModule,
    NbIconModule,
    NbTabsetModule,
    NbInputModule,
    NbButtonModule,
    NbEvaIconsModule,
    NgbModule
  ],
  providers: [
    ListTrackService,
    NbToastrService,
    UtilService
  ],
  exports: [
    FinderComponent,
    AudioPlayerComponent,
    TableComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
