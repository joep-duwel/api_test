const url = 'https://api.spotify.com/v1/artists/1pPmIToKXyGdsCF6LmqLmI';

async function getData() {
    const request = new Request(url,[{
        headers: {
            Authorization: 'Bearer BQCPN1uhH-GP9HsHRMng0ry_DQiQZDpD9WZL27yhUqPsA3xBMlGvchaT1U2wOfLz8wTb2iLECtWFM8bVuhUlMIIoiSXD_PK-1NuDXp84RuPGo10ZawtEPPOhZgqjTA5Odi34wonobnmJ4gq6A5bLLB3shcdfoGCdoL8svkfE9L4ZGtQIl0E8-6SmhnycPTrgRBQuDA8xUcEnu9NpgsJ9pt52vPRqmzD8XzWErOSn0uZzURMxiwGzWBH82B6fwaW3h1va4Rz-Ny79XMlWaNkAoE_GNBYr-E4J',
          }
    }]
    )
    const response =await fetch(url)
    const data = await response.json()
    console.log(data)
}

getData();
// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization

