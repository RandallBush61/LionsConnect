using LionsConnect.Fake_Classes;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LionsConnect.Modles
{
    public class ApplicationUser : IdentityUser<int>
    {
        public string FirstName { get; set; }
       
        public string LastName { get; set;  }
        public string password { get; set; }
        public virtual ICollection<LionEntry> UserPost { get; set; }
        public virtual ICollection<UserRole> Roles { get; set; } = new List<UserRole>();
        public int PostId { get; set; }
    }
}
