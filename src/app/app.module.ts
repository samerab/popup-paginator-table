import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDialogModule, MatToolbarModule, MatIconModule,
         MatCardModule, MatDatepickerModule,MatNativeDateModule,MatTooltipModule,
         MatTabsModule, MatTableModule, MatSortModule, MatPaginatorModule } from '@angular/material';
import {MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule} from '@angular/material';


import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FileTreeComponentComponent } from './file-tree-component/file-tree-component.component';
import { FileNameDialogComponentComponent } from './file-name-dialog-component/file-name-dialog-component.component';
import { PagerService } from './pager.service';
import { PagerComponent } from './pager/pager.component';
import { WeatherService } from './weather.service';
import { FormComponent } from './forms/form/form.component';



@NgModule({
  declarations: [
    AppComponent,
    FileTreeComponentComponent,
    FileNameDialogComponentComponent,
    PagerComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  entryComponents: [FileNameDialogComponentComponent],
  providers: [PagerService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
