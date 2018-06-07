import * as request from 'request'

const url = "https://www.swisscom.ch/map-api/onlinenslg/lineinfo"

const input = process.argv[2]
const parts: string[] = input.replace(",", "").replace(/\s\s+/g, ' ').replace("\n", " ").split(" ")

const rq = {
    "address": {
        "zipCode4": parts[2],
        "city": parts[3],
        "street": parts[0],
        "houseNumber": parts[1]
    },
    "language": "de"
}

/*
 {
    "address":{
        "zipCode4":"8600","city":"Dübendorf","street":"Kunklerstrasse","houseNumber":"6"
    },
    "language":"de"
}*/

request.post({ url: url, json: true, body: rq }, function (err, httpResponse, body) {
    console.log(body.broadbandInfo.extensionInfo)
})