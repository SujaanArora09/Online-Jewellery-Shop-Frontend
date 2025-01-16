import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
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
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  productForm: FormGroup;
  thirdLevelCategories: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {
    this.productForm = this.formBuilder.group({
      imageUrl: '',
      brand: '',
      title: '',
      color: '',
      quantity: null,
      price: null,
      discountedPrice: null,
      discountPersent: null,
      topLavelCategory: ['', Validators.required],
      secondLavelCategory: ['', Validators.required],
      thirdLavelCategory: ['', Validators.required],
      description: '',
      size: '',
    });

    // Watch for changes in the top and second-level category and update the third-level categories
    this.productForm.get('topLavelCategory')?.valueChanges.subscribe((topLevel) => {
      this.updateThirdLevelCategories(topLevel, this.productForm.get('secondLavelCategory')?.value);
    });

    this.productForm.get('secondLavelCategory')?.valueChanges.subscribe((secondLevel) => {
      this.updateThirdLevelCategories(this.productForm.get('topLavelCategory')?.value, secondLevel);
    });
  }

  // Update third level categories based on the selected top and second level categories
  updateThirdLevelCategories(topLevel: string | null, secondLevel: string | null): void {
    if (topLevel === 'men') {
      if (secondLevel === 'Jewellery') {
        this.thirdLevelCategories = ['Chains', 'Bracelet', 'Ring', 'Stud', 'Kada'];
      } else if (secondLevel === 'Brands') {
        this.thirdLevelCategories = ['Tanishq', 'Giva', 'Senco', 'Carat Lane'];
      } else {
        this.thirdLevelCategories = [];
      }
    } else if (topLevel === 'women') {
      if (secondLevel === 'Jewellery') {
        this.thirdLevelCategories = ['Earrings', 'Bangles', 'Necklace', 'Nose Pin', 'Bracelet', 'Ring', 'Pendent'];
      } else if (secondLevel === 'Brands') {
        this.thirdLevelCategories = ['Tanishq', 'Ziva', 'Senco', 'Carat Lane'];
      } else {
        this.thirdLevelCategories = [];
      }
    } else {
      this.thirdLevelCategories = [];
    }
    // Reset third level category if not matching options
    if (!this.thirdLevelCategories.includes(this.productForm.get('thirdLavelCategory')?.value)) {
      this.productForm.get('thirdLavelCategory')?.setValue('');
    }
  }

  // Submit the form
  onSubmit(): void {
    if (this.productForm.valid) {
      const formData = this.productForm.value;
      formData.size = [{ size: formData.size, quantity: formData.quantity }];
      this.productService.createProduct(formData);
      console.log(formData);
    }
  }
}
