var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50",
        "ok": "0",
        "ko": "50"
    },
    "minResponseTime": {
        "total": "6753",
        "ok": "-",
        "ko": "6753"
    },
    "maxResponseTime": {
        "total": "7115",
        "ok": "-",
        "ko": "7115"
    },
    "meanResponseTime": {
        "total": "6945",
        "ok": "-",
        "ko": "6945"
    },
    "standardDeviation": {
        "total": "137",
        "ok": "-",
        "ko": "137"
    },
    "percentiles1": {
        "total": "6914",
        "ok": "-",
        "ko": "6914"
    },
    "percentiles2": {
        "total": "7101",
        "ok": "-",
        "ko": "7101"
    },
    "percentiles3": {
        "total": "7112",
        "ok": "-",
        "ko": "7112"
    },
    "percentiles4": {
        "total": "7114",
        "ok": "-",
        "ko": "7114"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 50,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "6.25",
        "ok": "-",
        "ko": "6.25"
    }
},
contents: {
"req_criarproduto-5e8cf": {
        type: "REQUEST",
        name: "CriarProduto",
path: "CriarProduto",
pathFormatted: "req_criarproduto-5e8cf",
stats: {
    "name": "CriarProduto",
    "numberOfRequests": {
        "total": "50",
        "ok": "0",
        "ko": "50"
    },
    "minResponseTime": {
        "total": "6753",
        "ok": "-",
        "ko": "6753"
    },
    "maxResponseTime": {
        "total": "7115",
        "ok": "-",
        "ko": "7115"
    },
    "meanResponseTime": {
        "total": "6945",
        "ok": "-",
        "ko": "6945"
    },
    "standardDeviation": {
        "total": "137",
        "ok": "-",
        "ko": "137"
    },
    "percentiles1": {
        "total": "6914",
        "ok": "-",
        "ko": "6914"
    },
    "percentiles2": {
        "total": "7101",
        "ok": "-",
        "ko": "7101"
    },
    "percentiles3": {
        "total": "7112",
        "ok": "-",
        "ko": "7112"
    },
    "percentiles4": {
        "total": "7114",
        "ok": "-",
        "ko": "7114"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 50,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "6.25",
        "ok": "-",
        "ko": "6.25"
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
