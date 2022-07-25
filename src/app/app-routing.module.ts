import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeComponent } from './commande/commande.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { PanierComponent } from './panier/panier.component';
import { CategoryViewProductComponent } from './category-view-product/category-view-product.component';
import { CreateCategoryProductComponent } from './create-category-product/create-category-product.component';
import { EditCategoryProductComponent } from './edit-category-product/edit-category-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListCategoryProductComponent } from './list-category-product/list-category-product.component';

import { AddProductComponent } from './add-product/add-product.component';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductViewComponent } from './product-view/product-view.component';
const routes: Routes = [
  {path: 'panier', component: PanierComponent},
  {path: 'commande', component: CommandeComponent},
  {path: 'livraison', component: LivraisonComponent},
  {    path :'product', component:ProductComponent  },
  {    path :'product-view/:id', component:ProductViewComponent  },
  {    path :'newProduct', component:AddProductComponent  },
  {    path :'editProduct/:id', component:EditProductComponent  },
  {    path :'newCategory', component:CreateCategoryProductComponent  },
  {    path :'listCategory', component:ListCategoryProductComponent  },
  {    path :'editCategory/:id', component:EditCategoryProductComponent  },
  {    path :'category-view/:id', component:CategoryViewProductComponent  },
  {    path :'#', component:AppComponent  }


];

@NgModule({
  
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
