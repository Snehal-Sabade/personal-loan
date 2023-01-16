import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ApplyPlComponent } from './apply-pl/apply-pl.component';
import { MatStepperModule } from '@angular/material/stepper';
import { CustomerDetailsComponent } from './apply-pl/customer-details/customer-details.component';
import { MatInputModule } from '@angular/material/input';
import { ExistingCustomerComponent } from './apply-pl/existing-customer/existing-customer.component';
import { TrackMyApplicationComponent } from './apply-pl/track-my-application/track-my-application.component';
import { MatSelectModule } from '@angular/material/select';

const materialModules = [
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatDividerModule,
  MatGridListModule,
  MatFormFieldModule,
  MatSliderModule,
  MatButtonModule,
  MatStepperModule,
  MatInputModule,
  MatSelectModule

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ApplyPlComponent,
    CustomerDetailsComponent,
    ExistingCustomerComponent,
    TrackMyApplicationComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialModules

  ],
  providers: [],
  bootstrap: [AppComponent],

  exports: [...materialModules],
})
export class AppModule { }
