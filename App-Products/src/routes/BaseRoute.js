const autoBind = require("auto-bind")
class RouteController {
        constructor(){
                autoBind(this)
        }
}
module.exports = RouteController;
