var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5298",
        "ok": "5298",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "302",
        "ok": "302",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "16501",
        "ok": "16501",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "11417",
        "ok": "11417",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1432",
        "ok": "1432",
        "ko": "-"
    },
    "percentiles1": {
        "total": "11388",
        "ok": "11388",
        "ko": "-"
    },
    "percentiles2": {
        "total": "12252",
        "ok": "12252",
        "ko": "-"
    },
    "percentiles3": {
        "total": "13594",
        "ok": "13594",
        "ko": "-"
    },
    "percentiles4": {
        "total": "14753",
        "ok": "14753",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 5,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 5290,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "8.671",
        "ok": "8.671",
        "ko": "-"
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
        "total": "5298",
        "ok": "5298",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "302",
        "ok": "302",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "16501",
        "ok": "16501",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "11417",
        "ok": "11417",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1432",
        "ok": "1432",
        "ko": "-"
    },
    "percentiles1": {
        "total": "11388",
        "ok": "11388",
        "ko": "-"
    },
    "percentiles2": {
        "total": "12252",
        "ok": "12252",
        "ko": "-"
    },
    "percentiles3": {
        "total": "13594",
        "ok": "13594",
        "ko": "-"
    },
    "percentiles4": {
        "total": "14753",
        "ok": "14753",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 5,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 5290,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "8.671",
        "ok": "8.671",
        "ko": "-"
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
