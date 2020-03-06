using Emart.AccountServices.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AccountServices.Repositories
{
   public interface IAccountRepository
    {
        Buyer BuyerLogin(string uname, string pwd);

        Seller SellerLogin(string uname, string pwd);

        void SellerRegister(Seller sellerobj);

        void BuyerRegister(Buyer buyerobj);
    }
}
