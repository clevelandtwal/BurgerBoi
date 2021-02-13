const mysql =  require("mysql")
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else{
connection = mysql.createConnection({
    host: "aqxdf9yc5brasdfgl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    
    port: 3306,

    user: "	lkpptjlfmzbpoc1n",

    password: "	lkpptjlfmzbpoc1n",

    database: "l3vkgy69z9hgk45k"
});
}
connection.connect(function(err) {
    if (err) throw err;
    console.log("You are connected to mysql")
})



module.exports = connection;