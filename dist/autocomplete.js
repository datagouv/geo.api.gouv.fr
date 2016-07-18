$('.ui.search')
    .search({
        type: 'category',
        minCharacters: 3,
        apiSettings: {
            onResponse: function(geoAPIResponse) {
                var response = {
                    results: {}
                };
                // translate GéoAPI response to work with search
                $.each(geoAPIResponse, function(index, item) {
                    console.log(item);
                    var commune = item.nom,
                        maxResults = 8;
                    if (index >= maxResults) {
                        return false;
                    }
                    // create new commune category
                    if (response.results[commune] === undefined) {
                        response.results[commune] = {
                            name: commune,
                            results: []
                        };
                    }
                    // add result to category
                    response.results[commune].results.push({
                        title: item.nom,
                        description: item.code,
                        text: item.population
                    });
                });
                return response;
            },
            url: 'https://geo.api.gouv.fr/communes?nom={query}&boost='
        }
    });
