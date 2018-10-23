/*
 * TX Text Control Editor Widget 1.0 Server Script (http://www.textcontrol.com/)
 * Copyright 2018 Text Control GmbH
*/

window.onload = function () {

    var m_TextFields = {};
    var m_TextParts = {};
    var m_SubTextParts = {};

    function receiveMessage(e) {

        var message = JSON.parse(e.data);

        if (message.receiver == null)
            return;

        if (message.receiver != "txtextcontrol")
            return;

        if (message.object != null) {

            switch (message.object) {
                case "TextField": {
                    m_TextFields[message.parameters[1]][message.property] = message.parameters[0];
                    break;
                }
                case "TextPart": {
                    m_TextParts[message.parameters[1]][message.property] = message.parameters[0];
                    break;
                }
                case "SubTextPart": {
                    m_SubTextParts[message.parameters[1]][message.property] = message.parameters[0];
                    break;
                }
            }

            return;
        }

        switch (message.method) {
            case "loadDocument": {
                var encoded = btoa(message.parameters[1]);
                TXTextControl.loadDocument(message.parameters[0], encoded);
                break;
            }
            case "loadSelection": {
                var encoded = btoa(message.parameters[1]);
                TXTextControl.loadSelection(message.parameters[0], encoded);
                break;
            }
            case "loadXMLDatabase": {
                TXTextControl.loadXMLDatabase(message.parameters[0]);
                break;
            }
            case "printDocument": {
                TXTextControl.printDocument();
                break;
            }
            case "saveDocument": {
                TXTextControl.saveDocument(message.parameters[0], function (e) {
                    var returnMessage = new Object();
                    returnMessage.receiver = "txtextcontrol-client";
                    returnMessage.callbackGuid = message.callbackGuid;
                    returnMessage.removeCallback = true;
                    returnMessage.data = e;

                    SendMessage(returnMessage);
                });
                break;
            }
            case "saveSelection": {
                TXTextControl.saveSelection(message.parameters[0], function (e) {
                    var returnMessage = new Object();
                    returnMessage.receiver = "txtextcontrol-client";
                    returnMessage.callbackGuid = message.callbackGuid;
                    returnMessage.removeCallback = true;
                    returnMessage.data = e;

                    SendMessage(returnMessage);
                });
                break;
            }
            case "addEventListener": {
                TXTextControl.addEventListener(message.parameters[0], function (e) {
                    var returnMessage = new Object();
                    returnMessage.receiver = "txtextcontrol-client";
                    returnMessage.callbackGuid = message.callbackGuid;
                    returnMessage.removeCallback = false;
                    returnMessage.data = e;

                    SendMessage(returnMessage);
                });
                break;
            }
            case "setEditMode": {
                if (message.parameters != null)
                    TXTextControl.editMode = message.parameters[0];
                break;
            }
            case "getEditMode": {
                var returnMessage = new Object();
                returnMessage.receiver = "txtextcontrol-client";
                returnMessage.callbackGuid = message.callbackGuid;
                returnMessage.removeCallback = true;
                returnMessage.data = TXTextControl.editMode;

                SendMessage(returnMessage);
                break;
            }
            case "setClipboardMode": {
                if (message.parameters != null)
                    TXTextControl.clipboardMode = message.parameters[0];
                break;
            }
            case "getClipboardMode": {
                var returnMessage = new Object();
                returnMessage.receiver = "txtextcontrol-client";
                returnMessage.callbackGuid = message.callbackGuid;
                returnMessage.removeCallback = true;
                returnMessage.data = TXTextControl.clipboardMode;

                SendMessage(returnMessage);
                break;
            }
            case "setContextMenusEnabled": {
                if (message.parameters != null)
                    TXTextControl.contextMenusEnabled = message.parameters[0];
                break;
            }
            case "getContextMenusEnabled": {
                var returnMessage = new Object();
                returnMessage.receiver = "txtextcontrol-client";
                returnMessage.callbackGuid = message.callbackGuid;
                returnMessage.removeCallback = true;
                returnMessage.data = TXTextControl.contextMenusEnabled;

                SendMessage(returnMessage);
                break;
            }
            case "setControlChars": {
                if (message.parameters != null)
                    TXTextControl.controlChars = message.parameters[0];
                break;
            }
            case "getControlChars": {
                var returnMessage = new Object();
                returnMessage.receiver = "txtextcontrol-client";
                returnMessage.callbackGuid = message.callbackGuid;
                returnMessage.removeCallback = true;
                returnMessage.data = TXTextControl.controlChars;

                SendMessage(returnMessage);
                break;
            }
            case "setDocumentPermissions": {
                if (message.parameters != null)
                    TXTextControl.documentPermissions = message.parameters[0];
                break;
            }
            case "getDocumentPermissions": {
                var returnMessage = new Object();
                returnMessage.receiver = "txtextcontrol-client";
                returnMessage.callbackGuid = message.callbackGuid;
                returnMessage.removeCallback = true;
                returnMessage.data = TXTextControl.documentPermissions;

                SendMessage(returnMessage);
                break;
            }
            case "setDocumentTargetMarkers": {
                if (message.parameters != null)
                    TXTextControl.documentTargetMarkers = message.parameters[0];
                break;
            }
            case "getDocumentTargetMarkers": {
                var returnMessage = new Object();
                returnMessage.receiver = "txtextcontrol-client";
                returnMessage.callbackGuid = message.callbackGuid;
                returnMessage.removeCallback = true;
                returnMessage.data = TXTextControl.documentTargetMarkers;

                SendMessage(returnMessage);
                break;
            }
            case "images.addAnchored": {
                if (message.parameters != null)
                    TXTextControl.images.addAnchored(message.parameters[0],
                        message.parameters[1],
                        message.parameters[2],
                        message.parameters[3]
                    );
                break;
            }
            case "images.addAnchoredAtLocation": {
                if (message.parameters != null)
                    TXTextControl.images.addAnchoredAtLocation(message.parameters[0],
                        message.parameters[1],
                        message.parameters[2],
                        message.parameters[3]
                    );
                break;
            }
            case "images.addAtFixedPosition": {
                if (message.parameters != null)
                    TXTextControl.images.addAtFixedPosition(message.parameters[0],
                        message.parameters[1],
                        message.parameters[2],
                        message.parameters[3]
                    );
                break;
            }
            case "images.addInline": {
                if (message.parameters != null)
                    TXTextControl.images.addInline(message.parameters[0],
                        message.parameters[1]
                    );
                break;
            }
            case "textFrames.addAnchored": {
                if (message.parameters != null)
                    TXTextControl.textFrames.addAnchored(message.parameters[0],
                        message.parameters[1],
                        message.parameters[2],
                        message.parameters[3]
                    );
                break;
            }
            case "textFrames.addAnchoredAtLocation": {
                if (message.parameters != null)
                    TXTextControl.textFrames.addAnchoredAtLocation(message.parameters[0],
                        message.parameters[1],
                        message.parameters[2],
                        message.parameters[3]
                    );
                break;
            }
            case "textFrames.addAtFixedPosition": {
                if (message.parameters != null)
                    TXTextControl.textFrames.addAtFixedPosition(message.parameters[0],
                        message.parameters[1],
                        message.parameters[2],
                        message.parameters[3]
                    );
                break;
            }
            case "textFrames.addInline": {
                if (message.parameters != null)
                    TXTextControl.textFrames.addInline(message.parameters[0],
                        message.parameters[1]
                    );
                break;
            }
            case "textFrames.addWithMouse": {
                if (message.parameters != null)
                    TXTextControl.textFrames.addWithMouse(message.parameters[0]);
                break;
            }
            case "setIsHyphenationEnabled": {
                if (message.parameters != null)
                    TXTextControl.isHyphenationEnabled = message.parameters[0];
                break;
            }
            case "getIsHyphenationEnabled": {
                var returnMessage = new Object();
                returnMessage.receiver = "txtextcontrol-client";
                returnMessage.callbackGuid = message.callbackGuid;
                returnMessage.removeCallback = true;
                returnMessage.data = TXTextControl.isHyphenationEnabled;

                SendMessage(returnMessage);
                break;
            }
            case "setIsLanguageDetectionEnabled": {
                if (message.parameters != null)
                    TXTextControl.isLanguageDetectionEnabled = message.parameters[0];
                break;
            }
            case "getIsLanguageDetectionEnabled": {
                var returnMessage = new Object();
                returnMessage.receiver = "txtextcontrol-client";
                returnMessage.callbackGuid = message.callbackGuid;
                returnMessage.removeCallback = true;
                returnMessage.data = TXTextControl.isLanguageDetectionEnabled;

                SendMessage(returnMessage);
                break;
            }
            case "setIsLoadingDialogEnabled": {
                if (message.parameters != null)
                    TXTextControl.isLoadingDialogEnabled = message.parameters[0];
                break;
            }
            case "getIsLoadingDialogEnabled": {
                var returnMessage = new Object();
                returnMessage.receiver = "txtextcontrol-client";
                returnMessage.callbackGuid = message.callbackGuid;
                returnMessage.removeCallback = true;
                returnMessage.data = TXTextControl.isLoadingDialogEnabled;

                SendMessage(returnMessage);
                break;
            }
            case "setIsSpellCheckingEnabled": {
                if (message.parameters != null)
                    TXTextControl.isSpellCheckingEnabled = message.parameters[0];
                break;
            }
            case "getIsSpellCheckingEnabled": {
                var returnMessage = new Object();
                returnMessage.receiver = "txtextcontrol-client";
                returnMessage.callbackGuid = message.callbackGuid;
                returnMessage.removeCallback = true;
                returnMessage.data = TXTextControl.isSpellCheckingEnabled;

                SendMessage(returnMessage);
                break;
            }
            case "ribbon.expand": {
                TXTextControl.ribbon.expand();
                break;
            }
            case "ribbon.minimize": {
                TXTextControl.ribbon.minimize();
                break;
            }
            case "ribbon.setSelectedTab": {
                if (message.parameters != null)
                    TXTextControl.ribbon.selectedTab = message.parameters[0];
                break;
            }
            case "ribbon.hide": {
                document.getElementById("ribbonbar").style.display = "none";
                break;
            }
            case "ribbon.show": {
                document.getElementById("ribbonbar").style.display = "block";
                break;
            }
            case "ribbon.showElement": {
                if (message.parameters != null) {

                    var ribbonElement = document.getElementById(message.parameters[0]);

                    if (message.parameters[1] == false) {
                        ribbonElement.style.display = "none";
                    }
                    else {
                        ribbonElement.style.display = "inline-block";
                    }

                    break;
                }
            }
            case "ribbonPermissionsTab.setAllowAdditionalUserNames": {
                if (message.parameters != null)
                    TXTextControl.ribbonPermissionsTab.allowAdditionalUserNames = message.parameters[0];
                break;
            }
            case "ribbonPermissionsTab.setRegisteredUserNames": {
                if (message.parameters != null)
                    TXTextControl.ribbonPermissionsTab.registeredUserNames = message.parameters[0];
                break;
            }
            case "setSaveDocumentQuestionDialogEnabled.setRegisteredUserNames": {
                if (message.parameters != null)
                    TXTextControl.saveDocumentQuestionDialogEnabled = message.parameters[0];
                break;
            }
            case "selection.getBounds": {
                TXTextControl.selection.getBounds(function (e) {
                    var returnMessage = new Object();
                    returnMessage.receiver = "txtextcontrol-client";
                    returnMessage.callbackGuid = message.callbackGuid;
                    returnMessage.removeCallback = true;
                    returnMessage.data = e;

                    SendMessage(returnMessage);
                });
                break;
            }
            case "selection.getCulture": {
                TXTextControl.selection.getCulture(function (e) {
                    var returnMessage = new Object();
                    returnMessage.receiver = "txtextcontrol-client";
                    returnMessage.callbackGuid = message.callbackGuid;
                    returnMessage.removeCallback = true;
                    returnMessage.data = e;

                    SendMessage(returnMessage);
                });
                break;
            }
            case "selection.load": {
                if (message.parameters != null)
                    TXTextControl.selection.load(message.parameters[0], message.parameters[1]);
                break;
            }
            case "selection.save": {
                TXTextControl.selection.save(message.parameters[0], function (e) {
                    var returnMessage = new Object();
                    returnMessage.receiver = "txtextcontrol-client";
                    returnMessage.callbackGuid = message.callbackGuid;
                    returnMessage.removeCallback = true;
                    returnMessage.data = e;

                    SendMessage(returnMessage);
                });
                break;
            }
            case "selection.setBounds": {
                if (message.parameters != null)
                    TXTextControl.selection.setBounds(message.parameters[0]);
                break;
            }
            case "selection.setCulture": {
                if (message.parameters != null)
                    TXTextControl.selection.setCulture(message.parameters[0]);
                break;
            }
            case "setTableGridLines": {
                if (message.parameters != null)
                    TXTextControl.tableGridLines = message.parameters[0];
                break;
            }
            case "getTableGridLines": {
                var returnMessage = new Object();
                returnMessage.receiver = "txtextcontrol-client";
                returnMessage.callbackGuid = message.callbackGuid;
                returnMessage.removeCallback = true;
                returnMessage.data = TXTextControl.tableGridLines;

                SendMessage(returnMessage);
                break;
            }
            case "setTextFieldsEditable": {
                if (message.parameters != null)
                    TXTextControl.textFieldsEditable = message.parameters[0];
                break;
            }
            case "getTextFieldsEditable": {
                var returnMessage = new Object();
                returnMessage.receiver = "txtextcontrol-client";
                returnMessage.callbackGuid = message.callbackGuid;
                returnMessage.removeCallback = true;
                returnMessage.data = TXTextControl.textFieldsEditable;

                SendMessage(returnMessage);
                break;
            }
            case "setTextFrameMarkerLines": {
                if (message.parameters != null)
                    TXTextControl.textFrameMarkerLines = message.parameters[0];
                break;
            }
            case "getTextFrameMarkerLines": {
                var returnMessage = new Object();
                returnMessage.receiver = "txtextcontrol-client";
                returnMessage.callbackGuid = message.callbackGuid;
                returnMessage.removeCallback = true;
                returnMessage.data = TXTextControl.textFrameMarkerLines;

                SendMessage(returnMessage);
                break;
            }
            case "setZoomFactor": {
                if (message.parameters != null)
                    TXTextControl.zoomFactor = message.parameters[0];
                break;
            }
            case "getZoomFactor": {
                var returnMessage = new Object();
                returnMessage.receiver = "txtextcontrol-client";
                returnMessage.callbackGuid = message.callbackGuid;
                returnMessage.removeCallback = true;
                returnMessage.data = TXTextControl.zoomFactor;

                SendMessage(returnMessage);
                break;
            }
            case "addMergeField": {
                if (message.parameters != null) {
                    var mergeField = new TXTextControl.MergeField();
                    mergeField.name = message.parameters[0]["name"];
                    mergeField.text = message.parameters[0]["text"];
                    mergeField.textFormat = message.parameters[0]["textFormat"];
                    mergeField.textBefore = message.parameters[0]["textBefore"];
                    mergeField.textAfter = message.parameters[0]["textAfter"];
                    mergeField.dateTimeFormat = message.parameters[0]["dateTimeFormat"];
                    mergeField.preserveFormatting = message.parameters[0]["preserveFormatting"];
                    mergeField.numericFormat = message.parameters[0]["numericFormat"];                    
                    
                    TXTextControl.addMergeField(mergeField);
                }
                break;
            }
            case "addTextField": {
                if (message.parameters != null) {
                    var textField = new TXTextControl.TextField();
                    textField.text = message.parameters[0]["text"];
                    textField.name = message.parameters[0]["name"];
                    textField.start = message.parameters[0]["start"];
                    textField.length = message.parameters[0]["length"];
                    textField.id = message.parameters[0]["id"];
                    textField.type = message.parameters[0]["type"];
                    textField.deleteable = message.parameters[0]["deleteable"];
                    textField.doubledInputPosition = message.parameters[0]["doubledInputPosition"];
                    textField.editable = message.parameters[0]["editable"];
                    textField.showActivated = message.parameters[0]["showActivated"];
                    textField.isSpellCheckingEnabled = message.parameters[0]["isSpellCheckingEnabled"];

                    TXTextControl.addTextField(textField);
                }
                break;
            }
            case "appendDocument": {
                var encoded = btoa(message.parameters[1]);
                TXTextControl.appendDocument(message.parameters[0], encoded);
                break;
            }
            case "focus": {
                TXTextControl.focus();
                break;
            }
            case "getBackColor": {
                TXTextControl.getBackColor(function (e) {
                    var returnMessage = new Object();
                    returnMessage.receiver = "txtextcontrol-client";
                    returnMessage.callbackGuid = message.callbackGuid;
                    returnMessage.removeCallback = true;
                    returnMessage.data = e;

                    SendMessage(returnMessage);
                });
                break;
            }
            case "getCultures": {
                var returnMessage = new Object();
                returnMessage.receiver = "txtextcontrol-client";
                returnMessage.callbackGuid = message.callbackGuid;
                returnMessage.removeCallback = true;
                returnMessage.data = TXTextControl.getCultures();

                SendMessage(returnMessage);
                break;
            }
            case "getFormattingPrinter": {
                TXTextControl.getFormattingPrinter(function (e) {
                    var returnMessage = new Object();
                    returnMessage.receiver = "txtextcontrol-client";
                    returnMessage.callbackGuid = message.callbackGuid;
                    returnMessage.removeCallback = true;
                    returnMessage.data = e;

                    SendMessage(returnMessage);
                });
                break;
            }
            case "getInstalledPrinters": {
                TXTextControl.getInstalledPrinters(function (e) {
                    var returnMessage = new Object();
                    returnMessage.receiver = "txtextcontrol-client";
                    returnMessage.callbackGuid = message.callbackGuid;
                    returnMessage.removeCallback = true;
                    returnMessage.data = e;

                    SendMessage(returnMessage);
                });
                break;
            }
            case "getStatusBarColor": {
                TXTextControl.getStatusBarColor(function (e) {
                    var returnMessage = new Object();
                    returnMessage.receiver = "txtextcontrol-client";
                    returnMessage.callbackGuid = message.callbackGuid;
                    returnMessage.removeCallback = true;
                    returnMessage.data = e;

                    SendMessage(returnMessage);
                });
                break;
            }
            case "getSubTextParts": {
                TXTextControl.getSubTextParts(function (e) {
                    var returnMessage = new Object();
                    returnMessage.receiver = "txtextcontrol-client";
                    returnMessage.callbackGuid = message.callbackGuid;
                    returnMessage.removeCallback = true;
                    returnMessage.object = "SubTextPart";

                    m_SubTextParts = {};

                    e.forEach(function (element) {
                        var uniqueID = uuidv4();
                        element["storedId"] = uniqueID;
                        m_SubTextParts[uniqueID] = element;
                    });

                    returnMessage.data = e;
                    SendMessage(returnMessage);
                }, message.parameters[1]);
                break;
            }
            case "getTextFields": {
                TXTextControl.getTextFields(function (e) {
                    var returnMessage = new Object();
                    returnMessage.receiver = "txtextcontrol-client";
                    returnMessage.callbackGuid = message.callbackGuid;
                    returnMessage.removeCallback = true;
                    returnMessage.object = "TextField";

                    m_TextFields = {};

                    e.forEach(function (element) {
                        var uniqueID = uuidv4();
                        element["storedId"] = uniqueID;
                        m_TextFields[uniqueID] = element;
                    });

                    returnMessage.data = e;
                    SendMessage(returnMessage);
                }, message.parameters[0]);
                break;
            }
            case "getTextParts": {
                TXTextControl.getTextParts(function (e) {
                    var returnMessage = new Object();
                    returnMessage.receiver = "txtextcontrol-client";
                    returnMessage.callbackGuid = message.callbackGuid;
                    returnMessage.removeCallback = true;
                    returnMessage.object = "TextPart";

                    m_TextParts = {};

                    e.forEach(function (element) {
                        var uniqueID = uuidv4();
                        element["storedId"] = uniqueID;
                        m_TextParts[uniqueID] = element;
                    });

                    returnMessage.data = e;

                    SendMessage(returnMessage);
                }, message.parameters[1]);
                break;
            }
            case "removeTextField": {
                TXTextControl.removeTextField(m_TextFields[message.parameters[0]["storedId"]], message.parameters[1]);
                break;
            }
            case "resetContents": {
                TXTextControl.resetContents();
                break;
            }
            case "setBackColor": {
                TXTextControl.setBackColor(message.parameters[0]);
                break;
            }
            case "setFormattingPrinter": {
                TXTextControl.setFormattingPrinter(message.parameters[0]);
                break;
            }
            case "setStatusBarColor": {
                TXTextControl.setStatusBarColor(message.parameters[0]);
                break;
            }
            case "showHorizontalRuler": {
                TXTextControl.showHorizontalRuler(message.parameters[0]);
                break;
            }
            case "showMergeFieldDialog": {
                TXTextControl.showMergeFieldDialog(message.parameters[0]);
                break;
            }
            case "showRibbonBar": {
                TXTextControl.showRibbonBar(message.parameters[0]);
                break;
            }
            case "showStatusBar": {
                TXTextControl.showStatusBar(message.parameters[0]);
                break;
            }
            case "showVerticalRuler": {
                TXTextControl.showVerticalRuler(message.parameters[0]);
                break;
            }
        }
    }

    function SendMessage(message) {
        var receiver = window.parent;
        var message = JSON.stringify(message);

        receiver.postMessage(message, "*");
    }

    window.addEventListener('message', receiveMessage);

    // *** Text Control Events ***
    TXTextControl.addEventListener("textControlLoaded", function () {
        var returnMessage = new Object();
        returnMessage.receiver = "txtextcontrol-client";
        returnMessage.callbackGuid = "-1";
        returnMessage.removeCallback = true;

        SendMessage(returnMessage);
    });

    // *** H E L P E R  F U N C T I O N S ***

    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}