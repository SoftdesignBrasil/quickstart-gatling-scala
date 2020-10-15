var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "202434",
        "ok": "80455",
        "ko": "121979"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "74",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "1196",
        "ok": "1196",
        "ko": "510"
    },
    "meanResponseTime": {
        "total": "88",
        "ok": "162",
        "ko": "40"
    },
    "standardDeviation": {
        "total": "79",
        "ok": "64",
        "ko": "41"
    },
    "percentiles1": {
        "total": "65",
        "ok": "146",
        "ko": "27"
    },
    "percentiles2": {
        "total": "136",
        "ok": "190",
        "ko": "51"
    },
    "percentiles3": {
        "total": "237",
        "ok": "286",
        "ko": "119"
    },
    "percentiles4": {
        "total": "329",
        "ok": "383",
        "ko": "209"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 80452,
        "percentage": 40
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 121979,
        "percentage": 60
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "336.829",
        "ok": "133.869",
        "ko": "202.96"
    }
},
contents: {
"req_retornatodospro-567e1": {
        type: "REQUEST",
        name: "retornaTodosProdutosCadastrados",
path: "retornaTodosProdutosCadastrados",
pathFormatted: "req_retornatodospro-567e1",
stats: {
    "name": "retornaTodosProdutosCadastrados",
    "numberOfRequests": {
        "total": "202434",
        "ok": "80455",
        "ko": "121979"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "74",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "1196",
        "ok": "1196",
        "ko": "510"
    },
    "meanResponseTime": {
        "total": "88",
        "ok": "162",
        "ko": "40"
    },
    "standardDeviation": {
        "total": "79",
        "ok": "64",
        "ko": "41"
    },
    "percentiles1": {
        "total": "65",
        "ok": "146",
        "ko": "27"
    },
    "percentiles2": {
        "total": "136",
        "ok": "190",
        "ko": "51"
    },
    "percentiles3": {
        "total": "237",
        "ok": "286",
        "ko": "119"
    },
    "percentiles4": {
        "total": "329",
        "ok": "383",
        "ko": "209"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 80452,
        "percentage": 40
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 121979,
        "percentage": 60
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "336.829",
        "ok": "133.869",
        "ko": "202.96"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
