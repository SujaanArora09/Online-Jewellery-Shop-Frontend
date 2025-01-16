import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ProductService } from '../../../state/Product/product.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule
  ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  thirdLevelOptions: any[] = []

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {
    this.productForm = this.formBuilder.group({
      imageUrl: '',
      brand: '',
      title: '',
      material: '',
      quantity: null,
      price: null,
      discountedPrice: null,
      discountPersent: null,
      topLavelCategory: '',
      secondLavelCategory: '',
      thirdLavelCategory: '',
      description: '',
      size: '',
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const formData = this.productForm.value;
      formData.size = [{ size: formData.size, quantity: formData.quantity }];

      this.productService.createProduct(formData);
      console.log(formData);
    }
  }

  menJewelleryTypes = [
    { value: 'chains', label: 'Chains' },
    { value: 'bracelet', label: 'Bracelet' },
    { value: 'ring', label: 'Ring' },
    { value: 'stud', label: 'Stud'},
    { value: 'kada', label: 'Kada'}
  ];

  menBrands = [
    { value: 'tanishq', label: 'Tanishq' },
    { value: 'giva', label: 'Giva' },
    { value: 'Senco', label: 'Senco' },
    { value: 'Caratlane', label: 'Carat Lane' },
  ];

  womenJewelleryTypes = [
    { value: 'earrings', label: 'Earrings' },
    { value: 'bangles', label: 'Bangles' },
    { value: 'necklace', label: 'Necklace' },
    { value: 'nosepin', label: 'Nose Pin' },
    { value: 'bracelet', label: 'Bracelet' },
    { value: 'ring', label: 'Ring' },
    { value: 'pendant', label: 'Pendant' },
  ];

  womenBrands = [
    { value: 'tanishq', label: 'Tanishq' },
    { value: 'giva', label: 'Giva' },
    { value: 'Senco', label: 'Senco' },
    { value: 'Caratlane', label: 'Carat Lane' },
  ];

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      topLevelCategory: [''],
      secondLevelCategory: [''],
      thirdLevelCategory: ['']
    });
  }

  onTopLevelChange(event: any) {
    this.updateThirdLevelOptions();
  }

  onSecondLevelChange(event: any) {
    this.updateThirdLevelOptions();
  }

  updateThirdLevelOptions() {
    const topLevel = this.productForm.get('topLevelCategory')?.value;
    const secondLevel = this.productForm.get('secondLevelCategory')?.value;

    // Determine which third-level options to display based on topLevel and secondLevel
    if (topLevel === 'men') {
      if (secondLevel === 'jewellerytype') {
        this.thirdLevelOptions = this.menJewelleryTypes;
      } else if (secondLevel === 'brands') {
        this.thirdLevelOptions = this.menBrands;
      }
    } else if (topLevel === 'women') {
      if (secondLevel === 'jewellerytype') {
        this.thirdLevelOptions = this.womenJewelleryTypes;
      } else if (secondLevel === 'brands') {
        this.thirdLevelOptions = this.womenBrands;
      }
    } else {
      this.thirdLevelOptions = [];
    }
  }
}

