import { createAction, props } from '@ngrx/store';
import { Product } from '../../Models/Product';


export const findRelatedProductsRequest = createAction(
  '[Product] Find Related Products Request',
  props<{ topLavelCategory: string; secondLavelCategory: string; thirdLavelCategory: string }>()
);

export const findRelatedProductsSuccess = createAction(
  '[Product] Find Related Products Success',
  props<{ payload: Product[] }>()
);

export const findRelatedProductsFailure = createAction(
  '[Product] Find Related Products Failure',
  props<{ error: any }>()
);

export const findProductsByCategoryRequest = createAction(
  '[Product] Find Products By Category Request',
  props<{ reqData: any }>()
);
export const findProductsByCategorySuccess = createAction(
  '[Product] Find Products By Category Success',
  props<{ payload: any }>()
);
export const findProductsByCategoryFailure = createAction(
  '[Product] Find Products By Category Failure',
  props<{ error: any }>()
);

export const findProductByIdRequest = createAction(
  '[Product] Find Product By Id Request',
  props<{ productId: string }>()
);
export const findProductByIdSuccess = createAction(
  '[Product] Find Product By Id Success',
  props<{ payload: Product }>()
);
export const findProductByIdFailure = createAction(
  '[Product] Find Product By Id Failure',
  props<{ error: any }>()
);

export const createProductRequest = createAction(
  '[Product] Create Product Request',
  props<{ product: any }>()
);
export const createProductSuccess = createAction(
  '[Product] Create Product Success',
  props<{ payload: any }>()
);
export const createProductFailure = createAction(
  '[Product] Create Product Failure',
  props<{ error: any }>()
);

export const updateProductRequest = createAction(
  '[Product] Update Product Request',
  props<{ product: any }>()
);
export const updateProductSuccess = createAction(
  '[Product] Update Product Success',
  props<{ payload: any }>()
);
export const updateProductFailure = createAction(
  '[Product] Update Product Failure',
  props<{ error: any }>()
);

export const deleteProductRequest = createAction(
  '[Product] Delete Product Request',
  props<{ productId: string }>()
);
export const deleteProductSuccess = createAction(
  '[Product] Delete Product Success',
  props<{ payload: any }>()
);
export const deleteProductFailure = createAction(
  '[Product] Delete Product Failure',
  props<{ error: any }>()
);


export const recentllyAddedProductsSuccess=createAction(
  '[Product] Recentlly Added Product Success',
  props<{payload:any}>()
)

export const recentllyAddedProductsFailure=createAction(
  '[Product] Recentlly Added Product Failure',
  props<{error:any}>()
)