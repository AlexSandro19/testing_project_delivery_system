/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 97.38418933657691, "KoPercent": 2.6158106634230855};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.025204332155889388, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.022735934448096802, 500, 1500, "packages/addPackage"], "isController": false}, {"data": [0.021955888804690304, 500, 1500, "deliveries/deleteDelivery"], "isController": false}, {"data": [0.020606464318813716, 500, 1500, "payments/addPayment"], "isController": false}, {"data": [0.036780104712041885, 500, 1500, "packages/deletePackage"], "isController": false}, {"data": [0.00906183368869936, 500, 1500, "deliveries/addDelivery"], "isController": false}, {"data": [0.03733046013436431, 500, 1500, "payments/deletePayment"], "isController": false}, {"data": [0.03139219510008293, 500, 1500, "users/login"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 222799, 5828, 2.6158106634230855, 17227.47427501908, 0, 43960, 14351.5, 32053.9, 37867.95, 39791.98, 172.4668050226151, 95.71393053070938, 50.910846065283394], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["packages/addPackage", 41982, 1321, 3.1465866323662524, 11332.734743461431, 0, 22785, 9632.0, 19999.9, 21290.0, 22588.0, 32.63325713050893, 15.43363541228617, 12.306426287856233], "isController": false}, {"data": ["deliveries/deleteDelivery", 25073, 576, 2.297291907629721, 26013.883260878323, 0, 43318, 25628.0, 39912.9, 40695.95, 41064.990000000005, 19.562513751418052, 12.31098977611326, 4.235086270155093], "isController": false}, {"data": ["payments/addPayment", 34528, 423, 1.2250926784059315, 12251.924785681233, 0, 22771, 11027.5, 19997.0, 21218.95, 22209.87000000002, 26.841463718002935, 11.559306870924573, 8.466435847624863], "isController": false}, {"data": ["packages/deletePackage", 22920, 911, 3.974694589877836, 20797.33407504367, 0, 43673, 16611.0, 35052.0, 37576.0, 40868.990000000005, 17.92696404673838, 8.592519635481153, 3.696859649010458], "isController": false}, {"data": ["deliveries/addDelivery", 30016, 817, 2.7218816631130065, 25973.08861940288, 0, 42370, 31410.0, 40468.0, 40745.0, 41042.0, 23.267838275500942, 13.98513979496264, 9.862066925654698], "isController": false}, {"data": ["payments/deletePayment", 23667, 708, 2.9915071618709597, 23377.214433599544, 0, 43960, 22599.5, 37424.0, 40605.0, 41048.98, 18.509698293560202, 8.873380697126684, 3.9552275543903734], "isController": false}, {"data": ["users/login", 44613, 1072, 2.402887050859615, 10706.766144397441, 13, 22775, 9551.5, 19395.0, 20163.850000000002, 21726.950000000008, 34.66767582890659, 25.465404871467804, 8.634480602152033], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["400/Bad Request", 259, 4.444063143445436, 0.11624827759550088], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 1459, 25.034317089910775, 0.6548503359530339], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:5000 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 2612, 44.818119423472886, 1.1723571470248968], "isController": false}, {"data": ["500/Internal Server Error", 333, 5.713795470144132, 0.14946207119421542], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: localhost:5000 failed to respond", 1018, 17.467398764584765, 0.45691407950664054], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer: socket write error", 147, 2.522306108442004, 0.0659787521487978], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 222799, 5828, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:5000 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 2612, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 1459, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: localhost:5000 failed to respond", 1018, "500/Internal Server Error", 333, "400/Bad Request", 259], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["packages/addPackage", 41982, 1321, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:5000 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 548, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 446, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: localhost:5000 failed to respond", 270, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer: socket write error", 57, null, null], "isController": false}, {"data": ["deliveries/deleteDelivery", 25073, 576, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:5000 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 294, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 149, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: localhost:5000 failed to respond", 128, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer: socket write error", 5, null, null], "isController": false}, {"data": ["payments/addPayment", 34528, 423, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: localhost:5000 failed to respond", 182, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 181, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer: socket write error", 60, null, null, null, null], "isController": false}, {"data": ["packages/deletePackage", 22920, 911, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:5000 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 352, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: localhost:5000 failed to respond", 200, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 191, "500/Internal Server Error", 167, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer: socket write error", 1], "isController": false}, {"data": ["deliveries/addDelivery", 30016, 817, "400/Bad Request", 259, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 220, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: localhost:5000 failed to respond", 168, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:5000 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 148, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer: socket write error", 22], "isController": false}, {"data": ["payments/deletePayment", 23667, 708, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:5000 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 395, "500/Internal Server Error", 166, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 75, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: localhost:5000 failed to respond", 70, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer: socket write error", 2], "isController": false}, {"data": ["users/login", 44613, 1072, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:5000 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 875, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 197, null, null, null, null, null, null], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
