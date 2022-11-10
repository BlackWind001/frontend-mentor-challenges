import React from 'react';
import { PRODUCT_OBJ } from '@constants/product_constants';

const ProductContext = React.createContext(PRODUCT_OBJ.itemId);

export default ProductContext;
