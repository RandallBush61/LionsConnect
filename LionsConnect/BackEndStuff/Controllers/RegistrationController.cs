using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LionsConnect.Datacontext;
using LionsConnect.Fake_Classes;
using LionsConnect.Modles;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace LionsConnect.Controllers
{
    [Route("api/registration")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private readonly CMPSData dataContext;
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signinManager;

        public RegistrationController(UserManager<User> userManager, CMPSData dataContext, SignInManager<User> signinManager, CMPSData datacontext)
        {
            this.userManager = userManager;
            this.signinManager = signinManager;
            this.dataContext = dataContext;

        }

        [HttpPost]

        public async Task<ActionResult<ApplicationUserDto>> CreateUser(CreateUserDto dto)
        {
            var newUser = new User
            {
                UserName = dto.UserName,
            };

            using (var transaction = await dataContext.Database.BeginTransactionAsync())
            {
                var identityResult = await userManager.CreateAsync(newUser, dto.password);

                if (!identityResult.Succeeded)
                {
                    return BadRequest();
                }
                var rolesDatBeLitBruh = await userManager.AddToRoleAsync(newUser, Roles.Customer);

                if (!rolesDatBeLitBruh.Succeeded)
                {
                    return BadRequest();
                }

                    transaction.Commit();

                await signinManager.SignInAsync(newUser, isPersistent: false);

                    return Created(string.Empty, new ApplicationUserDto
                    {
                        UserName = newUser.UserName,
                    });
                
              
            }
        }
    }
}
