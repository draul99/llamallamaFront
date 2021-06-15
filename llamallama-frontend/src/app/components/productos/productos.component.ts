import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Producto } from 'src/app/models/producto.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public productForm: FormGroup;
  public productito = new Producto;

  products: Producto[];

  constructor(private fb: FormBuilder, public productService: ProductsService) { }

  ngOnInit(): void {
    this.initForm();
    this.showProducts();
  }

  showProducts(){
    this.productService.getProducts().subscribe((result:any)=>{
      console.log(result.data);
      this.products = result.data;
    });
  }

  initForm(){
    this.productForm = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      precio: ['',Validators.required],
      stock: ['', Validators.required],
      categoriaid: ['', Validators.required]
    })
  }

  setProducto(){
    this.productito.id=this.productForm.get('id')?.value
    this.productito.nombre=this.productForm.get('nombre')?.value
    this.productito.precio=this.productForm.get('precio')?.value
    this.productito.stock=this.productForm.get('stock')?.value
    this.productito.categoriaid=this.productForm.get('categoriaid')?.value
  }

  registrarProducto(){
    this.setProducto();
    //console.log(this.productito);
    this.productService.createProducto(this.productito).subscribe((result:any)=>{
      console.log(result.data)
    });
    this.showProducts();
  }

}
