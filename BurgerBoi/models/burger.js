const orm = require("../config/orm.js")

let burger = {
        selectAll: function(cb) {
            orm.selectAll("cheeseburgers", function(res) {
              cb(res);
            });
          },

    insertOne: function (cols, vals, callback) {
        orm.insertOne("cheeseburgers", cols, vals, callback, function(res) {
            callback(res)
        })
    },
    updateOne: function (objColsVals, condition, callback) {
        orm.updateOne("cheeseburgers", objColsVals, condition, function(res){
            callback(res)
        })
    }
};

module.exports = burger;
