import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListProgrammeComponent } from './Programme/list-programme/list-programme.component';
import { FooterComponent } from './footer/footer.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { PanierComponent } from './panier/panier.component';
import { CommandeComponent } from './commande/commande.component';
import { FormsModule } from '@angular/forms';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductComponent } from './product/product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CreateCategoryProductComponent } from './create-category-product/create-category-product.component';
import { ListCategoryProductComponent } from './list-category-product/list-category-product.component';
import { EditCategoryProductComponent } from './edit-category-product/edit-category-product.component';
import { CategoryViewProductComponent } from './category-view-product/category-view-product.component';
import { QRCodeModule } from "angular2-qrcode";
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListProgrammeComponent,
    FooterComponent,
    LivraisonComponent,
    PanierComponent,
    CommandeComponent,
    ProductViewComponent,
    ProductComponent,
    AddProductComponent,
    EditProductComponent,
    CreateCategoryProductComponent,
    ListCategoryProductComponent,
    EditCategoryProductComponent,
    CategoryViewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    QRCodeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
