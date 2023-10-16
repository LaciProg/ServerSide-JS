/**
 * Using the template engine render the values into the template
 */
module.exports = function (objectrepository, viewName) {
    return function (req, res) {
        //res.end('render: ' + viewName);
        res.render(viewName, res.locals);
    }
}