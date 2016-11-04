"use strict";
var utilities_1 = require('../utils/utilities');
function Getter(getter) {
    return function (target, key) {
        if (!target.$$getters)
            target.$$getters = {};
        if (typeof getter === 'function') {
            target.$$getters[key] = getter;
        }
        else {
            target.$$getters[key] = function (state) {
                return utilities_1.getValue(state, getter);
            };
        }
        delete target[key];
    };
}
exports.Getter = Getter;
function Action(action) {
    return function (target, key) {
        if (!target.$$actions)
            target.$$actions = {};
        target.$$actions[key] = action;
        delete target[key];
    };
}
exports.Action = Action;
//# sourceMappingURL=VuexDecorator.js.map