# axle vscode extension

The plug-in provides the functions of code prompt, code generation and interface address extraction

### Guide

`vscode` will prompt when starting with a `#` sign followed by the English letter of the method to be used.

<img style="width: 50%; margin-top: 10px; border-radius: 5px" src="https://varlet.gitee.io/axle/ext_vsc_use.png" alt="vscode ext link" />

Select a prompt and press Enter to quickly generate the corresponding code template.

<img style="width: 50%; margin-top: 10px; border-radius: 5px" src="https://varlet.gitee.io/axle/ext_vsc_gen.png" alt="vscode ext link" />

When we paste text into the code, use `cmd` (`windows` users use `ctrl` ) + `shift` + `v` to extract the address from the clipboard.

### Input Reference

| Short  | Meaning              |
|--------|----------------------|
| `#ef`  | `export function`    |
| `#g`   | `get`                |
| `#gb`  | `getBlob`            |
| `#gd`  | `getDocument`        |
| `#gt`  | `getText`            |
| `#ga`  | `getArrayBuffer`     |
| `#gs`  | `getStream`          |
| `#h`   | `head`               |
| `#hb`  | `headBlob`           |
| `#ht`  | `headText`           |
| `#ha`  | `headArrayBuffer`    |
| `#hs`  | `headStream`         |
| `#o`   | `options`            |
| `#ob`  | `optionsBlob`        |
| `#od`  | `optionsDocument`    |
| `#ot`  | `optionsText`        |
| `#oa`  | `optionsArrayBuffer` |
| `#d`   | `delete`             |
| `#db`  | `deleteBlob`         |
| `#dd`  | `deleteDocument`     |
| `#dt`  | `deleteText`         |
| `#da`  | `deleteArrayBuffer`  |
| `#ds`  | `deleteStream`       |
| `#p`   | `post`               |
| `#pj`  | `postJSON`           |
| `#pm`  | `postMultipart`      |
| `#pu`  | `put`                |
| `#puj` | `putJSON`            |
| `#pum` | `putMultipart`       |
| `#pa`  | `patch`              |
| `#paj` | `patchJSON`          |
| `#pam` | `patchMultipart`     |