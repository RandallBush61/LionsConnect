using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LionsConnect.Modles
{
    public class ApplicationUserDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string password { get; set; }

    }
}
