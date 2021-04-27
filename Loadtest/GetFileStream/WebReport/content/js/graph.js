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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 234.0, "minX": 0.0, "maxY": 1544.0, "series": [{"data": [[0.0, 234.0], [0.1, 234.0], [0.2, 266.0], [0.3, 267.0], [0.4, 274.0], [0.5, 279.0], [0.6, 284.0], [0.7, 284.0], [0.8, 284.0], [0.9, 286.0], [1.0, 288.0], [1.1, 289.0], [1.2, 289.0], [1.3, 289.0], [1.4, 291.0], [1.5, 295.0], [1.6, 295.0], [1.7, 296.0], [1.8, 296.0], [1.9, 296.0], [2.0, 298.0], [2.1, 298.0], [2.2, 299.0], [2.3, 300.0], [2.4, 301.0], [2.5, 301.0], [2.6, 302.0], [2.7, 304.0], [2.8, 305.0], [2.9, 306.0], [3.0, 307.0], [3.1, 307.0], [3.2, 307.0], [3.3, 307.0], [3.4, 308.0], [3.5, 308.0], [3.6, 309.0], [3.7, 309.0], [3.8, 309.0], [3.9, 309.0], [4.0, 310.0], [4.1, 310.0], [4.2, 310.0], [4.3, 310.0], [4.4, 311.0], [4.5, 311.0], [4.6, 311.0], [4.7, 311.0], [4.8, 312.0], [4.9, 312.0], [5.0, 312.0], [5.1, 312.0], [5.2, 312.0], [5.3, 313.0], [5.4, 313.0], [5.5, 313.0], [5.6, 314.0], [5.7, 314.0], [5.8, 314.0], [5.9, 314.0], [6.0, 314.0], [6.1, 314.0], [6.2, 314.0], [6.3, 315.0], [6.4, 315.0], [6.5, 315.0], [6.6, 315.0], [6.7, 315.0], [6.8, 315.0], [6.9, 315.0], [7.0, 316.0], [7.1, 316.0], [7.2, 316.0], [7.3, 316.0], [7.4, 316.0], [7.5, 316.0], [7.6, 316.0], [7.7, 317.0], [7.8, 317.0], [7.9, 317.0], [8.0, 317.0], [8.1, 317.0], [8.2, 317.0], [8.3, 317.0], [8.4, 317.0], [8.5, 317.0], [8.6, 317.0], [8.7, 318.0], [8.8, 318.0], [8.9, 319.0], [9.0, 319.0], [9.1, 319.0], [9.2, 319.0], [9.3, 319.0], [9.4, 319.0], [9.5, 319.0], [9.6, 319.0], [9.7, 319.0], [9.8, 319.0], [9.9, 319.0], [10.0, 319.0], [10.1, 320.0], [10.2, 320.0], [10.3, 320.0], [10.4, 320.0], [10.5, 320.0], [10.6, 320.0], [10.7, 320.0], [10.8, 320.0], [10.9, 321.0], [11.0, 321.0], [11.1, 321.0], [11.2, 321.0], [11.3, 321.0], [11.4, 321.0], [11.5, 321.0], [11.6, 321.0], [11.7, 321.0], [11.8, 321.0], [11.9, 321.0], [12.0, 321.0], [12.1, 322.0], [12.2, 322.0], [12.3, 322.0], [12.4, 322.0], [12.5, 322.0], [12.6, 322.0], [12.7, 323.0], [12.8, 323.0], [12.9, 323.0], [13.0, 323.0], [13.1, 323.0], [13.2, 323.0], [13.3, 323.0], [13.4, 323.0], [13.5, 323.0], [13.6, 323.0], [13.7, 323.0], [13.8, 324.0], [13.9, 324.0], [14.0, 324.0], [14.1, 324.0], [14.2, 324.0], [14.3, 324.0], [14.4, 324.0], [14.5, 324.0], [14.6, 324.0], [14.7, 324.0], [14.8, 324.0], [14.9, 324.0], [15.0, 324.0], [15.1, 324.0], [15.2, 324.0], [15.3, 324.0], [15.4, 325.0], [15.5, 325.0], [15.6, 325.0], [15.7, 325.0], [15.8, 325.0], [15.9, 325.0], [16.0, 325.0], [16.1, 325.0], [16.2, 325.0], [16.3, 325.0], [16.4, 325.0], [16.5, 325.0], [16.6, 325.0], [16.7, 325.0], [16.8, 325.0], [16.9, 325.0], [17.0, 325.0], [17.1, 326.0], [17.2, 326.0], [17.3, 326.0], [17.4, 326.0], [17.5, 326.0], [17.6, 326.0], [17.7, 326.0], [17.8, 326.0], [17.9, 326.0], [18.0, 326.0], [18.1, 326.0], [18.2, 326.0], [18.3, 326.0], [18.4, 327.0], [18.5, 327.0], [18.6, 327.0], [18.7, 327.0], [18.8, 327.0], [18.9, 327.0], [19.0, 327.0], [19.1, 327.0], [19.2, 327.0], [19.3, 327.0], [19.4, 327.0], [19.5, 327.0], [19.6, 327.0], [19.7, 327.0], [19.8, 327.0], [19.9, 327.0], [20.0, 327.0], [20.1, 327.0], [20.2, 327.0], [20.3, 328.0], [20.4, 328.0], [20.5, 328.0], [20.6, 328.0], [20.7, 328.0], [20.8, 328.0], [20.9, 328.0], [21.0, 328.0], [21.1, 328.0], [21.2, 328.0], [21.3, 328.0], [21.4, 328.0], [21.5, 328.0], [21.6, 329.0], [21.7, 329.0], [21.8, 329.0], [21.9, 329.0], [22.0, 329.0], [22.1, 329.0], [22.2, 329.0], [22.3, 329.0], [22.4, 329.0], [22.5, 329.0], [22.6, 329.0], [22.7, 329.0], [22.8, 330.0], [22.9, 330.0], [23.0, 330.0], [23.1, 330.0], [23.2, 330.0], [23.3, 330.0], [23.4, 330.0], [23.5, 330.0], [23.6, 330.0], [23.7, 330.0], [23.8, 330.0], [23.9, 330.0], [24.0, 330.0], [24.1, 330.0], [24.2, 331.0], [24.3, 331.0], [24.4, 331.0], [24.5, 331.0], [24.6, 331.0], [24.7, 331.0], [24.8, 331.0], [24.9, 331.0], [25.0, 331.0], [25.1, 331.0], [25.2, 331.0], [25.3, 331.0], [25.4, 331.0], [25.5, 331.0], [25.6, 332.0], [25.7, 332.0], [25.8, 332.0], [25.9, 332.0], [26.0, 332.0], [26.1, 332.0], [26.2, 332.0], [26.3, 332.0], [26.4, 332.0], [26.5, 332.0], [26.6, 333.0], [26.7, 333.0], [26.8, 333.0], [26.9, 333.0], [27.0, 333.0], [27.1, 333.0], [27.2, 333.0], [27.3, 333.0], [27.4, 333.0], [27.5, 333.0], [27.6, 333.0], [27.7, 333.0], [27.8, 333.0], [27.9, 333.0], [28.0, 333.0], [28.1, 333.0], [28.2, 333.0], [28.3, 334.0], [28.4, 334.0], [28.5, 334.0], [28.6, 334.0], [28.7, 334.0], [28.8, 334.0], [28.9, 334.0], [29.0, 334.0], [29.1, 334.0], [29.2, 334.0], [29.3, 334.0], [29.4, 334.0], [29.5, 334.0], [29.6, 334.0], [29.7, 334.0], [29.8, 334.0], [29.9, 334.0], [30.0, 334.0], [30.1, 334.0], [30.2, 334.0], [30.3, 335.0], [30.4, 335.0], [30.5, 335.0], [30.6, 335.0], [30.7, 335.0], [30.8, 335.0], [30.9, 335.0], [31.0, 335.0], [31.1, 335.0], [31.2, 335.0], [31.3, 335.0], [31.4, 335.0], [31.5, 335.0], [31.6, 335.0], [31.7, 335.0], [31.8, 335.0], [31.9, 335.0], [32.0, 336.0], [32.1, 336.0], [32.2, 336.0], [32.3, 336.0], [32.4, 336.0], [32.5, 336.0], [32.6, 336.0], [32.7, 336.0], [32.8, 336.0], [32.9, 336.0], [33.0, 336.0], [33.1, 336.0], [33.2, 336.0], [33.3, 336.0], [33.4, 336.0], [33.5, 336.0], [33.6, 336.0], [33.7, 337.0], [33.8, 337.0], [33.9, 337.0], [34.0, 337.0], [34.1, 337.0], [34.2, 337.0], [34.3, 337.0], [34.4, 337.0], [34.5, 337.0], [34.6, 337.0], [34.7, 337.0], [34.8, 337.0], [34.9, 337.0], [35.0, 337.0], [35.1, 337.0], [35.2, 337.0], [35.3, 337.0], [35.4, 337.0], [35.5, 337.0], [35.6, 337.0], [35.7, 337.0], [35.8, 337.0], [35.9, 337.0], [36.0, 337.0], [36.1, 337.0], [36.2, 338.0], [36.3, 338.0], [36.4, 338.0], [36.5, 338.0], [36.6, 338.0], [36.7, 338.0], [36.8, 338.0], [36.9, 338.0], [37.0, 338.0], [37.1, 338.0], [37.2, 338.0], [37.3, 338.0], [37.4, 338.0], [37.5, 338.0], [37.6, 338.0], [37.7, 338.0], [37.8, 338.0], [37.9, 338.0], [38.0, 338.0], [38.1, 338.0], [38.2, 338.0], [38.3, 339.0], [38.4, 339.0], [38.5, 339.0], [38.6, 339.0], [38.7, 339.0], [38.8, 339.0], [38.9, 339.0], [39.0, 339.0], [39.1, 339.0], [39.2, 339.0], [39.3, 339.0], [39.4, 339.0], [39.5, 339.0], [39.6, 339.0], [39.7, 339.0], [39.8, 339.0], [39.9, 339.0], [40.0, 339.0], [40.1, 339.0], [40.2, 339.0], [40.3, 340.0], [40.4, 340.0], [40.5, 340.0], [40.6, 340.0], [40.7, 340.0], [40.8, 340.0], [40.9, 340.0], [41.0, 340.0], [41.1, 340.0], [41.2, 340.0], [41.3, 340.0], [41.4, 340.0], [41.5, 340.0], [41.6, 340.0], [41.7, 340.0], [41.8, 340.0], [41.9, 340.0], [42.0, 340.0], [42.1, 340.0], [42.2, 340.0], [42.3, 340.0], [42.4, 340.0], [42.5, 340.0], [42.6, 340.0], [42.7, 340.0], [42.8, 340.0], [42.9, 340.0], [43.0, 340.0], [43.1, 340.0], [43.2, 340.0], [43.3, 340.0], [43.4, 341.0], [43.5, 341.0], [43.6, 341.0], [43.7, 341.0], [43.8, 341.0], [43.9, 341.0], [44.0, 341.0], [44.1, 341.0], [44.2, 341.0], [44.3, 341.0], [44.4, 341.0], [44.5, 341.0], [44.6, 341.0], [44.7, 341.0], [44.8, 341.0], [44.9, 341.0], [45.0, 341.0], [45.1, 341.0], [45.2, 341.0], [45.3, 342.0], [45.4, 342.0], [45.5, 342.0], [45.6, 342.0], [45.7, 342.0], [45.8, 342.0], [45.9, 342.0], [46.0, 342.0], [46.1, 342.0], [46.2, 342.0], [46.3, 342.0], [46.4, 342.0], [46.5, 342.0], [46.6, 343.0], [46.7, 343.0], [46.8, 343.0], [46.9, 343.0], [47.0, 343.0], [47.1, 343.0], [47.2, 343.0], [47.3, 343.0], [47.4, 343.0], [47.5, 343.0], [47.6, 343.0], [47.7, 343.0], [47.8, 343.0], [47.9, 343.0], [48.0, 343.0], [48.1, 343.0], [48.2, 343.0], [48.3, 343.0], [48.4, 343.0], [48.5, 343.0], [48.6, 343.0], [48.7, 343.0], [48.8, 343.0], [48.9, 343.0], [49.0, 343.0], [49.1, 343.0], [49.2, 343.0], [49.3, 343.0], [49.4, 343.0], [49.5, 343.0], [49.6, 343.0], [49.7, 343.0], [49.8, 343.0], [49.9, 344.0], [50.0, 344.0], [50.1, 344.0], [50.2, 344.0], [50.3, 344.0], [50.4, 344.0], [50.5, 344.0], [50.6, 344.0], [50.7, 344.0], [50.8, 344.0], [50.9, 344.0], [51.0, 344.0], [51.1, 344.0], [51.2, 344.0], [51.3, 344.0], [51.4, 345.0], [51.5, 345.0], [51.6, 345.0], [51.7, 345.0], [51.8, 345.0], [51.9, 345.0], [52.0, 345.0], [52.1, 345.0], [52.2, 345.0], [52.3, 345.0], [52.4, 345.0], [52.5, 345.0], [52.6, 345.0], [52.7, 345.0], [52.8, 345.0], [52.9, 346.0], [53.0, 346.0], [53.1, 346.0], [53.2, 346.0], [53.3, 346.0], [53.4, 346.0], [53.5, 346.0], [53.6, 346.0], [53.7, 346.0], [53.8, 346.0], [53.9, 346.0], [54.0, 346.0], [54.1, 346.0], [54.2, 346.0], [54.3, 346.0], [54.4, 346.0], [54.5, 346.0], [54.6, 346.0], [54.7, 346.0], [54.8, 346.0], [54.9, 347.0], [55.0, 347.0], [55.1, 347.0], [55.2, 347.0], [55.3, 347.0], [55.4, 347.0], [55.5, 347.0], [55.6, 347.0], [55.7, 347.0], [55.8, 347.0], [55.9, 347.0], [56.0, 347.0], [56.1, 347.0], [56.2, 347.0], [56.3, 347.0], [56.4, 347.0], [56.5, 347.0], [56.6, 347.0], [56.7, 347.0], [56.8, 347.0], [56.9, 347.0], [57.0, 347.0], [57.1, 347.0], [57.2, 348.0], [57.3, 348.0], [57.4, 348.0], [57.5, 348.0], [57.6, 348.0], [57.7, 348.0], [57.8, 348.0], [57.9, 348.0], [58.0, 348.0], [58.1, 348.0], [58.2, 348.0], [58.3, 348.0], [58.4, 348.0], [58.5, 348.0], [58.6, 348.0], [58.7, 348.0], [58.8, 348.0], [58.9, 348.0], [59.0, 348.0], [59.1, 349.0], [59.2, 349.0], [59.3, 349.0], [59.4, 349.0], [59.5, 349.0], [59.6, 349.0], [59.7, 349.0], [59.8, 349.0], [59.9, 349.0], [60.0, 349.0], [60.1, 349.0], [60.2, 349.0], [60.3, 349.0], [60.4, 349.0], [60.5, 349.0], [60.6, 349.0], [60.7, 349.0], [60.8, 350.0], [60.9, 350.0], [61.0, 350.0], [61.1, 350.0], [61.2, 350.0], [61.3, 350.0], [61.4, 350.0], [61.5, 350.0], [61.6, 350.0], [61.7, 350.0], [61.8, 350.0], [61.9, 350.0], [62.0, 350.0], [62.1, 350.0], [62.2, 351.0], [62.3, 351.0], [62.4, 351.0], [62.5, 351.0], [62.6, 351.0], [62.7, 351.0], [62.8, 351.0], [62.9, 351.0], [63.0, 351.0], [63.1, 351.0], [63.2, 351.0], [63.3, 351.0], [63.4, 351.0], [63.5, 351.0], [63.6, 351.0], [63.7, 351.0], [63.8, 351.0], [63.9, 351.0], [64.0, 351.0], [64.1, 351.0], [64.2, 351.0], [64.3, 351.0], [64.4, 351.0], [64.5, 351.0], [64.6, 352.0], [64.7, 352.0], [64.8, 352.0], [64.9, 352.0], [65.0, 352.0], [65.1, 352.0], [65.2, 352.0], [65.3, 352.0], [65.4, 352.0], [65.5, 352.0], [65.6, 352.0], [65.7, 352.0], [65.8, 352.0], [65.9, 352.0], [66.0, 352.0], [66.1, 352.0], [66.2, 352.0], [66.3, 352.0], [66.4, 353.0], [66.5, 353.0], [66.6, 353.0], [66.7, 353.0], [66.8, 353.0], [66.9, 353.0], [67.0, 353.0], [67.1, 353.0], [67.2, 353.0], [67.3, 353.0], [67.4, 353.0], [67.5, 353.0], [67.6, 353.0], [67.7, 353.0], [67.8, 353.0], [67.9, 353.0], [68.0, 353.0], [68.1, 353.0], [68.2, 353.0], [68.3, 353.0], [68.4, 353.0], [68.5, 353.0], [68.6, 353.0], [68.7, 354.0], [68.8, 354.0], [68.9, 354.0], [69.0, 354.0], [69.1, 354.0], [69.2, 354.0], [69.3, 354.0], [69.4, 354.0], [69.5, 354.0], [69.6, 354.0], [69.7, 354.0], [69.8, 354.0], [69.9, 354.0], [70.0, 354.0], [70.1, 354.0], [70.2, 354.0], [70.3, 354.0], [70.4, 354.0], [70.5, 354.0], [70.6, 354.0], [70.7, 354.0], [70.8, 355.0], [70.9, 355.0], [71.0, 355.0], [71.1, 355.0], [71.2, 355.0], [71.3, 355.0], [71.4, 355.0], [71.5, 355.0], [71.6, 355.0], [71.7, 355.0], [71.8, 355.0], [71.9, 355.0], [72.0, 355.0], [72.1, 356.0], [72.2, 356.0], [72.3, 356.0], [72.4, 356.0], [72.5, 356.0], [72.6, 356.0], [72.7, 356.0], [72.8, 356.0], [72.9, 356.0], [73.0, 356.0], [73.1, 356.0], [73.2, 356.0], [73.3, 356.0], [73.4, 356.0], [73.5, 357.0], [73.6, 357.0], [73.7, 357.0], [73.8, 357.0], [73.9, 357.0], [74.0, 357.0], [74.1, 357.0], [74.2, 357.0], [74.3, 357.0], [74.4, 357.0], [74.5, 357.0], [74.6, 357.0], [74.7, 357.0], [74.8, 358.0], [74.9, 358.0], [75.0, 358.0], [75.1, 358.0], [75.2, 358.0], [75.3, 358.0], [75.4, 358.0], [75.5, 358.0], [75.6, 358.0], [75.7, 358.0], [75.8, 358.0], [75.9, 358.0], [76.0, 358.0], [76.1, 358.0], [76.2, 358.0], [76.3, 358.0], [76.4, 358.0], [76.5, 358.0], [76.6, 359.0], [76.7, 359.0], [76.8, 359.0], [76.9, 359.0], [77.0, 359.0], [77.1, 359.0], [77.2, 359.0], [77.3, 359.0], [77.4, 359.0], [77.5, 359.0], [77.6, 359.0], [77.7, 359.0], [77.8, 359.0], [77.9, 359.0], [78.0, 360.0], [78.1, 360.0], [78.2, 360.0], [78.3, 360.0], [78.4, 360.0], [78.5, 360.0], [78.6, 360.0], [78.7, 360.0], [78.8, 360.0], [78.9, 361.0], [79.0, 361.0], [79.1, 361.0], [79.2, 361.0], [79.3, 361.0], [79.4, 361.0], [79.5, 361.0], [79.6, 361.0], [79.7, 361.0], [79.8, 361.0], [79.9, 361.0], [80.0, 361.0], [80.1, 361.0], [80.2, 362.0], [80.3, 362.0], [80.4, 362.0], [80.5, 362.0], [80.6, 362.0], [80.7, 362.0], [80.8, 362.0], [80.9, 362.0], [81.0, 362.0], [81.1, 362.0], [81.2, 363.0], [81.3, 363.0], [81.4, 363.0], [81.5, 363.0], [81.6, 363.0], [81.7, 363.0], [81.8, 363.0], [81.9, 363.0], [82.0, 364.0], [82.1, 364.0], [82.2, 364.0], [82.3, 364.0], [82.4, 364.0], [82.5, 364.0], [82.6, 364.0], [82.7, 365.0], [82.8, 365.0], [82.9, 365.0], [83.0, 365.0], [83.1, 365.0], [83.2, 366.0], [83.3, 366.0], [83.4, 366.0], [83.5, 366.0], [83.6, 366.0], [83.7, 366.0], [83.8, 366.0], [83.9, 367.0], [84.0, 367.0], [84.1, 367.0], [84.2, 367.0], [84.3, 367.0], [84.4, 367.0], [84.5, 367.0], [84.6, 368.0], [84.7, 368.0], [84.8, 368.0], [84.9, 368.0], [85.0, 368.0], [85.1, 368.0], [85.2, 368.0], [85.3, 368.0], [85.4, 368.0], [85.5, 368.0], [85.6, 368.0], [85.7, 368.0], [85.8, 369.0], [85.9, 369.0], [86.0, 369.0], [86.1, 369.0], [86.2, 369.0], [86.3, 369.0], [86.4, 369.0], [86.5, 369.0], [86.6, 370.0], [86.7, 370.0], [86.8, 370.0], [86.9, 370.0], [87.0, 370.0], [87.1, 371.0], [87.2, 371.0], [87.3, 371.0], [87.4, 371.0], [87.5, 371.0], [87.6, 371.0], [87.7, 371.0], [87.8, 371.0], [87.9, 371.0], [88.0, 371.0], [88.1, 371.0], [88.2, 371.0], [88.3, 372.0], [88.4, 372.0], [88.5, 372.0], [88.6, 372.0], [88.7, 372.0], [88.8, 372.0], [88.9, 372.0], [89.0, 372.0], [89.1, 372.0], [89.2, 373.0], [89.3, 373.0], [89.4, 373.0], [89.5, 373.0], [89.6, 373.0], [89.7, 373.0], [89.8, 374.0], [89.9, 374.0], [90.0, 374.0], [90.1, 375.0], [90.2, 375.0], [90.3, 375.0], [90.4, 375.0], [90.5, 375.0], [90.6, 375.0], [90.7, 376.0], [90.8, 376.0], [90.9, 376.0], [91.0, 376.0], [91.1, 376.0], [91.2, 377.0], [91.3, 377.0], [91.4, 377.0], [91.5, 377.0], [91.6, 377.0], [91.7, 378.0], [91.8, 378.0], [91.9, 378.0], [92.0, 379.0], [92.1, 379.0], [92.2, 379.0], [92.3, 379.0], [92.4, 380.0], [92.5, 380.0], [92.6, 380.0], [92.7, 380.0], [92.8, 380.0], [92.9, 381.0], [93.0, 382.0], [93.1, 382.0], [93.2, 382.0], [93.3, 382.0], [93.4, 382.0], [93.5, 383.0], [93.6, 383.0], [93.7, 383.0], [93.8, 383.0], [93.9, 383.0], [94.0, 383.0], [94.1, 383.0], [94.2, 384.0], [94.3, 384.0], [94.4, 385.0], [94.5, 385.0], [94.6, 385.0], [94.7, 385.0], [94.8, 386.0], [94.9, 387.0], [95.0, 387.0], [95.1, 387.0], [95.2, 387.0], [95.3, 388.0], [95.4, 388.0], [95.5, 390.0], [95.6, 391.0], [95.7, 392.0], [95.8, 392.0], [95.9, 392.0], [96.0, 395.0], [96.1, 395.0], [96.2, 395.0], [96.3, 395.0], [96.4, 395.0], [96.5, 396.0], [96.6, 396.0], [96.7, 396.0], [96.8, 396.0], [96.9, 396.0], [97.0, 396.0], [97.1, 397.0], [97.2, 398.0], [97.3, 398.0], [97.4, 400.0], [97.5, 400.0], [97.6, 400.0], [97.7, 403.0], [97.8, 405.0], [97.9, 405.0], [98.0, 408.0], [98.1, 408.0], [98.2, 408.0], [98.3, 409.0], [98.4, 410.0], [98.5, 412.0], [98.6, 413.0], [98.7, 414.0], [98.8, 414.0], [98.9, 418.0], [99.0, 418.0], [99.1, 421.0], [99.2, 425.0], [99.3, 426.0], [99.4, 426.0], [99.5, 438.0], [99.6, 438.0], [99.7, 449.0], [99.8, 617.0], [99.9, 1544.0]], "isOverall": false, "label": "GetFileStream", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 794.0, "series": [{"data": [[600.0, 1.0], [300.0, 794.0], [1500.0, 1.0], [200.0, 19.0], [400.0, 20.0]], "isOverall": false, "label": "GetFileStream", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 833.0, "series": [{"data": [[0.0, 833.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 4.908071748878922, "minX": 1.6195137E12, "maxY": 4.974293059125964, "series": [{"data": [[1.6195137E12, 4.908071748878922], [1.61951376E12, 4.974293059125964]], "isOverall": false, "label": "Scenario 1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61951376E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 234.0, "minX": 1.0, "maxY": 616.8, "series": [{"data": [[2.0, 616.8], [4.0, 330.00000000000006], [1.0, 234.0], [5.0, 346.5873605947956], [3.0, 295.8]], "isOverall": false, "label": "GetFileStream", "isController": false}, {"data": [[4.938922155688623, 347.22395209580816]], "isOverall": false, "label": "GetFileStream-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 2334.0, "minX": 1.6195137E12, "maxY": 9154514.233333332, "series": [{"data": [[1.6195137E12, 9154514.233333332], [1.61951376E12, 7984542.683333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6195137E12, 2676.0], [1.61951376E12, 2334.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61951376E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 340.0231362467864, "minX": 1.6195137E12, "maxY": 353.50448430493276, "series": [{"data": [[1.6195137E12, 353.50448430493276], [1.61951376E12, 340.0231362467864]], "isOverall": false, "label": "GetFileStream", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61951376E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 4.272493573264782, "minX": 1.6195137E12, "maxY": 9.105381165919281, "series": [{"data": [[1.6195137E12, 9.105381165919281], [1.61951376E12, 4.272493573264782]], "isOverall": false, "label": "GetFileStream", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61951376E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.6195137E12, "maxY": 3.5515695067264637, "series": [{"data": [[1.6195137E12, 3.5515695067264637], [1.61951376E12, 0.0]], "isOverall": false, "label": "GetFileStream", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61951376E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 234.0, "minX": 1.6195137E12, "maxY": 1544.0, "series": [{"data": [[1.6195137E12, 1544.0], [1.61951376E12, 425.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6195137E12, 383.3], [1.61951376E12, 363.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6195137E12, 438.0], [1.61951376E12, 388.8000000000002]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6195137E12, 398.0], [1.61951376E12, 370.5]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6195137E12, 266.0], [1.61951376E12, 234.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6195137E12, 348.0], [1.61951376E12, 340.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61951376E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 312.5, "minX": 2.0, "maxY": 1080.5, "series": [{"data": [[2.0, 1080.5], [8.0, 312.5], [16.0, 342.5], [11.0, 319.0], [12.0, 346.5], [13.0, 358.0], [14.0, 344.0], [15.0, 343.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 4.0, "minX": 2.0, "maxY": 840.5, "series": [{"data": [[2.0, 840.5], [8.0, 4.5], [16.0, 4.0], [11.0, 4.0], [12.0, 5.0], [13.0, 4.0], [14.0, 4.0], [15.0, 4.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 6.4, "minX": 1.6195137E12, "maxY": 7.516666666666667, "series": [{"data": [[1.6195137E12, 7.516666666666667], [1.61951376E12, 6.4]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61951376E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 6.483333333333333, "minX": 1.6195137E12, "maxY": 7.433333333333334, "series": [{"data": [[1.6195137E12, 7.433333333333334], [1.61951376E12, 6.483333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61951376E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 6.483333333333333, "minX": 1.6195137E12, "maxY": 7.433333333333334, "series": [{"data": [[1.6195137E12, 7.433333333333334], [1.61951376E12, 6.483333333333333]], "isOverall": false, "label": "GetFileStream-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61951376E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 6.483333333333333, "minX": 1.6195137E12, "maxY": 7.433333333333334, "series": [{"data": [[1.6195137E12, 7.433333333333334], [1.61951376E12, 6.483333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61951376E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

