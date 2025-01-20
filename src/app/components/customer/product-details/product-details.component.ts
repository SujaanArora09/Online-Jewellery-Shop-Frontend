import { Component, OnInit } from '@angular/core';
import { getCartRequest } from '../../../state/Cart/cart.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '../../../Models/AppState';
import { Store } from '@ngrx/store';
import { ProductService } from '../../../state/Product/product.service';
import { CartService } from '../../../state/Cart/cart.service';
import { Observable } from 'rxjs';
import { ProductCardComponent } from '../product-card/product-card.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { StarRatingComponent } from '../../star-rating/star-rating.component';
import { ProductReviewCardComponent } from '../../product-review-card/product-review-card.component';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { findRelatedProductsSuccess } from '../../../state/Product/Actions';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    ProductReviewCardComponent,
    MatProgressBarModule,
    MatRadioModule,
    MatButtonModule,
    FormsModule,
    StarRatingComponent,
  ],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  selectedSize!: string;
  relatedProducts$: Observable<any[]>; // Use observable for related products
  reviews = [1, 1, 1];
  productDetails$!: Observable<any>;
  productId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>,
    private productService: ProductService,
    private cartService: CartService
  ) {
    // relatedProducts$ will be populated from the store
    this.relatedProducts$ = this.store.select((state) => state.product.relatedProducts);
  }

  // Navigate to the cart
  navigateToCart = () => {
    this.router.navigate(['/cart']);
  };

  ngOnInit() {
    // Get the product ID from the URL
    let id = this.route.snapshot.paramMap.get('id');
    console.log('productId', id);

    if (id) {
      console.log('id ', id);
      this.productService.findProductById(id); // Fetch product details by ID
    }

    // Subscribe to the selected product from the store
    this.productDetails$ = this.store.select(
      (state) => state.product.selectedProduct
    );

    this.productDetails$.subscribe((productdata) => {
      if (productdata) {
        this.productId = Number(productdata.id);
        console.log('product details from store - ', productdata.id);

        // Fetch related products based on the current product's categories
        this.fetchRelatedProducts(productdata);
      }
    });
    this.relatedProducts$.subscribe((products) => {
      console.log('Related products in the store:', products); // Add this log
    });
  }

  // Fetch related products based on the current product's categories
  fetchRelatedProducts(productdata: any) {
    const topLavelCategory = productdata.topLavelCategory;
    const secondLavelCategory = productdata.secondLavelCategory;
    const thirdLavelCategory = productdata.thirdLavelCategory;
  
    this.productService
      .findRelatedProducts(topLavelCategory, secondLavelCategory, thirdLavelCategory)
      .subscribe({
        next: (response) => {
          console.log('Related Products API Response:', response); // Log the response here
          if (response && response.length > 0) {
            this.store.dispatch(findRelatedProductsSuccess({ payload: response }));
          } else {
            console.log('No related products found from API.');
          }
        },
        error: (error) => {
          console.error('Error fetching related products:', error);
        },
      });
  }
  

  // Handle adding to the cart
  handleAddToCart = () => {
    const data = { size: this.selectedSize, productId: this.productId };
    console.log('data ----- ', data);
    this.cartService.addItemToCart(data);
    this.cartService.getCart();

    this.store.dispatch(getCartRequest());

    this.navigateToCart();
  };
}
