var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "121271",
        "ok": "75816",
        "ko": "45455"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "75",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "29190",
        "ok": "29190",
        "ko": "23595"
    },
    "meanResponseTime": {
        "total": "99",
        "ok": "141",
        "ko": "27"
    },
    "standardDeviation": {
        "total": "306",
        "ok": "322",
        "ko": "262"
    },
    "percentiles1": {
        "total": "99",
        "ok": "123",
        "ko": "16"
    },
    "percentiles2": {
        "total": "134",
        "ok": "155",
        "ko": "29"
    },
    "percentiles3": {
        "total": "209",
        "ok": "232",
        "ko": "56"
    },
    "percentiles4": {
        "total": "295",
        "ok": "325",
        "ko": "89"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 75795,
        "percentage": 63
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 21,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 45455,
        "percentage": 37
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "201.782",
        "ok": "126.15",
        "ko": "75.632"
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
        "total": "121271",
        "ok": "75816",
        "ko": "45455"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "75",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "29190",
        "ok": "29190",
        "ko": "23595"
    },
    "meanResponseTime": {
        "total": "99",
        "ok": "141",
        "ko": "27"
    },
    "standardDeviation": {
        "total": "306",
        "ok": "322",
        "ko": "262"
    },
    "percentiles1": {
        "total": "99",
        "ok": "123",
        "ko": "16"
    },
    "percentiles2": {
        "total": "134",
        "ok": "155",
        "ko": "29"
    },
    "percentiles3": {
        "total": "209",
        "ok": "232",
        "ko": "56"
    },
    "percentiles4": {
        "total": "295",
        "ok": "325",
        "ko": "89"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 75795,
        "percentage": 63
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 21,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 45455,
        "percentage": 37
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "201.782",
        "ok": "126.15",
        "ko": "75.632"
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
