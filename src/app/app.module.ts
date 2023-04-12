import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminAuthComponent } from './authentications/admin-auth/admin-auth.component';
import { AdminComponent } from './module/components/admin/admin.component';
import { ProductsComponent } from './module/components/products/products.component';
import { HomeComponent } from './module/components/home/home.component';
import { AboutUsComponent } from './module/components/about-us/about-us.component';
import { ContactUsComponent } from './module/components/contact-us/contact-us.component';
import { HeaderComponent } from './module/components/header/header.component';
import { FooterComponent } from './module/components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from './authentications/not-found/not-found.component';
import { SidebarComponent } from './module/components/sidebar/sidebar.component';
import { DashboardComponent } from './module/components/dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SubcategoryComponent } from './module/components/subcategory/subcategory.component';
// import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    AdminAuthComponent,
    AdminComponent,
    ProductsComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    SidebarComponent,
    DashboardComponent,
    SubcategoryComponent,
    // ToastrModule

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
