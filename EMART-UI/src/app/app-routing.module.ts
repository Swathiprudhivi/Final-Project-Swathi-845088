import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerLandingPageComponent } from './Buyer/buyer-landing-page/buyer-landing-page.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewCartComponent } from './Buyer/view-cart/view-cart.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import { BuyProductComponent } from './Buyer/buy-product/buy-product.component';
import { ViewProfileComponent } from './Buyer/view-profile/view-profile.component';
import { SellerLandingPageComponent } from './Seller/seller-landing-page/seller-landing-page.component';
import { AddItemsComponent } from './Seller/add-items/add-items.component';
import { ViewItemsComponent } from './Seller/view-items/view-items.component';
import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterSellerComponent } from './Account/register-seller/register-seller.component';
import { RegisterBuyerComponent } from './Account/register-buyer/register-buyer.component';
import { AdminLandingPageComponent } from './Admin/admin-landing-page/admin-landing-page.component';
import { BlockUnblockBuyerComponent } from './Admin/block-unblock-buyer/block-unblock-buyer.component';
import { BlockUnblockSellerComponent } from './Admin/block-unblock-seller/block-unblock-seller.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { DailyReportsComponent } from './Admin/daily-reports/daily-reports.component';
import { SViewProfileComponent } from './Seller/sview-profile/sview-profile.component';
import { HomeComponent } from './Account/home/home.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:'seller',component:SellerLandingPageComponent,children:[
    {path:'additems',component:AddItemsComponent},
    {path:'viewitems',component:ViewItemsComponent},
    
    {path:'viewreports',component:ViewReportsComponent},
    {path:'sviewprofile',component:SViewProfileComponent}
  ]},
  {path:'buyer',component:BuyerLandingPageComponent,children:[
    {path:'search',component:SearchComponent},
    {path:'viewcart',component:ViewCartComponent},
    {path:'purchasehistory',component:PurchaseHistoryComponent},
    {path:'buyproduct',component:BuyProductComponent},
    {path:'viewprofile',component:ViewProfileComponent}
  ]},
  {path:'admin',component:AdminLandingPageComponent,children:[
    {path:'block-unblock-buyer',component:BlockUnblockBuyerComponent},
    {path:'block-unblock-seller',component:BlockUnblockSellerComponent},
    {path:'addcategory',component:AddCategoryComponent},
    {path:'addsubcategory',component:AddSubCategoryComponent},
    {path:'dailyreports',component:DailyReportsComponent},
    
  ]},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'registerseller',component:RegisterSellerComponent},
  {path:'registerbuyer',component:RegisterBuyerComponent},
  {path:'',redirectTo:'home',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
