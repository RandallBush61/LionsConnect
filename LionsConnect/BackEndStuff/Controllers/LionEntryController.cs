using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using LionsConnect.Datacontext;
using LionsConnect.Modles;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Query.Internal;


namespace LionEntryController.Controllers
{
    [Route("api/LionEntry")]
    [ApiController]
    public class LionEntryController : ControllerBase
    {
        private readonly CMPSData datacontext;

        public LionEntryController(CMPSData datacontext)
        {
            this.datacontext = datacontext;
        }

        [HttpGet("Get")]
        public ActionResult<LionEntry>Get(int id) 
        {
            return datacontext.LionEntry.FirstOrDefault(e => e.Id == id);
        }

        [HttpPut("Edit")]
        public ActionResult<LionEntryDto> Put(int id, [FromBody] LionEntryDto x)
        {

            var data = datacontext.Set<LionEntry>().FirstOrDefault(x => x.Id == id);
            data.Post = x.Post;
            datacontext.SaveChanges();
            return Ok();

        }

        [HttpPost("Post")]
        public ActionResult<LionEntryDto> Created(LionEntryDto targetvalue) 
        {
            var data = datacontext.Set<LionEntry>().Add(new LionEntry
            {
                Post = targetvalue.Post,
                UserName = targetvalue.UserName,
                
            });
            datacontext.SaveChanges();
            return Ok();
        }

        [HttpDelete("Delete")] 
        public ActionResult<LionEntryDto> Delete(int id)
        {
            var data = datacontext.Set<LionEntry>().FirstOrDefault(x => x.Id == id);
            datacontext.Set<LionEntry>().Remove(data);
            datacontext.SaveChanges();
            return Ok();
        }

    }
}
