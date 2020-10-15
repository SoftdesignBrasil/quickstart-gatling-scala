var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200594",
        "ok": "78727",
        "ko": "121867"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "76",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "1710",
        "ok": "949",
        "ko": "1710"
    },
    "meanResponseTime": {
        "total": "89",
        "ok": "167",
        "ko": "39"
    },
    "standardDeviation": {
        "total": "83",
        "ok": "68",
        "ko": "46"
    },
    "percentiles1": {
        "total": "61",
        "ok": "150",
        "ko": "27"
    },
    "percentiles2": {
        "total": "138",
        "ok": "196",
        "ko": "49"
    },
    "percentiles3": {
        "total": "243",
        "ok": "297",
        "ko": "113"
    },
    "percentiles4": {
        "total": "345",
        "ok": "399",
        "ko": "203"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 78709,
        "percentage": 39
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 18,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 121867,
        "percentage": 61
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "333.767",
        "ok": "130.993",
        "ko": "202.774"
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
        "total": "200594",
        "ok": "78727",
        "ko": "121867"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "76",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "1710",
        "ok": "949",
        "ko": "1710"
    },
    "meanResponseTime": {
        "total": "89",
        "ok": "167",
        "ko": "39"
    },
    "standardDeviation": {
        "total": "83",
        "ok": "68",
        "ko": "46"
    },
    "percentiles1": {
        "total": "61",
        "ok": "150",
        "ko": "27"
    },
    "percentiles2": {
        "total": "138",
        "ok": "196",
        "ko": "49"
    },
    "percentiles3": {
        "total": "243",
        "ok": "297",
        "ko": "113"
    },
    "percentiles4": {
        "total": "345",
        "ok": "399",
        "ko": "203"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 78709,
        "percentage": 39
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 18,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 121867,
        "percentage": 61
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "333.767",
        "ok": "130.993",
        "ko": "202.774"
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
