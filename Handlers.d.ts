
/******************      Handler      **************/

declare class mxCellHighlight {

    /**      
    * A helper class to highlight cells.
    */
    constructor(graph: mxGraph, highlightColor: string, strokeWidth: number, dashed: boolean);

    /** Specifies if the highlights should appear on top of everything else in the overlay pane.  Default is false. */
    keepOnTop: boolean;

    /** Reference to the enclosing mxGraph. */
    graph: mxGraph;

    /** Reference to the mxCellState. */
    state: mxCellState;

    /** Specifies the spacing between the highlight for vertices and the vertex.  Default is 2. */
    spacing: number;

    /** Holds the handler that automatically invokes reset if the highlight should be hidden. */
    resetHandler: any;

    /**
     * Sets the color of the rectangle used to highlight drop targets.
     * @param {string} color String that represents the new highlight color.
     */
    setHighlightColor(color: string): void;

    /**
     * Creates and returns the highlight shape for the given state.
     */ 
    drawHighlight(): void;

    /**
     * Creates and returns the highlight shape for the given state.
     */
    createShape(): void;
    
    /** Updates the highlight after a change of the model or view. */
    repaint(): void;

    /** Resets the state of the cell marker. */
    hide();

    /**
     * Marks the <markedState> and fires a <mark> event.
     * @param {mxCellState} state
     */
    highlight(state: mxCellState): void;

    /** Destroys the handler and all its resources and DOM nodes. */
    destroy();
}



/** 
* A helper class to process mouse locations and highlight cells. 
* Helper class to highlight cells 
*/
declare class mxCellMarker {

    /**
     * Constructs a new cell marker
     * @param graph Reference to the enclosing mxGraph
     * @param validColor Optional marker color for valid states.  Default is mxConstants.DEFAULT_VALID_COLOR.
     * @param invalidColor Optional marker color for invalid states.  Default is mxConstants.DEFAULT_INVALID_COLOR.
     * @param hotspot Portion of the width and hight where a state intersects a given coordinate pair.  A value of 0 means always highlight.  Default is mxConstants.DEFAULT_HOTSPOT.
     */
    constructor(graph: mxGraph, validColor?: string, invalidColor?: string, hotspot?: number);

    /** Reference to the enclosing mxGraph */
    graph: mxGraph;

    /** Specifies if the marker is enabled.  Default is true. */
    enabled: boolean;

    /** Specifies the portion of the width and height that should trigger a highlight.  The area around the center of the cell to be marked is used as the hotspot.  Possible values are between 0 and 1.  Default is mxConstants.DEFAULT_HOTSPOT. */
    hotspot: number;

    /** Specifies if the hotspot is enabled.  Default is false. */
    hotspotEnabled: boolean;

    /** Holds the valid marker color. */
    validColor: string;

    /** Holds the invalid marker color. */
    invalidColor: string;

    /** Holds the current marker color. */
    currentColor: string;

    /** Holds the marked mxCellState if it is valid. */
    validState: mxCellState;

    /** Holds the marked mxCellState. */
    markedState: mxCellState;

    /**
     * Enables or disables event handling.  This implementation updates enabled.
     * @param {boolean} enabled
     */
    setEnabled(enabled: boolean): void;

    /**
     * Returns true if events are handled.  This implementation returns enabled.
     */
    isEnabled(): boolean;

    /**
     * Sets the hotspot.
     * @param {number} hotspot
     */
    setHotspot(hotspot: number): void;

    /**
     * Returns the hotspot.
     */
    getHotspot(): number;

    /**
     * Specifies whether the hotspot should be used in intersects.
     * @param {boolean} enabled
     */
    setHotspotEnabled(enabled: boolean): void;

    /**
     * Returns true if hotspot is used in intersects.
     */ 
    isHotspotEnabled(): boolean;

    /**
     * Returns true if validState is not null.
     */
    hasValidState(): boolean;

    /**
     * Returns the validState.
     */
    getValidState(): mxCellState;

    /**
     * Returns the markedState.
     */
    getMarkedState(): mxCellState;

    /**
     * Resets the state of the cell marker.
     */
    reset(): any;
    
    /**
     * Processes the given event and cell and marks the state returned by getState with the color returned by 
     * getMarkerColor.  If the markerColor is not null, then the state is stored in markedState.  If isValidState 
     * returns true, then the state is stored in validState regardless of the marker color.  The state is 
     * returned regardless of the marker color and valid state.
     * @param {mxMouseEvent} me
     */
    process(me: mxMouseEvent): void;

    /**
     * Marks the given cell using the given color, or validColor if no color is specified
     * @param {mxCell} cell 
     * @param {string} color 
     */
    markCell(cell: mxCell, color: string): void;

    /**
     * Marks the markedState and fires a mark event.
     */
    mark(): void;

    /**
     * Hides the marker and fires a mark event.
     */
    unmark(): void;

    /**
     * Returns true if the given mxCellState is a valid state.  If this returns true, then the state is 
     * stored in validState.  The return value of this method is used as the argument for getMarkerColor.
     * @param {mxCellState} state
     */
    isValidState(state: mxCellState): void;    

    /**
     * Returns the valid- or invalidColor depending on the value of isValid.  The given mxCellState is ignored by this implementation.
     * @param {mxEvent} evt
     * @param {mxCellState} state
     * @param {boolean} isValid
     */
    getMarkerColor(evt: mxEvent, state: mxCellState, isValid: boolean): string;

    /**
     * Uses getCell, getStateToMark and intersects to return the mxCellState for the given mxMouseEvent.
     * @param {mxMouseEvent} me
     */
    getState(me: mxMouseEvent): mxCellState;
    
    /**
     * Returns the mxCell for the given event and cell.  This returns the given cell.
     * @param {mxMouseEvent} me
     */
    getCell(me: mxMouseEvent): mxCell;
    
    /**
     * Returns the mxCellState to be marked for the given mxCellState under the mouse.  This returns the given state.
     * @param {mxCellState} state
     */
    getStateToMark(state: mxCellState): mxCellState;
    
    /**
     * Returns true if the given coordinate pair intersects the given state.  This returns true if the hotspot is 0 
     * or the coordinates are inside the hotspot for the given cell state.
     * @param state
     * @param me
     */
    intersects(state, me): boolean;
    
    /**
     * Destroys the handler and all its resources and DOM nodes.
     */
    destroy(): void;

}

declare class mxConstraintHandler {
    
}

declare class mxEdgeHandler {

    /** Graph event handler that reconnects edges and modifies control points and the edge label location.  
    * Uses <mxTerminalMarker> for finding and highlighting new source and target vertices.  This handler is 
    * automatically created in mxGraph.createHandler for each selected edge. */
    constructor(state: mxCellState);

    /** Reference to the enclosing mxGraph. */
    graph: mxGraph;

    /** Reference to the mxCellState being modified. */
    state: mxCellState;

    /** Holds the <mxTerminalMarker> which is used for highlighting terminals. */
    marker: mxCellMarker;

    /** Holds the mxConstraintHandler used for drawing and highlighting constraints. */
    constraintHandler: mxConstraintHandler;

    /** Holds the current validation error while a connection is being changed. */
    error: any;

    /** Holds the mxShape that represents the preview edge. */
    shape: mxShape;

    /** Holds the mxShapes that represent the points. */ 
    bends: mxShape[];

    /** Holds the mxShape that represents the label position. */
    labelShape: mxShape;

    /** Specifies if cloning by control-drag is enabled.  Default is true. */
    cloneEnabled: boolean;

    /** Specifies if adding bends by shift-click is enabled.  Default is false.  Note: This experimental feature is not recommended for production use */
    addEnabled: boolean;

    /** Specifies if removing bends by shift-click is enabled.  Default is false.  Note: This experimental feature is not recommended for production use. */
    removeEnabled: boolean;

    /** Specifies if removing bends by double click is enabled.  Default is false. */
    dblClickRemoveEnabled: boolean;

    /** Specifies if removing bends by dropping them on other bends is enabled.  Default is false. */
    mergeRemoveEnabled: boolean;

    /** Specifies if removing bends by creating straight segments should be enabled.  If enabled, this can be overridden by holding down the alt key while moving.  Default is false. */
    straightRemoveEnabled: boolean;

    /** Specifies if virtual bends should be added in the center of each segments.  These bends can then be used to add new waypoints.  Default is false. */
    virtualBendsEnabled: boolean;

    /** Opacity to be used for virtual bends (see virtualBendsEnabled).  Default is 20. */
    virtualBendOpacity: number;

    /** Specifies if the parent should be highlighted if a child cell is selected.  Default is false. */
    parentHighlightEnabled: boolean;

    /** Specifies if bends should be added to the graph container.  This is updated in init based on whether the edge or one of its terminals has an HTML label in the container. */
    preferHtml: boolean;

    /** Specifies if the bounds of handles should be used for hit-detection in IE Default is true. */
    allowHandleBoundsCheck: boolean;

    /** Specifies if waypoints should snap to the routing centers of terminals.  Default is false. */
    snapToTerminals: boolean;

    /** Optional mxImage to be used as handles.  Default is null. */
    handleImage: mxImage;

    /** Optional tolerance for hit-detection in getHandleForEvent.  Default is 0. */
    tolerance: number;

    /** Specifies if connections to the outline of a highlighted target should be enabled.  This will allow to place the connection point along the outline of the highlighted target.  Default is false. */
    outlineConnect: boolean;

    /** Specifies if the label handle should be moved if it intersects with another handle.  Uses checkLabelHandle for checking and moving.  Default is false. */
    manageLabelHandle: boolean;

    /** 
    * Initializes the shapes required for this edge handler. 
    */
    init(): void;

    /**
     * Returns an array of custom handles.  This implementation returns null.
     */
    createCustomHandles(): any;

    /**
     * Returns true if virtual bends should be added.  This returns true if virtualBendsEnabled is true and the current style allows and renders custom waypoints.
     * @param {mxEvent} evt
     */
    isVirtualBendsEnabled(evt: mxEvent): boolean;

    /**
     * Returns true if the given event is a trigger to add a new point.  This implementation returns true if shift is pressed.
     * @param {mxEvent} evt
     */
    isAddPointEvent(evt: mxEvent): boolean;

    /**
     * Returns true if the given event is a trigger to remove a point.  This implementation returns true if shift is pressed.
     * @param {mxEvent} evt
     */ 
    isRemovePointEvent(evt: mxEvent): boolean;

    /**
     * Returns the list of points that defines the selection stroke.
     * @param {mxCellState} state
     */
    getSelectionPoints(state: mxCellState): mxPoint[];

    /**
     * Creates the shape used to draw the selection border.
     * @param {mxPoint[]} points
     */
    createSelectionShape(points: mxPoint[]): mxShape;

    /**
     * Returns mxConstants.EDGE_SELECTION_COLOR.
     */
    getSelectionColor(): any;

    /**
     * Returns mxConstants.EDGE_SELECTION_STROKEWIDTH.
     */
    getSelectionStrokeWidth(): number;

    /**
     * Returns <mxConstants.EDGE_SELECTION_DASHED>.
     */
    isSelectionDashed(): boolean;
    
    /**
     * Returns true if the given cell is connectable.  This is a hook to disable floating connections.  This implementation returns true.
     * @param {mxCell} cell
     */
    isConnectableCell(cell: mxCell): boolean;

    /**
     * Creates and returns the mxCellMarker used in marker
     * @param {number} x
     * @param {number} y
     */
    getCellAt(x: number, y: number): mxCellMarker;

    /**
     * Creates and returns the mxCellMarker used in marker.
     */
    createMarker(): mxCellMarker;

    /**
     * Returns the error message or an empty string if the connection for the given source, target pair is not valid.  
     * Otherwise it returns null.  This implementation uses mxGraph.getEdgeValidationError.
     * @param {mxCell} source
     * @param {mxCell} target
     */
    validateConnection(source: mxCell, target: mxCell): any;

    /**
     * Creates and returns the bends used for modifying the edge.  This is typically an array of mxRectangleShapes.
     */
    createBends(): mxRectangleShape[];

    /**
     * Creates and returns the bends used for modifying the edge.  This is typically an array of mxRectangleShapes.
     */
    createVirtualBends(): mxRectangleShape[];

    /**
     * Creates the shape used to display the given bend.
     * @param {number} index
     */
    isHandleEnabled(index: number): boolean;

    /**
     * Returns true if the handle at the given index is visible.
     * @param {number} index
     */
    isHandleVisible(index: number): boolean;

    /**
     * Creates the shape used to display the given bend.  Note that the index may be null for special cases, 
     * such as when called from mxElbowEdgeHandler.createVirtualBend.  Only images and rectangles should be returned 
     * if support for HTML labels with not foreign objects is required.
     * @param {any} index
     */
    createHandleShape(index: any): mxShape;

    /**
     * Creates the shape used to display the the label handle.
     */
    createLabelHandleShape(): mxShape;

    /**
     * Helper method to initialize the given bend.
     * @param {mxShape} bend
     */
    initBend(bend: mxShape): void;

    /**
     * Returns the index of the handle for the given event.
     * @param {mxMouseEvent} me
     */
    getHandleForEvent(me: mxMouseEvent): number;

    /**
     * Returns true if the given event allows virtual bends to be added.  This implementation returns true.
     * @param {mxMouseEvent} me
     */
    isAddVirtualBendEvent(me: mxMouseEvent): boolean;

    /**
     * Returns true if the given event allows custom handles to be changed.  This implementation returns true.
     * @param me
     */
    isCustomHandleEvent(mxMouseEvent): boolean;

    /**
     * Handles the event by checking if a special element of the handler was clicked, in which case the index parameter 
     * is non-null.  The indices may be one of <LABEL_HANDLE> or the number of the respective control point.  
     * The source and target points are used for reconnecting the edge.
     * @param {any} sender
     * @param {mxMouseEvent} me
     */
    mouseDown(sender: any, me: mxMouseEvent): any;

    /**
     * Starts the handling of the mouse gesture.
     * @param {number} x
     * @param {number} y
     * @param {number} index
     */
    start(x: number, y: number, index: number): any;

    /**
     * Returns a clone of the current preview state for the given point and terminal.
     * @param {mxPoint} point
     * @param {mxCell} terminal
     */
    clonePreviewState(point: mxPoint, terminal: mxCell): mxCellState;

    /**
     * Returns the tolerance for the guides.  Default value is gridSize * scale / 2.
     */ 
    getSnapToTerminalTolerance(): number;

    /**
     * Hook for subclassers do show details while the handler is active.
     * @param {mxMouseEvent} me
     * @param {mxPoint} point
     */
    updateHint(me: mxMouseEvent, point: mxPoint): void;

    /**
     * Hooks for subclassers to hide details when the handler gets inactive.
     */
    removeHint(): void;

    /**
     * Hook for rounding the unscaled width or height.  This uses Math.round.
     * @param {number} length
     */
    roundLength(length: number): number;
    
    /**
     * Returns true if snapToTerminals is true and if alt is not pressed.
     * @param me
     */
    isSnapToTerminalsEvent(me): boolean;

    /**
     * Returns the point for the given event.
     * @param {mxMouseEvent} me
     */
    getPointForEvent(me: mxMouseEvent): mxPoint;

    /**
     * Updates the given preview state taking into account the state of the constraint handler.
     * @param {mxMouseEvent} me
     */
    getPreviewTerminalState(me: mxMouseEvent): mxCellState;

    /**
     * Updates the given preview state taking into account the state of the constraint handler.
     * @param {mxPoint} pt mxPoint that contains the current pointer position.
     * @param {mxMouseEvent} me  Optional mxMouseEvent that contains the current event.
     */
    getPreviewPoints(pt: mxPoint, me?: mxMouseEvent): mxPoint[];

    /**
     * Returns true if outlineConnect is true and the source of the event is the outline shape or shift is pressed.
     * @param {mxMouseEvent} me
     */
    isOutlineConnectEvent(me: mxMouseEvent): boolean;

    /**
     * Updates the given preview state taking into account the state of the constraint handler.
     * @param {mxCell} edge
     * @param {mxPoint} point
     * @param {mxCellState} terminalState
     * @param {mxMouseEvent} me
     */
    updatePreviewState(edge: mxCell, point: mxPoint, terminalState: mxCellState, me: mxMouseEvent): void;

    /**
     * Handles the event by updating the preview.
     * @param {any} sender
     * @param {mxMouseEvent} me
     */
    mouseMove(sender: any, me: mxMouseEvent): void;

    /**
     * Handles the event to applying the previewed changes on the edge by using moveLabel, connect or changePoints.
     * @param {any} sender
     * @param {mxMouseEvent} me
     */
    mouseUp(sender: any, me: mxMouseEvent): void;

    /**
     * Resets the state of this handler.
     */
    reset(): void;

    /**
     * Sets the color of the preview to the given value.
     * @param {any} color
     */
    setPreviewColor(color: any): void;

    /**
     * Converts the given point in-place from screen to unscaled, untranslated graph coordinates and applies the grid.  
     * Returns the given, modified point instance.
     * @param {mxPoint} point 
     * @param {boolean} gridEnabled  Boolean that specifies if the grid should be applied.
     */
    convertPoint(point: mxPoint, gridEnabled: boolean): mxPoint;

    /**
     * Changes the coordinates for the label of the given edge.
     * @param {mxCellState} egdeState represents the edge.
     * @param {number} x Integer that specifies the x-coordinate of the new location.
     * @param {number} y Integer that specifies the y-coordinate of the new location.
     */
    moveLabel(egdeState: mxCellState, x: number, y: number): void;

    /**
     * Changes the terminal or terminal point of the given edge in the graph model.
     * @param {mxCell} edge mxCell that represents the edge to be reconnected.
     * @param {mxCell} terminal mxCell that represents the new terminal
     * @param {boolean} isSource Boolean indicating if the new terminal is the source or target terminal
     * @param {boolean} isClone Boolean indicating if the new connection should be a clone of the old edge
     * @param {mxMouseEvent} me mxMouseEvent that contains the mouse up event
     */
    connect(edge: mxCell, terminal: mxCell, isSource: boolean, isClone: boolean, me: mxMouseEvent): mxCell;

    /**
     * Changes the terminal point of the given edge.
     * @param {mxCell} edge
     * @param {mxPoint} point
     * @param {boolean} isSource
     * @param {any} clone
     */
    changeTerminalPoint(edge: mxCell, point: mxPoint, isSource: boolean, clone: any): void;

    /**
     * Changes the control points of the given edge in the graph model.
     * @param {mxCell} edge
     * @param {mxPoint[]} points
     * @param {any} clone
     */
    changePoints(edge: mxCell, points: mxPoint[], clone: any): void;

    /**
     * Adds a control point for the given state and event.
     * @param {mxCellState} state
     * @param {mxEvent} evt
     */
    addPoint(state: mxCellState, evt: mxEvent): void;

    /**
     * Adds a control point at the given point.
     * @param {mxCellState} state
     * @param {number} x
     * @param {number} y
     */
    addPointAt(state: mxCellState, x: number, y: number): void;

    /**
     * Removes the control point at the given index from the given state
     * @param {mxCellState} state
     * @param {number} index
     */
    removePoint(state: mxCellState, index: number): void; 

    /**
     * Returns the fillcolor for the handle at the given index.
     * @param {number} index
     */
    getHandleFillColor(index: number): string;

    /**
     * Redraws the preview, and the bends- and label control points.
     */
    redraw(): void;

    /**
     * Redraws the handles.
     */
    redrawHandles(): void;

    /**
     * Shortcut to <hideSizers>.
     */
    hideHandles(): void;

    /**
     * Updates and redraws the inner bends
     * @param {mxPoint} p0 mxPoint that represents the location of the first point
     * @param {mxPoint} pe mxPoint that represents the location of the last point
     */
    redrawInnerBends(p0: mxPoint, pe: mxPoint): void;

    /**
     * Checks if the label handle intersects the given bounds and moves it if it intersects
     * @param b
     */
    checkLabelHandle(b): any;

    /**
     * Redraws the preview.
     */
    drawPreview(): void;

    /**
     * Refreshes the bends of this handler.
     */
    refresh(): void;

    /**
     * Destroys all elements in bends.
     */
    destroyBends(): void;

    /**
     * Destroys the handler and all its resources and DOM nodes.  This does normally not need to be called as 
     * handlers are destroyed automatically when the corresponding cell is deselected.
     */
    destroy(): void;

    /** 
    * @private
    */
    isSource: boolean;
}

declare class mxEdgeSegmentHandler extends mxEdgeHandler {
    getPreviewPoints(point);
    createBends();
    redraw();
    refresh();
    redrawInnerBends(p0, pe);
    changePoints(edge, points);
}

declare class mxElbowEdgeHandler extends mxEdgeHandler {
    flipEnabled;
    doubleClickOrientationResource;
    createBends();
    createVirtualBend();
    getCursorForBend();
    getTooltipForNode(node);
    convertPoint(point, gridEnabled);
    redrawInnerBends(p0, pe);
}

declare module mxSelectionCellsHandler {
    interface EventHandler extends Util.EventHandler {
        (sender: mxSelectionCellsHandler, state: mxEventObject): any;
    }
}
declare class mxSelectionCellsHandler extends mxEventSource {
    constructor(graph: mxGraph);
    /**
     * Binds the specified function to the given event name.  If no event name is given, then the listener 
     * is registered for all events. 
     * The parameters of the listener are the sender and an mxEventObject. 
     */
    addListener(name: any, func: mxSelectionCellsHandler.EventHandler): void;

    getHandler(cell: mxCell);

    handlers: mxDictionary;

}

declare class mxVertexHandler {
    /** Event handler for resizing cells.  This handler is automatically created in mxGraph.createHandler. */
    constructor(state: mxCellState);
    graph;
    state;
    singleSizer;
    index;
    allowHandleBoundsCheck;
    handleImage;
    tolerance;
    rotationEnabled;
    rotationRaster;
    livePreview;
    manageSizers;
    constrainGroupByChildren;
    init();
    updateMinBounds();
    getSelectionBounds(state);
    createSelectionShape(bounds);
    getSelectionColor();
    getSelectionStrokeWidth();
    isSelectionDashed();
    createSizer(cursor, index, size, fillColor);
    isSizerVisible(index);
    createSizerShape(bounds, index, fillColor);
    moveSizerTo(shape, x, y);
    getHandleForEvent(me);
    mouseDown(sender, me);
    start(x, y, index);
    hideSizers();
    checkTolerance(me);
    mouseMove(sender, me);
    mouseUp(sender, me);
    rotateCell(cell, delta);
    reset();
    resizeCell(cell, dx, dy, index, gridEnabled);
    moveChildren(cell, dx, dy);
    union(bounds, dx, dy, index, gridEnabled, scale, tr);
    union(bounds, dx, dy, index, gridEnabled, scale, tr);
    union(bounds, dx, dy, index, gridEnabled, scale, tr);
    redraw();
    redrawHandles();
    redrawHandles();
    drawPreview();
    destroy();
}

/******************      Handler end     **************/