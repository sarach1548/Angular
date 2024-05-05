using Microsoft.AspNetCore.Mvc;
using JobSearchServer.Models;
using System.Text.Json;
using System.IO;
using System.Linq;
namespace JobSearchServer.Controllers;

[ApiController]
[Route("[controller]")]
public class JobSearchServerController : ControllerBase
{

    private IWebHostEnvironment webHost;
    private string jobsPath;
    private List<Job>? jobsList { get; }
    private string usersPath;
    private List<User>? usersList { get; }
    public JobSearchServerController(IWebHostEnvironment webHost)
    {
        this.webHost = webHost;
        this.jobsPath = Path.Combine(webHost.ContentRootPath, "Data", "Jobs.json");
        this.usersPath=Path.Combine(webHost.ContentRootPath, "Data", "Users.json");
        using (var jsonFile =  System.IO.File.OpenText(jobsPath))
        {
            jobsList = JsonSerializer.Deserialize<List<Job>>(jsonFile.ReadToEnd(),
            new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });
        }
        using (var jsonFile = System.IO.File.OpenText(usersPath))
        {
            usersList = JsonSerializer.Deserialize<List<User>>(jsonFile.ReadToEnd(),
            new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });
        }
        // foreach (User item in usersList)
        // {
        //     System.Console.WriteLine(item.ToString());
        // }
    }



    [HttpGet("GetAllJobs")]
    public ActionResult GetAllJobs()
    {
        return Ok(jobsList);
    }

    [HttpGet("GetUserDetails")]
    public ActionResult<User> GetUser(string userName, string password)
    {
        User? user = usersList?.FirstOrDefault(u=>u?.userName==userName && u?.password==password);
        Console.WriteLine(user?.ToString());
        return Ok(user);
    }

    [HttpPost("updateCvsSents")]
    public ActionResult updateCvsSents(int id){
        User? user = usersList?.FirstOrDefault(u=>u?.id==id);
        user.cVsSentsAmount++;
        saveToFile();
        Console.WriteLine(user?.ToString());
        return Ok(user);
    }
    private void saveToFile()
    {
        System.IO.File.WriteAllText(usersPath, JsonSerializer.Serialize(usersList));
    }
}

