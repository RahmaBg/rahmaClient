import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { CategoryProductService } from '../services/category-product.service';
import { MessengerService } from '../services/messenger.service';
import { PanierService } from '../services/panier.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  addProduct:any;
  productsCategory: any;
  category: string="";
  id: any;
  produits:any;
  image:any;
  constructor(private fb:FormBuilder,  private msg: MessengerService,
    private cartService: PanierService,private routes:Router, private productService:ProductService, private productCategoryService:CategoryProductService,  private url:ActivatedRoute) { 
    this.addProduct=fb.group(
      {
        _id : ['',Validators.required],
        nomProd:['',Validators.required],
        description:['',Validators.required],
        quantiteProd:['',Validators.required],
        productCategoryId:['',Validators.required],
        prix:['',Validators.required],
        image:['',Validators.required],
      }
    )
  }
  loadImage(){
    this.id=this.url.snapshot.params['id'];
    console.log(this.id);
    this.productService.singleProduct(this.id).subscribe(data=>{
      //this.addProduct.patchValue(data);
      this.produits=data;
      this.image= this.produits.image

    });
  }
  ngOnInit(): void {
    this.id=this.url.snapshot.params['id'];
    console.log(this.id)
    this.productService.singleProduct(this.id).subscribe(data=>{
      this.addProduct.patchValue(data);
    });
    this.loadImage();
   }

  loadProductCategory(){
    this.productCategoryService.listProductCategory().subscribe((data:any)=>{
      console.log(data);
      this.productsCategory=data;
    });
  }
  onSubmit(){
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>"+this.category);
    console.log(this.addProduct.value);
    //this.id=this.url.snapshot.params['id'];
    this.productService.updateProduct(this.id,this.addProduct.value).subscribe((data:any)=>{
      console.log(data);
      this.routes.navigate(["/product"])
    });

  }

}
