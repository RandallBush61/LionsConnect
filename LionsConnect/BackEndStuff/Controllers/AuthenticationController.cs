using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LionsConnect.Fake_Classes;
using LionsConnect.Modles;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace LionsConnect.Controllers
{
    [Route("api/loginsystem")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;
        public AuthenticationController(UserManager<User> userManager, SignInManager<User> signInManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
        }

        [HttpPost]

        public async Task<ActionResult<UserRoleDto>> Login(LoginDto dto)
        {
            var user = await userManager.FindByNameAsync(dto.UserName);
            if (user == null)
            {
                return BadRequest();
            }

            var result = await signInManager.CheckPasswordSignInAsync(user, dto.Password, true);
            if (!result.Succeeded)
            {
                return BadRequest();
            }

            await signInManager.SignInAsync(user, false, "Password");



            return Ok(new UserRoleDto
            {
                Id = user.Id,
                Username = user.UserName,
 
            });
                
        }

        

    }
}
