// Type definitions for mxGraph 2.3.0.2
// Project: https://www.jgraph.com/
// Definitions by: George Kiselev <https://github.com/gooddaytoday>
// Definitions: https://github.com/gooddaytoday

/* 

    Definitions devided to modules equal to official api documentation's packages:
    https://jgraph.github.io/mxgraph/docs/js-api/files/index-txt.html

    - Each class has its "declare class mxEvent {}"
    - Interfaces of class members should be in module: 
     module mxEvent {
        interface SomeInterface { }
     }
    - Common package interfaces should be in module, named by package:
    module Util {
        interface CommonUtilInterface { }
    }

    Now definitions are poor. A lot of <any> types and empty classes. Feel free to get some donkey work.

*/

/// <reference path="Model.d.ts"/>
/// <reference path="Util.d.ts"/>
/// <reference path="View.d.ts"/>
/// <reference path="Handlers.d.ts"/>
/// <reference path="Shape.d.ts"/>

declare class mxGraph {

    createHandler(state: mxCellState);

}