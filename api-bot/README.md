api-bot
============

An `api-bot` is an customizable chat bot that can proxy with any APIs and
transform the results into a bot message. A JSON or YAML config file is used to
describe the both the interaction with the API and the transformation of the
output. The config file/doc can also easily be served via a noSQL database.

This is a NodeJS library to handle various instructions for an `api-bot`.

## Quick start
```
yarn add api-bot --save
```

## API Reference
### BotMsg
Module for handling messages from bot.


* [BotMsg](#module_BotMsg)
    * [.BaseCmd](#module_BotMsg.BaseCmd)
        * [new BaseCmd(payload, textAccessor)](#new_module_BotMsg.BaseCmd_new)
        * [.text](#module_BotMsg.BaseCmd+text) ⇒ <code>String</code>
        * [.payload](#module_BotMsg.BaseCmd+payload) ⇒ <code>Object</code>
        * [.cmd](#module_BotMsg.BaseCmd+cmd) ⇒ <code>Object</code>
        * [.tokens](#module_BotMsg.BaseCmd+tokens) ⇒ <code>Array.&lt;String&gt;</code>
    * [.SlashCmd](#module_BotMsg.SlashCmd) ⇐ [<code>BaseCmd</code>](#module_BotMsg.BaseCmd)
        * [new SlashCmd(payload, textAccessor)](#new_module_BotMsg.SlashCmd_new)
        * [.text](#module_BotMsg.BaseCmd+text) ⇒ <code>String</code>
        * [.payload](#module_BotMsg.BaseCmd+payload) ⇒ <code>Object</code>
        * [.cmd](#module_BotMsg.BaseCmd+cmd) ⇒ <code>Object</code>
        * [.tokens](#module_BotMsg.BaseCmd+tokens) ⇒ <code>Array.&lt;String&gt;</code>

<a name="module_BotMsg.BaseCmd"></a>

### BotMsg.BaseCmd
Base class to parse message string into commands and arguments.

**Kind**: static class of [<code>BotMsg</code>](#module_BotMsg)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | payload from bot. |
| text | <code>String</code> | text message from the payload. |
| cmd | <code>String</code> | Command string. |
| tokens | <code>Array.&lt;String&gt;</code> | Argument tokens. |


* [.BaseCmd](#module_BotMsg.BaseCmd)
    * [new BaseCmd(payload, textAccessor)](#new_module_BotMsg.BaseCmd_new)
    * [.text](#module_BotMsg.BaseCmd+text) ⇒ <code>String</code>
    * [.payload](#module_BotMsg.BaseCmd+payload) ⇒ <code>Object</code>
    * [.cmd](#module_BotMsg.BaseCmd+cmd) ⇒ <code>Object</code>
    * [.tokens](#module_BotMsg.BaseCmd+tokens) ⇒ <code>Array.&lt;String&gt;</code>

<a name="new_module_BotMsg.BaseCmd_new"></a>

#### new BaseCmd(payload, textAccessor)
Create a new BaseCmd instance.


| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | payload from bot. |
| textAccessor | <code>function</code> | accessor function to extract message text from the payload. |

<a name="module_BotMsg.BaseCmd+text"></a>

#### baseCmd.text ⇒ <code>String</code>
**Kind**: instance property of [<code>BaseCmd</code>](#module_BotMsg.BaseCmd)  
**Returns**: <code>String</code> - text message from the payload  
<a name="module_BotMsg.BaseCmd+payload"></a>

#### baseCmd.payload ⇒ <code>Object</code>
**Kind**: instance property of [<code>BaseCmd</code>](#module_BotMsg.BaseCmd)  
**Returns**: <code>Object</code> - payload payload from bot.  
<a name="module_BotMsg.BaseCmd+cmd"></a>

#### baseCmd.cmd ⇒ <code>Object</code>
**Kind**: instance property of [<code>BaseCmd</code>](#module_BotMsg.BaseCmd)  
**Returns**: <code>Object</code> - cmd Command string.  
<a name="module_BotMsg.BaseCmd+tokens"></a>

#### baseCmd.tokens ⇒ <code>Array.&lt;String&gt;</code>
**Kind**: instance property of [<code>BaseCmd</code>](#module_BotMsg.BaseCmd)  
**Returns**: <code>Array.&lt;String&gt;</code> - tokens Argument tokens.  
<a name="module_BotMsg.SlashCmd"></a>

### BotMsg.SlashCmd ⇐ [<code>BaseCmd</code>](#module_BotMsg.BaseCmd)
Class to extract a slash command string (i.e. `/hello`) and the argument tokens from a text message.

**Kind**: static class of [<code>BotMsg</code>](#module_BotMsg)  
**Extends**: [<code>BaseCmd</code>](#module_BotMsg.BaseCmd)  

* [.SlashCmd](#module_BotMsg.SlashCmd) ⇐ [<code>BaseCmd</code>](#module_BotMsg.BaseCmd)
    * [new SlashCmd(payload, textAccessor)](#new_module_BotMsg.SlashCmd_new)
    * [.text](#module_BotMsg.BaseCmd+text) ⇒ <code>String</code>
    * [.payload](#module_BotMsg.BaseCmd+payload) ⇒ <code>Object</code>
    * [.cmd](#module_BotMsg.BaseCmd+cmd) ⇒ <code>Object</code>
    * [.tokens](#module_BotMsg.BaseCmd+tokens) ⇒ <code>Array.&lt;String&gt;</code>

<a name="new_module_BotMsg.SlashCmd_new"></a>

#### new SlashCmd(payload, textAccessor)
Create a new SlashCmd instance.


| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | payload from bot. |
| textAccessor | <code>function</code> | accessor function to extract message text from the payload. |

<a name="module_BotMsg.BaseCmd+text"></a>

#### slashCmd.text ⇒ <code>String</code>
**Kind**: instance property of [<code>SlashCmd</code>](#module_BotMsg.SlashCmd)  
**Returns**: <code>String</code> - text message from the payload  
<a name="module_BotMsg.BaseCmd+payload"></a>

#### slashCmd.payload ⇒ <code>Object</code>
**Kind**: instance property of [<code>SlashCmd</code>](#module_BotMsg.SlashCmd)  
**Returns**: <code>Object</code> - payload payload from bot.  
<a name="module_BotMsg.BaseCmd+cmd"></a>

#### slashCmd.cmd ⇒ <code>Object</code>
**Kind**: instance property of [<code>SlashCmd</code>](#module_BotMsg.SlashCmd)  
**Returns**: <code>Object</code> - cmd Command string.  
<a name="module_BotMsg.BaseCmd+tokens"></a>

#### slashCmd.tokens ⇒ <code>Array.&lt;String&gt;</code>
**Kind**: instance property of [<code>SlashCmd</code>](#module_BotMsg.SlashCmd)  
**Returns**: <code>Array.&lt;String&gt;</code> - tokens Argument tokens.  
------------
### FbHook
Module for handling Facebook messenger hooks.


* [FbHook](#module_FbHook)
    * [FbHook](#exp_module_FbHook--FbHook) ⏏
        * _static_
            * [.send(id, payload)](#module_FbHook--FbHook.send) ⇒ <code>Promise</code>
            * [.process(cmds, botCmd)](#module_FbHook--FbHook.process) ⇒ <code>Promise</code>
        * _inner_
            * [~Attachment](#module_FbHook--FbHook..Attachment) : <code>Object</code>
            * [~QuickReply](#module_FbHook--FbHook..QuickReply) : <code>Object</code>
            * [~Message](#module_FbHook--FbHook..Message) : <code>Object</code>
            * [~Recipient](#module_FbHook--FbHook..Recipient) : <code>Object</code>
            * [~Payload](#module_FbHook--FbHook..Payload) : <code>Object</code>

<a name="exp_module_FbHook--FbHook"></a>

### FbHook ⏏
Utility class to handle Facebook messenger APIs.

**Kind**: Exported class  
<a name="module_FbHook--FbHook.send"></a>

#### FbHook.send(id, payload) ⇒ <code>Promise</code>
Utility class to handle Facebook messenger APIs.

**Kind**: static method of [<code>FbHook</code>](#exp_module_FbHook--FbHook)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | id of the Facebook recipient to send the message to. |
| payload | [<code>Payload</code>](#module_FbHook--FbHook..Payload) | Payload to Facebook messenger. |

<a name="module_FbHook--FbHook.process"></a>

#### FbHook.process(cmds, botCmd) ⇒ <code>Promise</code>
Function to process a bot message from Facebook messenger.

**Kind**: static method of [<code>FbHook</code>](#exp_module_FbHook--FbHook)  

| Param | Type | Description |
| --- | --- | --- |
| cmds | <code>Object.&lt;String, Api.Transformer&gt;</code> | A map of `Api.Transformer`. |
| botCmd | <code>BotMsg.BaseCmd</code> | `BotMsg.BaseCmd` instance. |

<a name="module_FbHook--FbHook..Attachment"></a>

#### FbHook~Attachment : <code>Object</code>
`attachment` object for response message to Facebook messenger.
[details](https://developers.facebook.com/docs/messenger-platform/reference/send-api#attachment)

**Kind**: inner typedef of [<code>FbHook</code>](#exp_module_FbHook--FbHook)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>String</code> | Type of attachment, may be `image`, `audio`, `video`, `file` or `template`. |
| payload | <code>Any</code> | Payload of attachment. |

<a name="module_FbHook--FbHook..QuickReply"></a>

#### FbHook~QuickReply : <code>Object</code>
`quick_reply` object for response message to Facebook messenger.
[details](https://developers.facebook.com/docs/messenger-platform/reference/send-api#quick_reply)

**Kind**: inner typedef of [<code>FbHook</code>](#exp_module_FbHook--FbHook)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| content_type | <code>String</code> | `text` or `location`. |
| title | <code>String</code> | Caption of button. |
| payload | <code>String</code> \| <code>Number</code> | Custom data that will be sent back to you via webhook. |
| image_url | <code>String</code> | URL of image for text quick replies. |

<a name="module_FbHook--FbHook..Message"></a>

#### FbHook~Message : <code>Object</code>
`message` object for response message to Facebook messenger.
[details](https://developers.facebook.com/docs/messenger-platform/reference/send-api#message)

**Kind**: inner typedef of [<code>FbHook</code>](#exp_module_FbHook--FbHook)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| text | <code>String</code> | Message text. Previews will not be shown for the URLs in this field. Use attachment instead. Must be UTF-8 and has a 640 character limit. |
| attachment | [<code>Attachment</code>](#module_FbHook--FbHook..Attachment) | attachment object. Previews the URL. Used to send messages with media or Structured Messages. |
| quick_replies | [<code>Array.&lt;QuickReply&gt;</code>](#module_FbHook--FbHook..QuickReply) | Array of quick_reply to be sent with messages. |
| metadata | <code>String</code> | Custom string that is delivered as a message echo. 1000 character limit. |

<a name="module_FbHook--FbHook..Recipient"></a>

#### FbHook~Recipient : <code>Object</code>
`payload` object for response message to Facebook messenger.

**Kind**: inner typedef of [<code>FbHook</code>](#exp_module_FbHook--FbHook)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>String</code> \| <code>Number</code> | id of the Facebook messenger recipient. |

<a name="module_FbHook--FbHook..Payload"></a>

#### FbHook~Payload : <code>Object</code>
`payload` object for response message to Facebook messenger.
[details](https://developers.facebook.com/docs/messenger-platform/reference/send-api#payload)

**Kind**: inner typedef of [<code>FbHook</code>](#exp_module_FbHook--FbHook)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| recipient | [<code>Recipient</code>](#module_FbHook--FbHook..Recipient) | Recipient object. |
| message | [<code>Message</code>](#module_FbHook--FbHook..Message) | Message object. |
| sender_action | <code>String</code> | `typing_on`, `typing_off` or `mark_seen`. |
| notification_type | <code>String</code> | `REGULAR`, `SILENT_PUSH`, `NO_PUSH`. Defaults to `REGULAR`. |
| tag | <code>String</code> | The message tag string. See [Message Tags](https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags). |

------------
