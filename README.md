# mxgraph-typescript-definitions

Typescript definitions for mxgraph library. Is anyone need? star this or email me for collaboration.

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

    Now definitions are poor. A lot of <any> types and empty classes. Feel free to get some donkey work typing 80000 lines of code.
