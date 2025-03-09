namespace BankManagementSystem.Models;

public class User
{
    public required Guid Id { get; init; } = new Guid();  /* create a class user with a generated UUID that cannot be change afterwards*/
    public required string name { get; set; }
    public required string surname { get; set; }
    public required string email { get; set; }
    public required string password { get; set; }
}