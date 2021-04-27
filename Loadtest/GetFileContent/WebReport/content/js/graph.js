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
        data: {"result": {"minY": 242.0, "minX": 0.0, "maxY": 1540.0, "series": [{"data": [[0.0, 242.0], [0.1, 242.0], [0.2, 244.0], [0.3, 262.0], [0.4, 266.0], [0.5, 272.0], [0.6, 273.0], [0.7, 273.0], [0.8, 276.0], [0.9, 280.0], [1.0, 283.0], [1.1, 288.0], [1.2, 288.0], [1.3, 288.0], [1.4, 288.0], [1.5, 289.0], [1.6, 290.0], [1.7, 291.0], [1.8, 291.0], [1.9, 291.0], [2.0, 291.0], [2.1, 294.0], [2.2, 295.0], [2.3, 295.0], [2.4, 297.0], [2.5, 297.0], [2.6, 297.0], [2.7, 298.0], [2.8, 300.0], [2.9, 300.0], [3.0, 300.0], [3.1, 301.0], [3.2, 301.0], [3.3, 301.0], [3.4, 301.0], [3.5, 302.0], [3.6, 302.0], [3.7, 302.0], [3.8, 302.0], [3.9, 303.0], [4.0, 303.0], [4.1, 303.0], [4.2, 304.0], [4.3, 304.0], [4.4, 304.0], [4.5, 304.0], [4.6, 304.0], [4.7, 304.0], [4.8, 305.0], [4.9, 305.0], [5.0, 305.0], [5.1, 305.0], [5.2, 306.0], [5.3, 306.0], [5.4, 306.0], [5.5, 306.0], [5.6, 306.0], [5.7, 306.0], [5.8, 306.0], [5.9, 306.0], [6.0, 307.0], [6.1, 307.0], [6.2, 307.0], [6.3, 307.0], [6.4, 307.0], [6.5, 307.0], [6.6, 308.0], [6.7, 308.0], [6.8, 308.0], [6.9, 308.0], [7.0, 308.0], [7.1, 309.0], [7.2, 309.0], [7.3, 309.0], [7.4, 309.0], [7.5, 310.0], [7.6, 310.0], [7.7, 310.0], [7.8, 310.0], [7.9, 310.0], [8.0, 311.0], [8.1, 311.0], [8.2, 311.0], [8.3, 311.0], [8.4, 311.0], [8.5, 311.0], [8.6, 311.0], [8.7, 311.0], [8.8, 311.0], [8.9, 311.0], [9.0, 311.0], [9.1, 311.0], [9.2, 311.0], [9.3, 312.0], [9.4, 312.0], [9.5, 312.0], [9.6, 312.0], [9.7, 312.0], [9.8, 312.0], [9.9, 313.0], [10.0, 313.0], [10.1, 313.0], [10.2, 313.0], [10.3, 313.0], [10.4, 313.0], [10.5, 313.0], [10.6, 314.0], [10.7, 314.0], [10.8, 314.0], [10.9, 314.0], [11.0, 314.0], [11.1, 314.0], [11.2, 314.0], [11.3, 314.0], [11.4, 314.0], [11.5, 315.0], [11.6, 315.0], [11.7, 315.0], [11.8, 315.0], [11.9, 315.0], [12.0, 316.0], [12.1, 316.0], [12.2, 316.0], [12.3, 316.0], [12.4, 316.0], [12.5, 316.0], [12.6, 316.0], [12.7, 316.0], [12.8, 316.0], [12.9, 316.0], [13.0, 317.0], [13.1, 317.0], [13.2, 317.0], [13.3, 317.0], [13.4, 317.0], [13.5, 317.0], [13.6, 317.0], [13.7, 317.0], [13.8, 317.0], [13.9, 317.0], [14.0, 317.0], [14.1, 317.0], [14.2, 317.0], [14.3, 318.0], [14.4, 318.0], [14.5, 318.0], [14.6, 318.0], [14.7, 318.0], [14.8, 318.0], [14.9, 318.0], [15.0, 318.0], [15.1, 318.0], [15.2, 318.0], [15.3, 319.0], [15.4, 319.0], [15.5, 319.0], [15.6, 319.0], [15.7, 319.0], [15.8, 319.0], [15.9, 319.0], [16.0, 319.0], [16.1, 319.0], [16.2, 319.0], [16.3, 319.0], [16.4, 320.0], [16.5, 320.0], [16.6, 320.0], [16.7, 320.0], [16.8, 320.0], [16.9, 320.0], [17.0, 320.0], [17.1, 320.0], [17.2, 320.0], [17.3, 320.0], [17.4, 320.0], [17.5, 320.0], [17.6, 320.0], [17.7, 320.0], [17.8, 320.0], [17.9, 320.0], [18.0, 321.0], [18.1, 321.0], [18.2, 321.0], [18.3, 321.0], [18.4, 321.0], [18.5, 321.0], [18.6, 321.0], [18.7, 321.0], [18.8, 321.0], [18.9, 321.0], [19.0, 321.0], [19.1, 321.0], [19.2, 322.0], [19.3, 322.0], [19.4, 322.0], [19.5, 323.0], [19.6, 323.0], [19.7, 323.0], [19.8, 323.0], [19.9, 323.0], [20.0, 323.0], [20.1, 323.0], [20.2, 323.0], [20.3, 323.0], [20.4, 324.0], [20.5, 324.0], [20.6, 324.0], [20.7, 324.0], [20.8, 324.0], [20.9, 324.0], [21.0, 324.0], [21.1, 324.0], [21.2, 325.0], [21.3, 325.0], [21.4, 325.0], [21.5, 325.0], [21.6, 325.0], [21.7, 325.0], [21.8, 325.0], [21.9, 325.0], [22.0, 325.0], [22.1, 325.0], [22.2, 325.0], [22.3, 325.0], [22.4, 325.0], [22.5, 325.0], [22.6, 325.0], [22.7, 325.0], [22.8, 325.0], [22.9, 326.0], [23.0, 326.0], [23.1, 326.0], [23.2, 326.0], [23.3, 326.0], [23.4, 326.0], [23.5, 326.0], [23.6, 326.0], [23.7, 327.0], [23.8, 327.0], [23.9, 327.0], [24.0, 327.0], [24.1, 327.0], [24.2, 327.0], [24.3, 327.0], [24.4, 327.0], [24.5, 327.0], [24.6, 327.0], [24.7, 327.0], [24.8, 327.0], [24.9, 327.0], [25.0, 327.0], [25.1, 327.0], [25.2, 327.0], [25.3, 328.0], [25.4, 328.0], [25.5, 328.0], [25.6, 328.0], [25.7, 328.0], [25.8, 328.0], [25.9, 328.0], [26.0, 328.0], [26.1, 328.0], [26.2, 328.0], [26.3, 328.0], [26.4, 328.0], [26.5, 328.0], [26.6, 328.0], [26.7, 328.0], [26.8, 328.0], [26.9, 328.0], [27.0, 328.0], [27.1, 328.0], [27.2, 328.0], [27.3, 328.0], [27.4, 328.0], [27.5, 329.0], [27.6, 329.0], [27.7, 329.0], [27.8, 329.0], [27.9, 329.0], [28.0, 329.0], [28.1, 329.0], [28.2, 329.0], [28.3, 329.0], [28.4, 329.0], [28.5, 329.0], [28.6, 329.0], [28.7, 329.0], [28.8, 330.0], [28.9, 330.0], [29.0, 330.0], [29.1, 330.0], [29.2, 330.0], [29.3, 330.0], [29.4, 330.0], [29.5, 330.0], [29.6, 330.0], [29.7, 330.0], [29.8, 330.0], [29.9, 330.0], [30.0, 330.0], [30.1, 330.0], [30.2, 331.0], [30.3, 331.0], [30.4, 331.0], [30.5, 331.0], [30.6, 331.0], [30.7, 331.0], [30.8, 331.0], [30.9, 331.0], [31.0, 331.0], [31.1, 331.0], [31.2, 331.0], [31.3, 331.0], [31.4, 331.0], [31.5, 331.0], [31.6, 332.0], [31.7, 332.0], [31.8, 332.0], [31.9, 332.0], [32.0, 332.0], [32.1, 332.0], [32.2, 332.0], [32.3, 332.0], [32.4, 332.0], [32.5, 332.0], [32.6, 332.0], [32.7, 332.0], [32.8, 332.0], [32.9, 332.0], [33.0, 332.0], [33.1, 332.0], [33.2, 332.0], [33.3, 332.0], [33.4, 332.0], [33.5, 332.0], [33.6, 332.0], [33.7, 333.0], [33.8, 333.0], [33.9, 333.0], [34.0, 333.0], [34.1, 333.0], [34.2, 333.0], [34.3, 333.0], [34.4, 333.0], [34.5, 333.0], [34.6, 333.0], [34.7, 333.0], [34.8, 333.0], [34.9, 333.0], [35.0, 333.0], [35.1, 333.0], [35.2, 333.0], [35.3, 333.0], [35.4, 334.0], [35.5, 334.0], [35.6, 334.0], [35.7, 334.0], [35.8, 334.0], [35.9, 334.0], [36.0, 334.0], [36.1, 334.0], [36.2, 334.0], [36.3, 334.0], [36.4, 334.0], [36.5, 334.0], [36.6, 334.0], [36.7, 334.0], [36.8, 334.0], [36.9, 334.0], [37.0, 334.0], [37.1, 334.0], [37.2, 334.0], [37.3, 335.0], [37.4, 335.0], [37.5, 335.0], [37.6, 335.0], [37.7, 335.0], [37.8, 335.0], [37.9, 335.0], [38.0, 335.0], [38.1, 335.0], [38.2, 335.0], [38.3, 335.0], [38.4, 335.0], [38.5, 335.0], [38.6, 335.0], [38.7, 335.0], [38.8, 335.0], [38.9, 336.0], [39.0, 336.0], [39.1, 336.0], [39.2, 336.0], [39.3, 336.0], [39.4, 336.0], [39.5, 336.0], [39.6, 336.0], [39.7, 336.0], [39.8, 336.0], [39.9, 336.0], [40.0, 336.0], [40.1, 336.0], [40.2, 336.0], [40.3, 336.0], [40.4, 336.0], [40.5, 336.0], [40.6, 336.0], [40.7, 336.0], [40.8, 336.0], [40.9, 337.0], [41.0, 337.0], [41.1, 337.0], [41.2, 337.0], [41.3, 337.0], [41.4, 337.0], [41.5, 337.0], [41.6, 337.0], [41.7, 337.0], [41.8, 337.0], [41.9, 337.0], [42.0, 337.0], [42.1, 337.0], [42.2, 337.0], [42.3, 337.0], [42.4, 337.0], [42.5, 337.0], [42.6, 337.0], [42.7, 337.0], [42.8, 337.0], [42.9, 337.0], [43.0, 338.0], [43.1, 338.0], [43.2, 338.0], [43.3, 338.0], [43.4, 338.0], [43.5, 338.0], [43.6, 338.0], [43.7, 338.0], [43.8, 338.0], [43.9, 338.0], [44.0, 338.0], [44.1, 338.0], [44.2, 338.0], [44.3, 338.0], [44.4, 338.0], [44.5, 338.0], [44.6, 338.0], [44.7, 338.0], [44.8, 339.0], [44.9, 339.0], [45.0, 339.0], [45.1, 339.0], [45.2, 339.0], [45.3, 339.0], [45.4, 339.0], [45.5, 339.0], [45.6, 339.0], [45.7, 339.0], [45.8, 339.0], [45.9, 340.0], [46.0, 340.0], [46.1, 340.0], [46.2, 340.0], [46.3, 340.0], [46.4, 340.0], [46.5, 340.0], [46.6, 340.0], [46.7, 340.0], [46.8, 340.0], [46.9, 340.0], [47.0, 340.0], [47.1, 340.0], [47.2, 340.0], [47.3, 340.0], [47.4, 340.0], [47.5, 340.0], [47.6, 340.0], [47.7, 340.0], [47.8, 340.0], [47.9, 340.0], [48.0, 340.0], [48.1, 341.0], [48.2, 341.0], [48.3, 341.0], [48.4, 341.0], [48.5, 341.0], [48.6, 341.0], [48.7, 341.0], [48.8, 341.0], [48.9, 341.0], [49.0, 341.0], [49.1, 341.0], [49.2, 341.0], [49.3, 341.0], [49.4, 341.0], [49.5, 341.0], [49.6, 341.0], [49.7, 341.0], [49.8, 341.0], [49.9, 341.0], [50.0, 342.0], [50.1, 342.0], [50.2, 342.0], [50.3, 342.0], [50.4, 342.0], [50.5, 342.0], [50.6, 342.0], [50.7, 342.0], [50.8, 342.0], [50.9, 342.0], [51.0, 342.0], [51.1, 342.0], [51.2, 342.0], [51.3, 342.0], [51.4, 342.0], [51.5, 343.0], [51.6, 343.0], [51.7, 343.0], [51.8, 343.0], [51.9, 343.0], [52.0, 343.0], [52.1, 343.0], [52.2, 343.0], [52.3, 343.0], [52.4, 343.0], [52.5, 343.0], [52.6, 343.0], [52.7, 343.0], [52.8, 343.0], [52.9, 343.0], [53.0, 343.0], [53.1, 343.0], [53.2, 343.0], [53.3, 343.0], [53.4, 344.0], [53.5, 344.0], [53.6, 344.0], [53.7, 344.0], [53.8, 344.0], [53.9, 344.0], [54.0, 344.0], [54.1, 344.0], [54.2, 344.0], [54.3, 344.0], [54.4, 344.0], [54.5, 344.0], [54.6, 344.0], [54.7, 344.0], [54.8, 344.0], [54.9, 344.0], [55.0, 344.0], [55.1, 344.0], [55.2, 344.0], [55.3, 345.0], [55.4, 345.0], [55.5, 345.0], [55.6, 345.0], [55.7, 345.0], [55.8, 345.0], [55.9, 345.0], [56.0, 345.0], [56.1, 345.0], [56.2, 345.0], [56.3, 345.0], [56.4, 345.0], [56.5, 345.0], [56.6, 345.0], [56.7, 345.0], [56.8, 345.0], [56.9, 345.0], [57.0, 345.0], [57.1, 345.0], [57.2, 345.0], [57.3, 346.0], [57.4, 346.0], [57.5, 346.0], [57.6, 346.0], [57.7, 346.0], [57.8, 346.0], [57.9, 346.0], [58.0, 346.0], [58.1, 346.0], [58.2, 346.0], [58.3, 346.0], [58.4, 346.0], [58.5, 346.0], [58.6, 346.0], [58.7, 347.0], [58.8, 347.0], [58.9, 347.0], [59.0, 347.0], [59.1, 347.0], [59.2, 347.0], [59.3, 347.0], [59.4, 347.0], [59.5, 347.0], [59.6, 347.0], [59.7, 347.0], [59.8, 347.0], [59.9, 347.0], [60.0, 347.0], [60.1, 347.0], [60.2, 347.0], [60.3, 348.0], [60.4, 348.0], [60.5, 348.0], [60.6, 348.0], [60.7, 348.0], [60.8, 348.0], [60.9, 348.0], [61.0, 348.0], [61.1, 348.0], [61.2, 348.0], [61.3, 348.0], [61.4, 348.0], [61.5, 348.0], [61.6, 348.0], [61.7, 348.0], [61.8, 349.0], [61.9, 349.0], [62.0, 349.0], [62.1, 349.0], [62.2, 349.0], [62.3, 349.0], [62.4, 349.0], [62.5, 349.0], [62.6, 349.0], [62.7, 349.0], [62.8, 349.0], [62.9, 349.0], [63.0, 349.0], [63.1, 349.0], [63.2, 349.0], [63.3, 349.0], [63.4, 349.0], [63.5, 349.0], [63.6, 350.0], [63.7, 350.0], [63.8, 350.0], [63.9, 350.0], [64.0, 350.0], [64.1, 350.0], [64.2, 350.0], [64.3, 350.0], [64.4, 350.0], [64.5, 350.0], [64.6, 350.0], [64.7, 350.0], [64.8, 350.0], [64.9, 350.0], [65.0, 350.0], [65.1, 350.0], [65.2, 350.0], [65.3, 351.0], [65.4, 351.0], [65.5, 351.0], [65.6, 351.0], [65.7, 351.0], [65.8, 351.0], [65.9, 351.0], [66.0, 351.0], [66.1, 351.0], [66.2, 351.0], [66.3, 351.0], [66.4, 351.0], [66.5, 351.0], [66.6, 351.0], [66.7, 351.0], [66.8, 352.0], [66.9, 352.0], [67.0, 352.0], [67.1, 352.0], [67.2, 352.0], [67.3, 352.0], [67.4, 352.0], [67.5, 352.0], [67.6, 352.0], [67.7, 352.0], [67.8, 352.0], [67.9, 352.0], [68.0, 352.0], [68.1, 352.0], [68.2, 352.0], [68.3, 353.0], [68.4, 353.0], [68.5, 353.0], [68.6, 353.0], [68.7, 353.0], [68.8, 353.0], [68.9, 353.0], [69.0, 353.0], [69.1, 353.0], [69.2, 353.0], [69.3, 353.0], [69.4, 353.0], [69.5, 354.0], [69.6, 354.0], [69.7, 354.0], [69.8, 354.0], [69.9, 354.0], [70.0, 354.0], [70.1, 354.0], [70.2, 355.0], [70.3, 355.0], [70.4, 355.0], [70.5, 355.0], [70.6, 355.0], [70.7, 355.0], [70.8, 355.0], [70.9, 355.0], [71.0, 355.0], [71.1, 355.0], [71.2, 355.0], [71.3, 355.0], [71.4, 356.0], [71.5, 356.0], [71.6, 356.0], [71.7, 356.0], [71.8, 356.0], [71.9, 356.0], [72.0, 356.0], [72.1, 356.0], [72.2, 356.0], [72.3, 356.0], [72.4, 356.0], [72.5, 356.0], [72.6, 356.0], [72.7, 357.0], [72.8, 357.0], [72.9, 357.0], [73.0, 357.0], [73.1, 357.0], [73.2, 357.0], [73.3, 357.0], [73.4, 357.0], [73.5, 357.0], [73.6, 357.0], [73.7, 357.0], [73.8, 357.0], [73.9, 357.0], [74.0, 357.0], [74.1, 357.0], [74.2, 357.0], [74.3, 358.0], [74.4, 358.0], [74.5, 358.0], [74.6, 358.0], [74.7, 358.0], [74.8, 358.0], [74.9, 358.0], [75.0, 358.0], [75.1, 358.0], [75.2, 358.0], [75.3, 358.0], [75.4, 358.0], [75.5, 359.0], [75.6, 359.0], [75.7, 359.0], [75.8, 359.0], [75.9, 359.0], [76.0, 359.0], [76.1, 359.0], [76.2, 359.0], [76.3, 359.0], [76.4, 359.0], [76.5, 360.0], [76.6, 360.0], [76.7, 360.0], [76.8, 360.0], [76.9, 360.0], [77.0, 360.0], [77.1, 360.0], [77.2, 360.0], [77.3, 360.0], [77.4, 360.0], [77.5, 360.0], [77.6, 360.0], [77.7, 360.0], [77.8, 360.0], [77.9, 360.0], [78.0, 360.0], [78.1, 361.0], [78.2, 361.0], [78.3, 361.0], [78.4, 361.0], [78.5, 361.0], [78.6, 361.0], [78.7, 361.0], [78.8, 361.0], [78.9, 361.0], [79.0, 361.0], [79.1, 362.0], [79.2, 362.0], [79.3, 362.0], [79.4, 362.0], [79.5, 362.0], [79.6, 362.0], [79.7, 362.0], [79.8, 362.0], [79.9, 362.0], [80.0, 362.0], [80.1, 362.0], [80.2, 362.0], [80.3, 362.0], [80.4, 362.0], [80.5, 363.0], [80.6, 363.0], [80.7, 363.0], [80.8, 363.0], [80.9, 363.0], [81.0, 364.0], [81.1, 364.0], [81.2, 364.0], [81.3, 364.0], [81.4, 364.0], [81.5, 364.0], [81.6, 364.0], [81.7, 364.0], [81.8, 364.0], [81.9, 365.0], [82.0, 365.0], [82.1, 365.0], [82.2, 365.0], [82.3, 365.0], [82.4, 365.0], [82.5, 365.0], [82.6, 365.0], [82.7, 365.0], [82.8, 366.0], [82.9, 366.0], [83.0, 366.0], [83.1, 366.0], [83.2, 366.0], [83.3, 366.0], [83.4, 366.0], [83.5, 366.0], [83.6, 366.0], [83.7, 366.0], [83.8, 366.0], [83.9, 367.0], [84.0, 367.0], [84.1, 367.0], [84.2, 367.0], [84.3, 367.0], [84.4, 367.0], [84.5, 367.0], [84.6, 367.0], [84.7, 367.0], [84.8, 367.0], [84.9, 367.0], [85.0, 367.0], [85.1, 367.0], [85.2, 368.0], [85.3, 368.0], [85.4, 368.0], [85.5, 368.0], [85.6, 368.0], [85.7, 368.0], [85.8, 368.0], [85.9, 369.0], [86.0, 369.0], [86.1, 369.0], [86.2, 369.0], [86.3, 369.0], [86.4, 369.0], [86.5, 369.0], [86.6, 369.0], [86.7, 369.0], [86.8, 369.0], [86.9, 369.0], [87.0, 369.0], [87.1, 370.0], [87.2, 370.0], [87.3, 370.0], [87.4, 370.0], [87.5, 370.0], [87.6, 370.0], [87.7, 371.0], [87.8, 371.0], [87.9, 371.0], [88.0, 371.0], [88.1, 371.0], [88.2, 371.0], [88.3, 371.0], [88.4, 371.0], [88.5, 371.0], [88.6, 371.0], [88.7, 371.0], [88.8, 372.0], [88.9, 372.0], [89.0, 372.0], [89.1, 373.0], [89.2, 373.0], [89.3, 373.0], [89.4, 373.0], [89.5, 373.0], [89.6, 373.0], [89.7, 373.0], [89.8, 374.0], [89.9, 374.0], [90.0, 374.0], [90.1, 374.0], [90.2, 374.0], [90.3, 374.0], [90.4, 375.0], [90.5, 375.0], [90.6, 375.0], [90.7, 375.0], [90.8, 375.0], [90.9, 375.0], [91.0, 375.0], [91.1, 375.0], [91.2, 375.0], [91.3, 376.0], [91.4, 377.0], [91.5, 377.0], [91.6, 377.0], [91.7, 378.0], [91.8, 378.0], [91.9, 378.0], [92.0, 378.0], [92.1, 378.0], [92.2, 378.0], [92.3, 379.0], [92.4, 379.0], [92.5, 379.0], [92.6, 379.0], [92.7, 379.0], [92.8, 380.0], [92.9, 380.0], [93.0, 380.0], [93.1, 380.0], [93.2, 380.0], [93.3, 380.0], [93.4, 380.0], [93.5, 380.0], [93.6, 380.0], [93.7, 380.0], [93.8, 380.0], [93.9, 381.0], [94.0, 382.0], [94.1, 382.0], [94.2, 382.0], [94.3, 382.0], [94.4, 382.0], [94.5, 383.0], [94.6, 383.0], [94.7, 384.0], [94.8, 385.0], [94.9, 385.0], [95.0, 385.0], [95.1, 387.0], [95.2, 388.0], [95.3, 388.0], [95.4, 388.0], [95.5, 388.0], [95.6, 388.0], [95.7, 389.0], [95.8, 389.0], [95.9, 390.0], [96.0, 390.0], [96.1, 390.0], [96.2, 390.0], [96.3, 390.0], [96.4, 390.0], [96.5, 390.0], [96.6, 390.0], [96.7, 392.0], [96.8, 394.0], [96.9, 394.0], [97.0, 394.0], [97.1, 395.0], [97.2, 396.0], [97.3, 397.0], [97.4, 401.0], [97.5, 401.0], [97.6, 402.0], [97.7, 403.0], [97.8, 403.0], [97.9, 406.0], [98.0, 407.0], [98.1, 409.0], [98.2, 409.0], [98.3, 410.0], [98.4, 410.0], [98.5, 412.0], [98.6, 415.0], [98.7, 415.0], [98.8, 415.0], [98.9, 416.0], [99.0, 424.0], [99.1, 428.0], [99.2, 428.0], [99.3, 430.0], [99.4, 430.0], [99.5, 431.0], [99.6, 445.0], [99.7, 461.0], [99.8, 615.0], [99.9, 1540.0]], "isOverall": false, "label": "GetFileContent", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 797.0, "series": [{"data": [[600.0, 1.0], [300.0, 797.0], [1500.0, 1.0], [200.0, 23.0], [400.0, 20.0]], "isOverall": false, "label": "GetFileContent", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 840.0, "series": [{"data": [[0.0, 840.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 4.710344827586208, "minX": 1.61951346E12, "maxY": 4.985652797704447, "series": [{"data": [[1.61951352E12, 4.985652797704447], [1.61951346E12, 4.710344827586208]], "isOverall": false, "label": "Scenario 1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61951352E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 244.0, "minX": 1.0, "maxY": 614.4, "series": [{"data": [[2.0, 614.4], [4.0, 318.5384615384616], [1.0, 244.0], [5.0, 344.1057810578105], [3.0, 292.0]], "isOverall": false, "label": "GetFileContent", "isController": false}, {"data": [[4.938242280285032, 344.57838479809936]], "isOverall": false, "label": "GetFileContent-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 872.4166666666666, "minX": 1.61951346E12, "maxY": 1.430651745E7, "series": [{"data": [[1.61951352E12, 1.430651745E7], [1.61951346E12, 2976248.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61951352E12, 4193.616666666667], [1.61951346E12, 872.4166666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61951352E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 344.11047345767577, "minX": 1.61951346E12, "maxY": 346.82758620689657, "series": [{"data": [[1.61951352E12, 344.11047345767577], [1.61951346E12, 346.82758620689657]], "isOverall": false, "label": "GetFileContent", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61951352E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 6.533715925394554, "minX": 1.61951346E12, "maxY": 18.89655172413794, "series": [{"data": [[1.61951352E12, 6.533715925394554], [1.61951346E12, 18.89655172413794]], "isOverall": false, "label": "GetFileContent", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61951352E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.61951346E12, "maxY": 11.248275862068958, "series": [{"data": [[1.61951352E12, 0.0], [1.61951346E12, 11.248275862068958]], "isOverall": false, "label": "GetFileContent", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61951352E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 242.0, "minX": 1.61951346E12, "maxY": 1540.0, "series": [{"data": [[1.61951352E12, 461.0], [1.61951346E12, 1540.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61951352E12, 375.0], [1.61951346E12, 369.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61951352E12, 416.15999999999985], [1.61951346E12, 1114.4999999999927]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61951352E12, 388.0], [1.61951346E12, 381.09999999999997]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61951352E12, 244.0], [1.61951346E12, 242.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61951352E12, 342.0], [1.61951346E12, 341.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61951352E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 274.5, "minX": 6.0, "maxY": 358.5, "series": [{"data": [[16.0, 330.5], [10.0, 274.5], [6.0, 314.5], [12.0, 313.0], [13.0, 358.5], [14.0, 350.0], [15.0, 337.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3.0, "minX": 6.0, "maxY": 18.0, "series": [{"data": [[16.0, 3.0], [10.0, 4.5], [6.0, 18.0], [12.0, 6.0], [13.0, 4.0], [14.0, 4.0], [15.0, 3.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.5, "minX": 1.61951346E12, "maxY": 11.533333333333333, "series": [{"data": [[1.61951352E12, 11.533333333333333], [1.61951346E12, 2.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61951352E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.4166666666666665, "minX": 1.61951346E12, "maxY": 11.616666666666667, "series": [{"data": [[1.61951352E12, 11.616666666666667], [1.61951346E12, 2.4166666666666665]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61951352E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.4166666666666665, "minX": 1.61951346E12, "maxY": 11.616666666666667, "series": [{"data": [[1.61951352E12, 11.616666666666667], [1.61951346E12, 2.4166666666666665]], "isOverall": false, "label": "GetFileContent-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61951352E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.4166666666666665, "minX": 1.61951346E12, "maxY": 11.616666666666667, "series": [{"data": [[1.61951352E12, 11.616666666666667], [1.61951346E12, 2.4166666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61951352E12, "title": "Total Transactions Per Second"}},
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

