/*
 * TX Text Control Editor Widget 1.0 (http://www.textcontrol.com/)
 * Copyright 2018 Text Control GmbH
*/

var TXTextControl = (function () {
    var tx = {};

    // Class SelectionBounds
    tx.SelectionBounds = (function () {

        // Constructor
        function SelectionBounds(
            start,
            length) {
            this.m_start = start;
            this.m_length = length;

            Object.defineProperties(this, {
                start: {
                    get: function () { return this.m_start; },
                    set: function (newValue) { this.m_start = newValue; },
                    enumerable: true,
                },
                length: {
                    get: function () { return this.m_length; },
                    set: function (newValue) { this.m_length = newValue; },
                    enumerable: true,
                },
            });
        }

        return SelectionBounds;
    })(); // Class SelectionBounds
    
    // Class TextField
    tx.TextField = (function () {

        // Constructor
        function TextField(
            text,
            name,
            start,
            lenght,
            id,
            type,
            bounds,
            containsInputPosition,
            deleteable,
            doubledInputPosition,
            editable,
            showActivated,
            isSpellCheckingEnabled,
            storedId) {

            this.m_text = text || "«TEXTFIELD»";
            this.m_name = name || "TEXTFIELD";
            this.m_start = start;
            this.m_length = length;
            this.m_id = id;
            this.m_type = type;
            this.m_bounds = bounds;
            this.m_containsInputPosition = containsInputPosition;
            this.m_deleteable = deleteable || false;
            this.m_doubledInputPosition = doubledInputPosition || true;
            this.m_editable = editable || false;
            this.m_showActivated = showActivated || true;
            this.m_isSpellCheckingEnabled = isSpellCheckingEnabled || false;
            this.m_storedId = storedId;

            Object.defineProperties(this, {
                text: {
                    get: function () { return this.m_text; },
                    set: function (newValue) { this.m_text = newValue; },
                    enumerable: true,
                },
                name: {
                    get: function () { return this.m_name; },
                    set: function (newValue) { this.m_name = newValue; },
                    enumerable: true,
                },
                start: {
                    get: function () { return this.m_start; },
                    set: function (newValue) { this.m_start = newValue; },
                    enumerable: true,
                },
                length: {
                    get: function () { return this.m_length; },
                    set: function (newValue) { this.m_length = newValue; },
                    enumerable: true,
                },
                id: {
                    get: function () { return this.m_id; },
                    set: function (newValue) { this.m_id = newValue; },
                    enumerable: true,
                },
                type: {
                    get: function () { return this.m_type; },
                    set: function (newValue) { this.m_type = newValue; },
                    enumerable: true,
                },
                bounds: {
                    get: function () { return this.m_bounds; },
                    set: function (newValue) { this.m_bounds = newValue; },
                    enumerable: true,
                },
                containsInputPosition: {
                    get: function () { return this.m_containsInputPosition; },
                    set: function (newValue) { this.m_containsInputPosition = newValue; },
                    enumerable: true,
                },
                deleteable: {
                    get: function () { return this.m_deleteable; },
                    set: function (newValue) { this.m_deleteable = newValue; },
                    enumerable: true,
                },
                doubledInputPosition: {
                    get: function () { return this.m_doubledInputPosition; },
                    set: function (newValue) { this.m_doubledInputPosition = newValue; },
                    enumerable: true,
                },
                editable: {
                    get: function () { return this.m_editable; },
                    set: function (newValue) { this.m_editable = newValue; },
                    enumerable: true,
                },
                showActivated: {
                    get: function () { return this.m_showActivated; },
                    set: function (newValue) { this.m_showActivated = newValue; },
                    enumerable: true,
                },
                isSpellCheckingEnabled: {
                    get: function () { return this.m_isSpellCheckingEnabled; },
                    set: function (newValue) { this.m_isSpellCheckingEnabled = newValue; },
                    enumerable: true,
                },
                storedId: {
                    get: function () { return this.m_storedId; },
                    set: function (newValue) { this.m_storedId = newValue; },
                    enumerable: true,
                },
            });
        }

        return TextField;
    })(); // Class TextField

    // Class MergeField
    tx.MergeField = (function () {

        // Constructor
        function MergeField(
            text,
            name,
            textFormat,
            textBefore,
            textAfter,
            dateTimeFormat,
            numericFormat,
            preserveFormatting) {

            this.m_text = text || "«MERGEFIELD»";
            this.m_name = name || "MERGEFIELD";
            this.m_textFormat = textFormat;
            this.m_textBefore = textBefore;
            this.m_textAfter = textAfter;
            this.m_dateTimeFormat = dateTimeFormat;
            this.m_numericFormat = numericFormat;
            this.m_preserveFormatting = preserveFormatting;

            Object.defineProperties(this, {
                name: {
                    get: function () { return this.m_name; },
                    set: function (newValue) { this.m_name = newValue; },
                    enumerable: true,
                },
                text: {
                    get: function () { return this.m_text; },
                    set: function (newValue) { this.m_text = newValue; },
                    enumerable: true,
                },
                textFormat: {
                    get: function () { return this.m_textFormat; },
                    set: function (newValue) { this.m_textFormat = newValue; },
                    enumerable: true,
                },
                textBefore: {
                    get: function () { return this.m_textBefore; },
                    set: function (newValue) { this.m_textBefore = newValue; },
                    enumerable: true,
                },
                textAfter: {
                    get: function () { return this.m_textAfter; },
                    set: function (newValue) { this.m_textAfter = newValue; },
                    enumerable: true,
                },
                dateTimeFormat: {
                    get: function () { return this.m_dateTimeFormat; },
                    set: function (newValue) { this.m_dateTimeFormat = newValue; },
                    enumerable: true,
                },
                numericFormat: {
                    get: function () { return this.m_numericFormat; },
                    set: function (newValue) { this.m_numericFormat = newValue; },
                    enumerable: true,
                },
                preserveFormatting: {
                    get: function () { return this.m_preserveFormatting; },
                    set: function (newValue) { this.m_preserveFormatting = newValue; },
                    enumerable: true,
                },
            });
        }

        return MergeField;
    })(); // Class MergeField

    // Class Color 
    tx.Color = (function () {

        var m_r;
        var m_g;
        var m_b;
        var m_a;

        // Constructor
        function Color() {
            Object.defineProperties(this, {
                r: {
                    get: function () { return m_r; },
                    set: function (newValue) { m_r = newValue; },
                    enumerable: true,
                },
                g: {
                    get: function () { return m_g; },
                    set: function (newValue) { m_g = newValue; },
                    enumerable: true,
                },
                b: {
                    get: function () { return m_b; },
                    set: function (newValue) { m_b = newValue; },
                    enumerable: true,
                },
                a: {
                    get: function () { return m_a; },
                    set: function (newValue) { m_a = newValue; },
                    enumerable: true,
                },
            });
        }

        return Color;
    })(); // Class Color

    // Class HighlightMode
    tx.HighlightMode = (function () {

        var m_never;
        var m_activated;
        var m_always;

        // Constructor
        function HighlightMode() {
            Object.defineProperties(this, {
                never: {
                    get: function () { return m_never; },
                    set: function (newValue) { m_never = newValue; },
                    enumerable: true,
                },
                activated: {
                    get: function () { return m_activated; },
                    set: function (newValue) { m_activated = newValue; },
                    enumerable: true,
                },
                always: {
                    get: function () { return m_always; },
                    set: function (newValue) { m_always = newValue; },
                    enumerable: true,
                },
            });
        }

        return HighlightMode;
    })(); // Class HighlightMode
    
    // Class CultureSettings 
    tx.CultureSettings = (function () {

        var m_culture;
        var m_uiCulture;

        // Constructor
        function CultureSettings() {
            Object.defineProperties(this, {
                culture: {
                    get: function () { return this.m_culture; },
                    set: function (newValue) { this.m_culture = newValue; },
                    enumerable: true,
                },
                uiCulture: {
                    get: function () { return this.m_uiCulture; },
                    set: function (newValue) { this.m_uiCulture = newValue; },
                    enumerable: true,
                },
            });
        }

        return CultureSettings;
    })(); // Class CultureSettings

    // Class Rectangle
    tx.Rectangle = (function () {

        var m_location;
        var m_size;

        // Constructor
        function Rectangle() {
            Object.defineProperties(this, {
                location: {
                    get: function () { return m_location; },
                    set: function (newValue) { m_location = newValue; },
                    enumerable: true,
                },
                size: {
                    get: function () { return m_size; },
                    set: function (newValue) { m_size = newValue; },
                    enumerable: true,
                },
            });
        }

        return Rectangle;
    })(); // Class Rectangle

    // Class Point
    tx.Point = (function () {

        var m_x;
        var m_y;

        // Constructor
        function Point() {
            Object.defineProperties(this, {
                x: {
                    get: function () { return m_x; },
                    set: function (newValue) { m_x = newValue; },
                    enumerable: true,
                },
                y: {
                    get: function () { return m_y; },
                    set: function (newValue) { m_y = newValue; },
                    enumerable: true,
                },
            });
        }

        return Point;
    })(); // Class Point

    // Class Size
    tx.Size = (function () {

        var m_width;
        var m_height;

        // Constructor
        function Size() {
            Object.defineProperties(this, {
                width: {
                    get: function () { return m_width; },
                    set: function (newValue) { m_width = newValue; },
                    enumerable: true,
                },
                height: {
                    get: function () { return m_height; },
                    set: function (newValue) { m_height = newValue; },
                    enumerable: true,
                },
            });
        }

        return Size;
    })(); // Class Size

    // Class DocumentPermissions
    tx.DocumentPermissions = (function () {

        // Constructor
        function DocumentPermissions(
            allowCopy,
            allowFormatting,
            allowFormattingStyles,
            allowPrinting,
            readOnly) {
            this.m_allowCopy = allowCopy || true;
            this.m_allowFormatting = allowFormatting || true;
            this.m_allowFormattingStyles = allowFormattingStyles || true;
            this.m_allowPrinting = allowPrinting || true;
            this.m_readOnly = readOnly || true;

            Object.defineProperties(this, {
                allowCopy: {
                    get: function () { return this.m_allowCopy; },
                    set: function (newValue) { this.m_allowCopy = newValue; },
                    enumerable: true,
                },
                allowFormatting: {
                    get: function () { return this.m_allowFormatting; },
                    set: function (newValue) { this.m_allowFormatting = newValue; },
                    enumerable: true,
                },
                allowFormattingStyles: {
                    get: function () { return this.m_allowFormattingStyles; },
                    set: function (newValue) { this.m_allowFormattingStyles = newValue; },
                    enumerable: true,
                },
                allowPrinting: {
                    get: function () { return this.m_allowPrinting; },
                    set: function (newValue) { this.m_allowPrinting = newValue; },
                    enumerable: true,
                },
                readOnly: {
                    get: function () { return this.m_readOnly; },
                    set: function (newValue) { this.m_readOnly = newValue; },
                    enumerable: true,
                },
            });
        }

        return DocumentPermissions;
    })(); // Class DocumentPermissions

    // *** E N U M E R A T I O N S *** 

    tx.StreamType = {
        HTMLFormat: 0x0004,
        RichTextFormat: 0x0008,
        PlainText: 0x0010,
        InternalUnicodeFormat: 0x0020,
        MSWord: 0x0040,
        AdobePDF: 0x0200,
        WordprocessingML: 0x0400
    };

    tx.TextFrameInsertionMode = {
        AboveTheText: 524290,
        AsCharacter: 1,
        BelowTheText: 262146,
        DisplaceCompleteLines: 4,
        DisplaceText: 8,
        FixedOnPage: 131072,
        MoveWithText: 65536
    };

    tx.EditMode = {
        Edit: 1,
        ReadAndSelect: 2,
        ReadOnly: 3,
        UsePassword: 2048
    };

    tx.FieldType = {
        MergeField: 0,
        IfField: 1,
        IncludeTextField: 2,
        DateField: 3,
        NextField: 4,
        NextIfField: 5
    };

    tx.ClipboardMode = {
        Client: 1,
        Server: 2
    };

    tx.SpecialZoomFactor = {
        PageWidth: -1,
        WholePage: -2,
        TextWidth: -3
    }

    tx.HorizontalAlignment = {
        Left: 1,
        Right: 2,
        Center: 3,
        Justify: 4
    }

    tx.MergeFieldTextFormat = {
        None: 0,
        Uppercase: 1,
        Lowercase: 2,
        FirstCapital: 3,
        TitleCase: 4
    }

    return tx;
}()); 

var TXTextControlWeb = (function () {

    function TXTextControlWeb(element, key) {

        // change the source here
        var m_destinationUrl = "http://localhost:1303/";

        var iframe = document.createElement('iframe');

        iframe.src = m_destinationUrl;
        iframe.setAttribute('allowFullScreen', 'true');
        iframe.id = element + '_txframe';
        iframe.style.border = 'none';
        iframe.style.width = '100%';
        iframe.style.height = '100%';

        document.getElementById(element).appendChild(iframe);

        var tx = {};
        var event;

        createNewEvent('textControlWebLoaded');

        function createNewEvent(eventName) {
            if (typeof (Event) === 'function') {
                event = new Event(eventName);
            } else {
                event = document.createEvent('Event');
                event.initEvent(eventName, true, true);
            }
        }

        function receiveMessage(e) {

            var message = JSON.parse(e.data);
                
            if (message.receiver == null || message.receiver != "txtextcontrol-client")
                return;

            if (message.callbackGuid == "-1") {
                window.dispatchEvent(event);
                return;
            }

            if (typeof m_messageQueue[message.callbackGuid] === "function") {

                var callbackData = message.data;

                if (message.object != null) {
                    switch (message.object) {
                        case "TextField": {

                            var fields = [];

                            for (index = 0; index < message.data.length; ++index) {

                                var newField = new tx.TextField(
                                    message.data[index].text,
                                    message.data[index].name,
                                    message.data[index].parameters,
                                    message.data[index].typeName,
                                    message.data[index].start,
                                    message.data[index].length,
                                    message.data[index].id,
                                    message.data[index].type,
                                    message.data[index].bounds,
                                    message.data[index].containsInputPosition,
                                    message.data[index].deleteable,
                                    message.data[index].doubledInputPosition,
                                    message.data[index].editable,
                                    message.data[index].showActivated,
                                    message.data[index].isSpellCheckingEnabled,
                                    message.data[index].storedId
                                );

                                fields.push(newField);
                            }

                            callbackData = fields;
                            break;
                        }
                        case "SubTextPart": {
                            var subTextParts = [];

                            for (index = 0; index < message.data.length; ++index) {

                                var newSubTextPart = new tx.SubTextPart(
                                    message.data[index].name,
                                    message.data[index].id,
                                    message.data[index].highlightColor,
                                    message.data[index].highlightMode,
                                    message.data[index].text,
                                    message.data[index].number,
                                    message.data[index].start,
                                    message.data[index].length,
                                    message.data[index].nestedLevel,
                                    message.data[index].storedId
                                );

                                subTextParts.push(newSubTextPart);
                            }

                            callbackData = subTextParts;
                            break;
                        }
                        case "TextPart": {
                            var textParts = [];

                            for (index = 0; index < message.data.length; ++index) {

                                var newTextPart = new tx.TextPart(
                                    message.data[index].type,
                                    message.data[index].index,
                                    message.data[index].selection,
                                    message.data[index].storedId
                                );

                                textParts.push(newTextPart);
                            }

                            callbackData = textParts;
                            break;
                        }
                    }
                }

                m_messageQueue[message.callbackGuid](callbackData);
            }

            if (message.removeCallback == true)
                delete m_messageQueue[message.callbackGuid];
        }

        window.addEventListener('message', receiveMessage);

        // *** M E M B E R   F I E L D S *** 
        
        var m_messageQueue = {};

        // *** C L A S S E S ***

        // Class TextField
        tx.TextField = (function () {

            // Constructor
            function TextField(
                text,
                name,
                parameters,
                typeName,
                start,
                lenght,
                id,
                type,
                bounds,
                containsInputPosition,
                deleteable,
                doubledInputPosition,
                editable,
                showActivated,
                isSpellCheckingEnabled,
                storedId) {

                this.m_text = text || "«TEXTFIELD»";
                this.m_name = name || "TEXTFIELD";
                this.m_parameters = parameters;
                this.m_typeName = typeName;
                this.m_start = start;
                this.m_length = length;
                this.m_id = id;
                this.m_type = type;
                this.m_bounds = bounds;
                this.m_containsInputPosition = containsInputPosition;
                this.m_deleteable = deleteable || false;
                this.m_doubledInputPosition = doubledInputPosition || true;
                this.m_editable = editable || false;
                this.m_showActivated = showActivated || true;
                this.m_isSpellCheckingEnabled = isSpellCheckingEnabled || false;
                this.m_storedId = storedId;

                Object.defineProperties(this, {
                    text: {
                        get: function () { return this.m_text; },
                        set: function (newValue) {

                            this.m_text = newValue;

                            if (this.m_storedId != null) {
                                var message = new Object();
                                message.receiver = "txtextcontrol";
                                message.object = "TextField";
                                message.property = "text";
                                message.parameters = [newValue, this.m_storedId];

                                SendMessage(message);
                            }
                        },
                        enumerable: true,
                    },
                    name: {
                        get: function () { return this.m_name; },
                        set: function (newValue) {

                            this.m_name = newValue;

                            if (this.m_storedId != null) {
                                var message = new Object();
                                message.receiver = "txtextcontrol";
                                message.object = "TextField";
                                message.property = "name";
                                message.parameters = [newValue, this.m_storedId];

                                SendMessage(message);
                            }
                        },
                        enumerable: true,
                    },
                    parameters: {
                        get: function () { return this.m_parameters; },
                        set: function (newValue) {

                            this.m_parameters = newValue;

                            if (this.m_storedId != null) {
                                var message = new Object();
                                message.receiver = "txtextcontrol";
                                message.object = "TextField";
                                message.property = "parameters";
                                message.parameters = [newValue, this.m_storedId];

                                SendMessage(message);
                            }
                        },
                        enumerable: true,
                    },
                    typeName: {
                        get: function () { return this.m_typeName; },
                        set: function (newValue) { this.m_typeName = newValue; },
                        enumerable: true,
                    },
                    start: {
                        get: function () { return this.m_start; },
                        set: function (newValue) { this.m_start = newValue; },
                        enumerable: true,
                    },
                    length: {
                        get: function () { return this.m_length; },
                        set: function (newValue) { this.m_length = newValue; },
                        enumerable: true,
                    },
                    id: {
                        get: function () { return this.m_id; },
                        set: function (newValue) { this.m_id = newValue; },
                        enumerable: true,
                    },
                    type: {
                        get: function () { return this.m_type; },
                        set: function (newValue) { this.m_type = newValue; },
                        enumerable: true,
                    },
                    bounds: {
                        get: function () { return this.m_bounds; },
                        set: function (newValue) { this.m_bounds = newValue; },
                        enumerable: true,
                    },
                    containsInputPosition: {
                        get: function () { return this.m_containsInputPosition; },
                        set: function (newValue) { this.m_containsInputPosition = newValue; },
                        enumerable: true,
                    },
                    deleteable: {
                        get: function () { return this.m_deleteable; },
                        set: function (newValue) {

                            this.m_deleteable = newValue;

                            if (this.m_storedId != null) {
                                var message = new Object();
                                message.receiver = "txtextcontrol";
                                message.object = "TextField";
                                message.property = "deleteable";
                                message.parameters = [newValue, this.m_storedId];

                                SendMessage(message);
                            }
                        },
                        enumerable: true,
                    },
                    doubledInputPosition: {
                        get: function () { return this.m_doubledInputPosition; },
                        set: function (newValue) {

                            m_doubledInputPosition = newValue;

                            if (this.m_storedId != null) {
                                var message = new Object();
                                message.receiver = "txtextcontrol";
                                message.object = "TextField";
                                message.property = "doubledInputPosition";
                                message.parameters = [newValue, this.m_storedId];

                                SendMessage(message);
                            }
                        },
                        enumerable: true,
                    },
                    editable: {
                        get: function () { return this.m_editable; },
                        set: function (newValue) {

                            this.m_editable = newValue;

                            if (this.m_storedId != null) {
                                var message = new Object();
                                message.receiver = "txtextcontrol";
                                message.object = "TextField";
                                message.property = "editable";
                                message.parameters = [newValue, this.m_storedId];

                                SendMessage(message);
                            }
                        },
                        enumerable: true,
                    },
                    showActivated: {
                        get: function () { return this.m_showActivated; },
                        set: function (newValue) {

                            this.m_showActivated = newValue;

                            if (this.m_storedId != null) {
                                var message = new Object();
                                message.receiver = "txtextcontrol";
                                message.object = "TextField";
                                message.property = "showActivated";
                                message.parameters = [newValue, this.m_storedId];

                                SendMessage(message);
                            }
                        },
                        enumerable: true,
                    },
                    isSpellCheckingEnabled: {
                        get: function () { return this.m_isSpellCheckingEnabled; },
                        set: function (newValue) {

                            this.m_isSpellCheckingEnabled = newValue;

                            if (this.m_storedId != null) {
                                var message = new Object();
                                message.receiver = "txtextcontrol";
                                message.object = "TextField";
                                message.property = "isSpellCheckingEnabled";
                                message.parameters = [newValue, this.m_storedId];

                                SendMessage(message);
                            }
                        },
                        enumerable: true,
                    },
                    storedId: {
                        get: function () { return this.m_storedId; },
                        set: function (newValue) { this.m_storedId = newValue; },
                        enumerable: true,
                    },
                });
            }

            return TextField;
        })(); // Class TextField

        // Class SubTextPart 
        tx.SubTextPart = (function () {

            // Constructor
            function SubTextPart(
                name,
                id,
                highlightColor,
                highlightMode,
                text,
                number,
                start,
                length,
                nestedLevel,
                storedId) {
                this.m_name = name;
                this.m_id = id;
                this.m_highlightColor = highlightColor;
                this.m_highlightMode = highlightMode;
                this.m_text = text;
                this.m_number = number;
                this.m_start = start;
                this.m_length = length;
                this.m_nestedLevel = nestedLevel;
                this.m_storedId = storedId;

                Object.defineProperties(this, {
                    name: {
                        get: function () { return this.m_name; },
                        set: function (newValue) {

                            this.m_name = newValue;

                            if (this.m_storedId != null) {
                                var message = new Object();
                                message.receiver = "txtextcontrol";
                                message.object = "SubTextPart";
                                message.property = "name";
                                message.parameters = [newValue, this.m_storedId];

                                SendMessage(message);
                            }
                        },
                        enumerable: true,
                    },
                    id: {
                        get: function () { return this.m_id; },
                        set: function (newValue) { this.m_id = newValue; },
                        enumerable: true,
                    },
                    highlightColor: {
                        get: function () { return this.m_highlightColor; },
                        set: function (newValue) { this.m_highlightColor = newValue; },
                        enumerable: true,
                    },
                    highlightMode: {
                        get: function () { return this.m_highlightMode; },
                        set: function (newValue) { this.m_highlightMode = newValue; },
                        enumerable: true,
                    },
                    text: {
                        get: function () { return this.m_text; },
                        set: function (newValue) { this.m_text = newValue; },
                        enumerable: true,
                    },
                    number: {
                        get: function () { return this.m_number; },
                        set: function (newValue) { this.m_number = newValue; },
                        enumerable: true,
                    },
                    start: {
                        get: function () { return this.m_start; },
                        set: function (newValue) { this.m_start = newValue; },
                        enumerable: true,
                    },
                    length: {
                        get: function () { return this.m_length; },
                        set: function (newValue) { this.m_length = newValue; },
                        enumerable: true,
                    },
                    nestedLevel: {
                        get: function () { return this.m_nestedLevel; },
                        set: function (newValue) { this.m_nestedLevel = newValue; },
                        enumerable: true,
                    },
                    storedId: {
                        get: function () { return this.m_storedId; },
                        set: function (newValue) { this.m_storedId = newValue; },
                        enumerable: true,
                    },
                });
            }

            return SubTextPart;
        })(); // Class SubTextPart    

        // Class TextPart 
        tx.TextPart = (function () {

            // Constructor
            function TextPart(
                type,
                index,
                selection,
                storedId) {

                this.m_type = type;
                this.m_index = index;
                this.m_selection = selection;
                this.m_storedId = storedId;

                Object.defineProperties(this, {
                    type: {
                        get: function () { return this.m_type; },
                        set: function (newValue) { this.m_type = newValue; },
                        enumerable: true,
                    },
                    index: {
                        get: function () { return this.m_index; },
                        set: function (newValue) { this.m_index = newValue; },
                        enumerable: true,
                    },
                    selection: {
                        get: function () { return this.m_selection; },
                        set: function (newValue) {

                            this.m_selection = newValue;

                            if (this.m_storedId != null) {
                                var message = new Object();
                                message.receiver = "txtextcontrol";
                                message.object = "Selection";
                                message.property = "TextPart.selection";
                                message.parameters = [newValue, this.m_storedId];

                                SendMessage(message);
                            }
                        },
                        enumerable: true,
                    },
                });

                TextPart.prototype.addTextField = function (textField) {
                    var message = new Object();
                    message.receiver = "txtextcontrol";
                    message.method = "TextPart.addTextField";
                    message.callbackGuid = uuidv4();
                    message.parameters = [textField];

                    SendMessage(message);
                };

                TextPart.prototype.getSubTextParts = function (callback) {
                    var message = new Object();
                    message.receiver = "txtextcontrol";
                    message.method = "TextPart.getSubTextParts";
                    message.callbackGuid = uuidv4();

                    m_messageQueue[message.callbackGuid] = callback;

                    SendMessage(message);
                };

                TextPart.prototype.getTextFields = function (callback) {
                    var message = new Object();
                    message.receiver = "txtextcontrol";
                    message.method = "TextPart.getTextFields";
                    message.callbackGuid = uuidv4();

                    m_messageQueue[message.callbackGuid] = callback;

                    SendMessage(message);
                };
            }

            return TextPart;
        })(); // Class TextPart
        
        // *** M E T H O D S *** 

        tx.ribbon = {

            expand: function () {
                var message = new Object();
                message.receiver = "txtextcontrol";
                message.method = "ribbon.expand";

                SendMessage(message);
            },

            minimize: function () {
                var message = new Object();
                message.receiver = "txtextcontrol";
                message.method = "ribbon.minimize";

                SendMessage(message);
            },

            setSelectedTab: function (selectedTab) {
                var message = new Object();
                message.receiver = "txtextcontrol";
                message.method = "ribbon.setSelectedTab";
                message.parameters = [selectedTab];

                SendMessage(message);
            },

            hide: function () {
                var message = new Object();
                message.receiver = "txtextcontrol";
                message.method = "ribbon.hide";

                SendMessage(message);
            },

            show: function () {
                var message = new Object();
                message.receiver = "txtextcontrol";
                message.method = "ribbon.show";

                SendMessage(message);
            },

            showElement: function (element, show) {
                var message = new Object();
                message.receiver = "txtextcontrol";
                message.method = "ribbon.showElement";
                message.parameters = [element, show];

                SendMessage(message);
            },

        };

        tx.ribbonPermissionsTab = {

            setAllowAdditionalUserNames: function (allow) {
                var message = new Object();
                message.receiver = "txtextcontrol";
                message.method = "ribbonPermissionsTab.setAllowAdditionalUserNames";
                message.parameters = [allow];

                SendMessage(message);
            },

            setRegisteredUserNames: function (userNames) {
                var message = new Object();
                message.receiver = "txtextcontrol";
                message.method = "ribbonPermissionsTab.setRegisteredUserNames";
                message.parameters = [userNames];

                SendMessage(message);
            },

        };

        tx.selection = {

            getBounds: function (callback) {
                var message = new Object();
                message.receiver = "txtextcontrol";
                message.method = "selection.getBounds";
                message.callbackGuid = uuidv4();

                m_messageQueue[message.callbackGuid] = callback;

                SendMessage(message);
            },

            getCulture: function (callback) {
                var message = new Object();
                message.receiver = "txtextcontrol";
                message.method = "selection.getCulture";
                message.callbackGuid = uuidv4();

                m_messageQueue[message.callbackGuid] = callback;

                SendMessage(message);
            },

            load: function (streamType, base64Data) {
                var message = new Object();
                message.receiver = "txtextcontrol";
                message.method = "selection.load";
                message.parameters = [streamType, base64Data];

                SendMessage(message);
            },

            save: function (streamType, callback) {
                var message = new Object();
                message.receiver = "txtextcontrol";
                message.method = "selection.save";
                message.callbackGuid = uuidv4();
                message.parameters = [streamType];

                m_messageQueue[message.callbackGuid] = callback;

                SendMessage(message);
            },

            setBounds: function (bounds) {
                var message = new Object();
                message.receiver = "txtextcontrol";
                message.method = "selection.setBounds";
                message.parameters = [bounds];

                SendMessage(message);
            },

            setCulture: function (culture) {
                var message = new Object();
                message.receiver = "txtextcontrol";
                message.method = "selection.setCulture";
                message.parameters = [culture];

                SendMessage(message);
            },

        };

        tx.textFrames = {

            addAnchored: function (size, horizontalAlignment, textPosition, insertionMode) {
                var message = new Object();
                message.receiver = "txtextcontrol";
                message.method = "textFrames.addAnchored";
                message.parameters = [size, horizontalAlignment, textPosition, insertionMode];

                SendMessage(message);
            },

            addAnchoredAtLocation: function (size, location, textPosition, insertionMode) {
                var message = new Object();
                message.receiver = "txtextcontrol";
                message.method = "textFrames.addAnchoredAtLocation";
                message.parameters = [size, location, textPosition, insertionMode];

                SendMessage(message);
            },

            addAtFixedPosition: function (size, pageNumber, location, insertionMode) {
                var message = new Object();
                message.receiver = "txtextcontrol";
                message.method = "textFrames.addAtFixedPosition";
                message.parameters = [size, pageNumber, location, insertionMode];

                SendMessage(message);
            },

            addInline: function (size, textPosition) {
                var message = new Object();
                message.receiver = "txtextcontrol";
                message.method = "textFrames.addInline";
                message.parameters = [size, textPosition];

                SendMessage(message);
            },

            addWithMouse: function (insertionMode) {
                var message = new Object();
                message.receiver = "txtextcontrol";
                message.method = "textFrames.addWithMouse";
                message.parameters = [insertionMode];

                SendMessage(message);
            },

        };

        tx.images = {

            addAnchored: function (imageData, horizontalAlignment, textPosition, insertionMode) {
                var message = new Object();
                message.receiver = "txtextcontrol";
                message.method = "images.addAnchored";
                message.parameters = [imageData, horizontalAlignment, textPosition, insertionMode];

                SendMessage(message);
            },

            addAnchoredAtLocation: function (imageData, location, textPosition, insertionMode) {
                var message = new Object();
                message.receiver = "txtextcontrol";
                message.method = "images.addAnchoredAtLocation";
                message.parameters = [imageData, location, textPosition, insertionMode];

                SendMessage(message);
            },

            addAtFixedPosition: function (imageData, pageNumber, location, insertionMode) {
                var message = new Object();
                message.receiver = "txtextcontrol";
                message.method = "images.addAtFixedPosition";
                message.parameters = [imageData, pageNumber, location, insertionMode];

                SendMessage(message);
            },

            addInline: function (imageData, textPosition) {
                var message = new Object();
                message.receiver = "txtextcontrol";
                message.method = "images.addInline";
                message.parameters = [imageData, textPosition];

                SendMessage(message);
            }

        };

        tx.addTextField = function (textField) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "addTextField";
            message.parameters = [textField];

            SendMessage(message);
        };

        tx.addMergeField = function (mergeField) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "addMergeField";
            message.parameters = [mergeField];

            SendMessage(message);
        };

        tx.setZoomFactor = function (zoomFactor) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "setZoomFactor";
            message.parameters = [zoomFactor];

            SendMessage(message);
        };

        tx.getZoomFactor = function (callback) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "getZoomFactor";
            message.callbackGuid = uuidv4();

            m_messageQueue[message.callbackGuid] = callback;

            SendMessage(message);
        };

        tx.getTextViewElement = function (callback) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "getTextViewElement";
            message.callbackGuid = uuidv4();

            m_messageQueue[message.callbackGuid] = callback;

            SendMessage(message);
        };

        tx.setTextFrameMarkerLines = function (enabled) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "setTextFrameMarkerLines";
            message.parameters = [enabled];

            SendMessage(message);
        };

        tx.getTextFrameMarkerLines = function (callback) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "getTextFrameMarkerLines";
            message.callbackGuid = uuidv4();

            m_messageQueue[message.callbackGuid] = callback;

            SendMessage(message);
        };

        tx.setTextFieldsEditable = function (enabled) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "setTextFieldsEditable";
            message.parameters = [enabled];

            SendMessage(message);
        };

        tx.getTextFieldsEditable = function (callback) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "getTextFieldsEditable";
            message.callbackGuid = uuidv4();

            m_messageQueue[message.callbackGuid] = callback;

            SendMessage(message);
        };

        tx.setTableGridLines = function (enabled) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "setTableGridLines";
            message.parameters = [enabled];

            SendMessage(message);
        };

        tx.getTableGridLines = function (callback) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "getTableGridLines";
            message.callbackGuid = uuidv4();

            m_messageQueue[message.callbackGuid] = callback;

            SendMessage(message);
        };

        tx.setSaveDocumentQuestionDialogEnabled = function (enabled) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "setSaveDocumentQuestionDialogEnabled";
            message.parameters = [enabled];

            SendMessage(message);
        };

        tx.setIsSpellCheckingEnabled = function (enabled) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "setIsSpellCheckingEnabled";
            message.parameters = [enabled];

            SendMessage(message);
        };

        tx.getIsSpellCheckingEnabled = function (callback) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "getIsSpellCheckingEnabled";
            message.callbackGuid = uuidv4();

            m_messageQueue[message.callbackGuid] = callback;

            SendMessage(message);
        };

        tx.setIsLoadingDialogEnabled = function (enabled) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "setIsLoadingDialogEnabled";
            message.parameters = [enabled];

            SendMessage(message);
        };

        tx.getIsLoadingDialogEnabled = function (callback) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "getIsLoadingDialogEnabled";
            message.callbackGuid = uuidv4();

            m_messageQueue[message.callbackGuid] = callback;

            SendMessage(message);
        };

        tx.setIsLanguageDetectionEnabled = function (enabled) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "setIsLanguageDetectionEnabled";
            message.parameters = [enabled];

            SendMessage(message);
        };

        tx.getIsLanguageDetectionEnabled = function (callback) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "getIsLanguageDetectionEnabled";
            message.callbackGuid = uuidv4();

            m_messageQueue[message.callbackGuid] = callback;

            SendMessage(message);
        };

        tx.setIsHyphenationEnabled = function (enabled) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "setIsHyphenationEnabled";
            message.parameters = [enabled];

            SendMessage(message);
        };

        tx.getIsHyphenationEnabled = function (callback) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "getIsHyphenationEnabled";
            message.callbackGuid = uuidv4();

            m_messageQueue[message.callbackGuid] = callback;

            SendMessage(message);
        };

        tx.setDocumentTargetMarkers = function (enabled) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "setDocumentTargetMarkers";
            message.parameters = [enabled];

            SendMessage(message);
        };

        tx.getDocumentTargetMarkers = function (callback) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "getDocumentTargetMarkers";
            message.callbackGuid = uuidv4();

            m_messageQueue[message.callbackGuid] = callback;

            SendMessage(message);
        };

        tx.setDocumentPermissions = function (documentPermissions) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "setDocumentPermissions";
            message.parameters = [documentPermissions];

            SendMessage(message);
        };

        tx.getDocumentPermissions = function (callback) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "getDocumentPermissions";
            message.callbackGuid = uuidv4();

            m_messageQueue[message.callbackGuid] = callback;

            SendMessage(message);
        };

        tx.setControlChars = function (enabled) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "setControlChars";
            message.parameters = [enabled];

            SendMessage(message);
        };

        tx.getControlChars = function (callback) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "getControlChars";
            message.callbackGuid = uuidv4();

            m_messageQueue[message.callbackGuid] = callback;

            SendMessage(message);
        };

        tx.setContextMenusEnabled = function (enabled) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "setContextMenusEnabled";
            message.parameters = [enabled];

            SendMessage(message);
        };

        tx.getContextMenusEnabled = function (callback) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "getContextMenusEnabled";
            message.callbackGuid = uuidv4();

            m_messageQueue[message.callbackGuid] = callback;

            SendMessage(message);
        };

        tx.setClipboardMode = function (clipboardMode) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "setClipboardMode";
            message.parameters = [clipboardMode];

            SendMessage(message);
        };

        tx.getClipboardMode = function (callback) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "getClipboardMode";
            message.callbackGuid = uuidv4();

            m_messageQueue[message.callbackGuid] = callback;

            SendMessage(message);
        };

        tx.setEditMode = function (editMode) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "setEditMode";
            message.parameters = [editMode];

            SendMessage(message);
        };

        tx.getEditMode = function (callback) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "getEditMode";
            message.callbackGuid = uuidv4();

            m_messageQueue[message.callbackGuid] = callback;

            SendMessage(message);
        };

        tx.loadXMLDatabase = function (xmlData) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "loadXMLDatabase";
            message.parameters = [xmlData];

            SendMessage(message);
        };

        tx.loadDocument = function (streamType, content) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "loadDocument";
            message.parameters = [streamType, content];

            SendMessage(message);
        };

        tx.printDocument = function () {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "printDocument";

            SendMessage(message);
        };

        tx.loadSelection = function (streamType, content) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "loadSelection";
            message.parameters = [streamType, content];

            SendMessage(message);
        };

        tx.saveSelection = function (streamType, callback) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "saveSelection";
            message.callbackGuid = uuidv4();
            message.parameters = [streamType];

            m_messageQueue[message.callbackGuid] = callback;

            SendMessage(message);
        };

        tx.saveDocument = function (streamType, callback) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "saveDocument";
            message.callbackGuid = uuidv4();
            message.parameters = [streamType];

            m_messageQueue[message.callbackGuid] = callback;

            SendMessage(message);
        };

        tx.appendDocument = function (streamType, content) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "appendDocument";
            message.parameters = [streamType, content];

            SendMessage(message);
        };

        tx.focus = function () {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "focus";

            SendMessage(message);
        };

        tx.getBackColor = function (callback) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "getBackColor";
            message.callbackGuid = uuidv4();

            m_messageQueue[message.callbackGuid] = callback;

            SendMessage(message);
        };

        tx.setBackColor = function (hexColor) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "setBackColor";
            message.parameters = [hexColor];

            SendMessage(message);
        };

        tx.setFormattingPrinter = function (printerName) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "setFormattingPrinter";
            message.parameters = [printerName];

            SendMessage(message);
        };

        tx.setStatusBarColor = function (hexColor) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "setStatusBarColor";
            message.parameters = [hexColor];

            SendMessage(message);
        };

        tx.showHorizontalRuler = function (show) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "showHorizontalRuler";
            message.parameters = [show];

            SendMessage(message);
        };

        tx.showMergeFieldDialog = function (fieldType) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "showMergeFieldDialog";
            message.parameters = [fieldType];

            SendMessage(message);
        };

        tx.showRibbonBar = function (show) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "showRibbonBar";
            message.parameters = [show];

            SendMessage(message);
        };

        tx.showStatusBar = function (show) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "showStatusBar";
            message.parameters = [show];

            SendMessage(message);
        };

        tx.showVerticalRuler = function (show) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "showVerticalRuler";
            message.parameters = [show];

            SendMessage(message);
        };

        tx.getCultures = function (callback) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "getCultures";
            message.callbackGuid = uuidv4();

            m_messageQueue[message.callbackGuid] = callback;

            SendMessage(message);
        };

        tx.getFormattingPrinter = function (callback) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "getFormattingPrinter";
            message.callbackGuid = uuidv4();

            m_messageQueue[message.callbackGuid] = callback;

            SendMessage(message);
        };

        tx.getInstalledPrinters = function (callback) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "getInstalledPrinters";
            message.callbackGuid = uuidv4();

            m_messageQueue[message.callbackGuid] = callback;

            SendMessage(message);
        };

        tx.getSubTextParts = function (callback, atInputPosition) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "getSubTextParts";
            message.callbackGuid = uuidv4();
            message.parameters = [atInputPosition];

            m_messageQueue[message.callbackGuid] = callback;

            SendMessage(message);
        };

        tx.removeTextField = function (textField, keepText) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "removeTextField";
            message.parameters = [textField, keepText];

            SendMessage(message);
        };

        tx.resetContents = function () {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "resetContents";

            SendMessage(message);
        };

        tx.getTextFields = function (callback, atInputPosition) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "getTextFields";
            message.callbackGuid = uuidv4();
            message.parameters = [atInputPosition];

            m_messageQueue[message.callbackGuid] = callback;

            SendMessage(message);
        };

        tx.getTextParts = function (callback, atInputPosition) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "getTextParts";
            message.callbackGuid = uuidv4();
            message.parameters = [atInputPosition];

            m_messageQueue[message.callbackGuid] = callback;

            SendMessage(message);
        };

        tx.getStatusBarColor = function (callback) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "getStatusBarColor";
            message.callbackGuid = uuidv4();

            m_messageQueue[message.callbackGuid] = callback;

            SendMessage(message);
        };

        tx.addEventListener = function (eventName, callback) {
            var message = new Object();
            message.receiver = "txtextcontrol";
            message.method = "addEventListener";
            message.callbackGuid = uuidv4();
            message.parameters = [eventName];

            m_messageQueue[message.callbackGuid] = callback;

            SendMessage(message);
        };

        tx.removeEventListener = function (eventName, callback) {
            delete m_messageQueue[findKey(m_messageQueue, callback)];
        };

        // *** H E L P E R  F U N C T I O N S ***

        function uuidv4() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        function findKey(obj, value) {
            for (var key in obj) {
                if (obj[key] == value)
                    return key;
            }
        }

        function SendMessage(message) {
            var receiver = iframe.contentWindow;
            var message = JSON.stringify(message);

            receiver.postMessage(message, m_destinationUrl);
        }

        return tx;
    }
    return TXTextControlWeb;
}()); 



