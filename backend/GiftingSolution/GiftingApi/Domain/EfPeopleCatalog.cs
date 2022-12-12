using GiftingApi.Adapters;
using Microsoft.EntityFrameworkCore;

namespace GiftingApi.Domain;

public class EfPeopleCatalog : ICatalogPeople
{

    private readonly GiftingDataContext _context;

    public EfPeopleCatalog(GiftingDataContext context)
    {
        _context = context;
    }

    public async Task<PersonResponse> GetPeopleAsync()
    {
        // Select Id, FirstName, LastName from People where Unfriended = 0
        var data = await _context.People
            .Where(p => p.UnFriended ==  false)
            .Select(p => new PersonItemResponse(p.Id.ToString(), p.FirstName, p.LastName))
            .ToListAsync();

        return new PersonResponse(data);
    }

}
