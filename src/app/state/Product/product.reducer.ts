import { createReducer, on } from '@ngrx/store';
import {
  findProductsByCategoryRequest,
  findProductsByCategorySuccess,
  findProductsByCategoryFailure,
  findProductByIdRequest,
  findProductByIdSuccess,
  findProductByIdFailure,
  createProductRequest,
  createProductSuccess,
  createProductFailure,
  updateProductRequest,
  updateProductSuccess,
  updateProductFailure,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductFailure,
  recentllyAddedProductsSuccess,
  findRelatedProductsRequest,
  findRelatedProductsSuccess,
  findRelatedProductsFailure,
} from './Actions';

export interface ProductState {
  products: any[]; // Define the type of 'products' as per your requirement
  selectedProduct: any | null; // Define the type of 'selectedProduct' as per your requirement
  relatedProducts: any[]; // Add a state for related products
  loading: boolean;
  error: string | null;
  content: any[];
  recent: any[];
}

export const initialState: ProductState = {
  products: [],
  selectedProduct: null,
  relatedProducts: [], // Initialize the related products state
  loading: false,
  error: null,
  content: [],
  recent: [],
};

export const productReducer = createReducer(
  initialState,
  on(
    findProductsByCategoryRequest,
    findProductByIdRequest,
    createProductRequest,
    updateProductRequest,
    deleteProductRequest,
    findRelatedProductsRequest, // Add the request action here
    (state) => ({
      ...state,
      loading: true,
      error: null,
    })
  ),
  on(findProductsByCategorySuccess, (state, { payload }) => ({
    ...state,
    products: payload,
    content: payload.content,
    loading: false,
  })),
  on(findProductByIdSuccess, (state, { payload }) => ({
    ...state,
    selectedProduct: payload,
    loading: false,
  })),
  on(createProductSuccess, (state, { payload }) => ({
    ...state,
    products: [...state.products, payload],
    loading: false,
  })),
  on(updateProductSuccess, (state, { payload }) => ({
    ...state,
    products: state.products.map((product) =>
      product.id === payload.id ? payload : product
    ),
    loading: false,
  })),
  on(deleteProductSuccess, (state, { payload }) => ({
    ...state,
    loading: false,
    content: state.content.filter((product) => product.id !== payload),
  })),
  on(recentllyAddedProductsSuccess, (state, { payload }) => ({
    ...state,
    loading: false,
    recent: payload,
  })),
  // Handling related products actions
  on(findRelatedProductsSuccess, (state, { payload }) => {
    console.log('State update for related products:', payload); // Add this log
    return {
      ...state,
      relatedProducts: payload,
      loading: false,
    };
  }),
  on(findRelatedProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error, // Handle error for related products
  })),
  on(
    findProductsByCategoryFailure,
    findProductByIdFailure,
    createProductFailure,
    updateProductFailure,
    deleteProductFailure,
    (state, { error }) => ({
      ...state,
      loading: false,
      error: error,
    })
  )
);
