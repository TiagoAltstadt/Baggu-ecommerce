const listController = {
    list: (req, res) => {
        let users = [
            {id: 1, name: "Percy"},
            {id: 2, name: "Anabeth"},
            {id: 3, name: "Jason"}
        ]

        res.render('list', {'users': users});
    }
};

module.exports = listController;