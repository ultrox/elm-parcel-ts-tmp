"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Main_elm_1 = require("./Main.elm");
var root = document.querySelector("#app");
var flags = {
    now: Date.now()
};
Main_elm_1.Elm.Main.init({ node: root, flags: flags });
