"use strict";

/* config-overrides.js */
var _require = require("customize-cra"),
    override = _require.override,
    useBabelRc = _require.useBabelRc;

module.exports = override(useBabelRc());