using Emart.SellerServices.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.SellerServices.Repositories
{
   public interface IItemRepository
    {
        void AddItem(Items itemobj);

        List<Items> ViewItems(string sid);

        void DeleteItem(string itemid);
        void UpdateItem(Items itemobj);

        Items GetItem(string itemid);
        public List<Category> GetCategory();
        public List<SubCategory> GetSubCategory(string id);
        public List<Items> ViewItems();
    }
}
