'use strict';
//Get your client ID and secrent by visiting https://developer.foursquare.com
//Those are demo client Id & secret.

var requestParms = {
    clientId: "WWCF2OURUBCOI0TC5DF2CEVV0F1NPFUR00VV2SQMOUFW04SZ",
    clientSecret: "XXWU0Z01KUOV5RS3FYHKSUNI1EL4BAR3AKX03EM2A3S4MP0V",
    version: "20170413"
}

app.factory('placesPhotosService', function ($resource) {

    var requestUri = 'https://api.foursquare.com/v2/venues/:venueId/:action';

    return $resource(requestUri,
        {
            action: 'photos',
            client_id: requestParms.clientId,
            client_secret: requestParms.clientSecret,
            v: requestParms.version,
            limit: '9',
            callback: 'JSON_CALLBACK'
        },
        {
            get: { method: 'JSONP' }
        });

});