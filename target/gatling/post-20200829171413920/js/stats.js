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
        "total": "120",
        "ok": "-",
        "ko": "120"
    },
    "maxResponseTime": {
        "total": "312",
        "ok": "-",
        "ko": "312"
    },
    "meanResponseTime": {
        "total": "205",
        "ok": "-",
        "ko": "205"
    },
    "standardDeviation": {
        "total": "41",
        "ok": "-",
        "ko": "41"
    },
    "percentiles1": {
        "total": "200",
        "ok": "-",
        "ko": "200"
    },
    "percentiles2": {
        "total": "224",
        "ok": "-",
        "ko": "224"
    },
    "percentiles3": {
        "total": "289",
        "ok": "-",
        "ko": "289"
    },
    "percentiles4": {
        "total": "306",
        "ok": "-",
        "ko": "306"
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
        "total": "50",
        "ok": "-",
        "ko": "50"
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
        "total": "120",
        "ok": "-",
        "ko": "120"
    },
    "maxResponseTime": {
        "total": "312",
        "ok": "-",
        "ko": "312"
    },
    "meanResponseTime": {
        "total": "205",
        "ok": "-",
        "ko": "205"
    },
    "standardDeviation": {
        "total": "41",
        "ok": "-",
        "ko": "41"
    },
    "percentiles1": {
        "total": "200",
        "ok": "-",
        "ko": "200"
    },
    "percentiles2": {
        "total": "224",
        "ok": "-",
        "ko": "224"
    },
    "percentiles3": {
        "total": "289",
        "ok": "-",
        "ko": "289"
    },
    "percentiles4": {
        "total": "306",
        "ok": "-",
        "ko": "306"
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
        "total": "50",
        "ok": "-",
        "ko": "50"
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
