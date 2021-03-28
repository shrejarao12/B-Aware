const connection = require('./connection');

module.exports={
    getDataDb : (req, res) => {
        const zipCode = req.params.id;
        connection.query("select * from data where zipcode = ?", zipCode,
            function(error, results, fields) {
            if (error) throw error;
            res.json(results);})
       //res.send(process.env.DB_HOST)
    },
    postDataDb:(req,res) => {
        const values = req.body;
        console.log(values)
        connection.query("insert into data values(?, ?, ?, ?, ?, ?, ?)" , [values.code, values.loc, values.age, values.eth, values.harr_type, values.arrested, values.details],
            function(error, results, fields) {
                if (error) throw error;
                res.json(results);})


        //res.send("shree")
    }
}