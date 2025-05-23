import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../slices/homeSlice";
import registerReducer from "../slices/registerSlice";
import loginReducer from "../slices/loginSlice";
import adminLoginReducer from "../slices/adminLoginSlice";
import forgotPasswordReducer from "../slices/forgotPasswordSlice";
import profileReducer from "../slices/profileSlice";
import editProfileReducer from "../slices/updateProfileSlice";
import addressReducer from "../slices/addressSlice";
import changePasswordReducer from "../slices/changePasswordSlice";
import productReducer from "../slices/productSlice";
import productsVariantReducer from "../slices/productVariantsSlice";
import productDetailReducer from "../slices/productDetailSlice";
import productVariationDetailReducer from "../slices/productVariationDetails";
import bannerReducer from "../slices/BannerSlice";
import blogReducer from "../slices/blogSlice";
import favoriteProductReducer from "../slices/favoriteProductsSlice";
import categoryReducer from "../slices/adminCategories";
import attributeReducer from "../slices/Attribute";
import attributeValueReducer from "../slices/attributeValueSlice";
import categorysReducer from "../slices/categorySlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    register: registerReducer,
    login: loginReducer,
    adminLogin: adminLoginReducer,
    forgotPassword: forgotPasswordReducer,
    profile: profileReducer,
    editProfile: editProfileReducer,
    address: addressReducer,
    changePassword: changePasswordReducer,
    product: productReducer,
    productsVariant: productsVariantReducer,
    categorys: categorysReducer,
    productDetail: productDetailReducer,
    productVariationDetail: productVariationDetailReducer,
    banner: bannerReducer,
    blog: blogReducer,
    favoriteProduct: favoriteProductReducer,
    category: categoryReducer,
    attribute: attributeReducer,
    attributeValue: attributeValueReducer,
  },
});
