using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

[ApiController]
[Route("api/login")]
public class LoginController: ControllerBase
{
    [HttpPost]
    public IActionResult Login([FromBody] String userLogin){
        
        
        return Ok();
    }

    private String GenerateJwtToken(){
        Guid sessionId = Guid.NewGuid(); 

        var claims = new []{
            new Claim(JwtRegisteredClaimNames.Jti, sessionId.ToString())
        };

        var key  =  new SymmetricSecurityKey(Encoding.UTF8.GetBytes(""));
        var creds = new SigningCredentials(key,SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            issuer: "yourdomain.com",
            audience: "yourdomain.com",
            claims: claims,
            expires: DateTime.Now.AddMinutes(30),
            signingCredentials: creds
            );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}