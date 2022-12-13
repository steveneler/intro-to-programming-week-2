﻿
namespace GiftingApi.Controllers;
[ApiController]
public class PeopleController : ControllerBase
{

    private readonly ICatalogPeople _personCatalog;

    public PeopleController(ICatalogPeople personCatalog)
    {
        _personCatalog = personCatalog;
    }

    [HttpPost("/people")]
    public async Task<ActionResult<PersonItemResponse>> AddPerson([FromBody] PersonCreateRequest request)
    {
        // Validate the request

        PersonItemResponse response = await _personCatalog.AddPersonAsync(request);
        return StatusCode(201, response);
    }



    // GET /people
    [HttpGet("/people")]
    public async Task<ActionResult<PersonResponse>> GetAllPeople()
    {
        PersonResponse response = await _personCatalog.GetPeopleAsync();
        return Ok(response);
    }
}
