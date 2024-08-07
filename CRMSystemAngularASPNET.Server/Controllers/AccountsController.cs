using CRMSystemAngularASPNET.Server.Models;
using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class AccountsController : ControllerBase
{
    private readonly CrmContext _context;

    public AccountsController(CrmContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> CreateAccount([FromBody] Account account)
    {
        if (account == null)
        {
            return BadRequest();
        }

        _context.Accounts.Add(account);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetAccountById), new { id = account.Id }, account);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetAccountById(int id)
    {
        var account = await _context.Accounts.FindAsync(id);
        if (account == null)
        {
            return NotFound();
        }

        return Ok(account);
    }
}