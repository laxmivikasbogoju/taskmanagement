using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskManagementAPI.Data;
using TaskManagementAPI.DTOs;
using TaskManagementAPI.Models;

namespace TaskManagementAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly AppDbContext _context;

    public UsersController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginRequestDto request)
    {
        var user = await _context.Users
            .FirstOrDefaultAsync(u =>
                u.Email == request.Email &&
                u.Password == request.Password);

        if (user == null)
            return Unauthorized(new { message = "Invalid credentials" });

        return Ok(user);
    }

    [HttpPost("register")]
public async Task<IActionResult> Register(LoginRequestDto request)
{
    // Check if user already exists
    var existingUser = await _context.Users
        .FirstOrDefaultAsync(u => u.Email == request.Email);

    if (existingUser != null)
        return BadRequest(new { message = "User already exists" });

    var user = new User
    {
        Email = request.Email,
        Password = request.Password
    };

    _context.Users.Add(user);
    await _context.SaveChangesAsync();

    return Ok(new { message = "User registered successfully" });
}

}
