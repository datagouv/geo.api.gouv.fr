(function () {
    var boost = '';

    $('.checkbox')
        .checkbox()
        .first().checkbox({
            onChecked: function() {
                boost = 'population';
            },
            onUnchecked: function() {
                boost = '';
            }
        });

    $('.search input')
        .api({
            throttle: 400,
            action: 'search',
            stateContext: '.ui.input',
            beforeSend: function(settings) {
                settings.urlData = {
                    query: $('.ui.search .prompt').val(),
                    boost: boost
                };

                return settings;
            },
            url: 'https://geo.api.gouv.fr/communes?nom={query}&boost={boost}',
            onResponse: function(geoAPIResponse) {
                $('div .response').empty();
                // translate GéoAPI response to work with search
                $.each(geoAPIResponse, function(index, item) {
                    var commune = item.nom + '\t' + item.code;
                    var maxResults = 8;
                    if (index >= maxResults) {
                        return false;
                    }
                    $("div .response").append('<div class="item">')
                    $("div .response").append('<div class="header">'.concat(item.nom + '</div>'))
                    $("div .response").append('<div>'.concat(item.code + '</div>'))
                    $("div .response").append('</div>')
                });
            }
        });

})();
