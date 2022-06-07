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

    var data = {"OkPercent": 62.83218804187271, "KoPercent": 37.16781195812729};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.0033138526748442616, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.004352855229514185, 500, 1500, "packages/addPackage"], "isController": false}, {"data": [0.0, 500, 1500, "deliveries/deleteDelivery"], "isController": false}, {"data": [0.0030677834047526296, 500, 1500, "payments/addPayment"], "isController": false}, {"data": [0.0, 500, 1500, "packages/deletePackage"], "isController": false}, {"data": [0.0, 500, 1500, "deliveries/addDelivery"], "isController": false}, {"data": [0.0, 500, 1500, "payments/deletePayment"], "isController": false}, {"data": [0.00891214351425943, 500, 1500, "users/login"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 77855, 28937, 37.16781195812729, 18322.069834949372, 1, 79444, 22104.5, 50069.8, 57254.50000000001, 73075.0, 239.24613881223533, 296.79923806650214, 47.23588800596463], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["packages/addPackage", 16426, 6158, 37.48934615852916, 13491.346402045541, 1, 55414, 12075.5, 27279.600000000002, 34625.99999999999, 50935.299999999996, 50.53220943825755, 60.7277310342706, 12.299171691380053], "isController": false}, {"data": ["deliveries/deleteDelivery", 8738, 3839, 43.93453879606317, 21967.698901350504, 2, 79307, 17084.0, 48582.100000000006, 56755.099999999984, 73063.59000000001, 27.21575760596018, 39.04392467798476, 3.379078285404156], "isController": false}, {"data": ["payments/addPayment", 10268, 1018, 9.91429684456564, 16161.37456174519, 88, 44894, 18660.0, 24575.4, 27616.0, 41956.549999999996, 31.628881222276988, 19.487824494054955, 9.098870816519838], "isController": false}, {"data": ["packages/deletePackage", 7333, 3752, 51.165962089185875, 24950.956770762292, 2, 79444, 27652.0, 49395.0, 57420.999999999985, 72592.95999999999, 23.525826114854024, 33.5639142454684, 2.647985091835098], "isController": false}, {"data": ["deliveries/addDelivery", 9558, 2538, 26.55367231638418, 26820.798911906215, 5, 77616, 29516.5, 47809.4, 51718.45, 60111.26999999999, 29.4964495014489, 31.586858444315347, 9.432741651082123], "isController": false}, {"data": ["payments/deletePayment", 8140, 3667, 45.04914004914005, 25474.53599508609, 2, 78572, 24994.5, 48806.9, 55449.0, 70864.18, 25.7638148170421, 33.717819587818525, 3.3133214886515776], "isController": false}, {"data": ["users/login", 17392, 7965, 45.79691812327507, 11515.40127644897, 1, 55688, 6665.0, 26862.7, 35089.14999999999, 50843.28, 53.44724266683056, 81.8402980516587, 7.393538916888186], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["400/Bad Request", 62, 0.21425856170301, 0.07963521931796289], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Software caused connection abort: recv failed", 16083, 55.57936206241145, 20.657632778883823], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Unrecognized Windows Sockets error: 0: recv failed", 917, 3.168953243252583, 1.1778305824930961], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 1671, 5.774613816221446, 2.146297604521225], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:5000 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 3368, 11.639077997028027, 4.325990623595144], "isController": false}, {"data": ["500/Internal Server Error", 610, 2.1080277844973563, 0.7835078029670541], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Socket closed", 5307, 18.339841725127, 6.816517885813371], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Socket operation on nonsocket: connect", 919, 3.175864809759132, 1.1803994605356112], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 77855, 28937, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Software caused connection abort: recv failed", 16083, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Socket closed", 5307, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:5000 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 3368, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 1671, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Socket operation on nonsocket: connect", 919], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["packages/addPackage", 16426, 6158, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Software caused connection abort: recv failed", 3239, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:5000 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 914, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Socket closed", 847, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Socket operation on nonsocket: connect", 600, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 346], "isController": false}, {"data": ["deliveries/deleteDelivery", 8738, 3839, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Software caused connection abort: recv failed", 2315, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Socket closed", 594, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:5000 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 430, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 299, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Unrecognized Windows Sockets error: 0: recv failed", 197], "isController": false}, {"data": ["payments/addPayment", 10268, 1018, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Socket closed", 710, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Software caused connection abort: recv failed", 308, null, null, null, null, null, null], "isController": false}, {"data": ["packages/deletePackage", 7333, 3752, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Software caused connection abort: recv failed", 1821, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Socket closed", 882, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:5000 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 527, "500/Internal Server Error", 296, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 176], "isController": false}, {"data": ["deliveries/addDelivery", 9558, 2538, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Software caused connection abort: recv failed", 1481, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Socket closed", 820, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 112, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Unrecognized Windows Sockets error: 0: recv failed", 63, "400/Bad Request", 62], "isController": false}, {"data": ["payments/deletePayment", 8140, 3667, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Software caused connection abort: recv failed", 1774, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Socket closed", 802, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:5000 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 485, "500/Internal Server Error", 314, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 191], "isController": false}, {"data": ["users/login", 17392, 7965, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Software caused connection abort: recv failed", 5145, "Non HTTP response code: org.apache.http.conn.HttpHostConnectException/Non HTTP response message: Connect to localhost:5000 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused: connect", 1012, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Socket closed", 652, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 547, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Unrecognized Windows Sockets error: 0: recv failed", 323], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
