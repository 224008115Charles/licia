/* Check if value is a Map object.
 *
 * |Name  |Type   |Desc                  |
 * |------|-------|----------------------|
 * |val   |*      |Value to check        |
 * |return|boolean|True if value is a Map|
 */

/* example
 * isMap(new Map()); // -> true
 * isMap(new WeakMap()); // -> false
 */

/* module
 * env: all
 * test: all
 */

_('objToStr');

exports = function(val) {
    return objToStr(val) === '[object Map]';
};
