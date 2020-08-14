const searchController = {
    search: (req, res) => {

        let busqueda = res.query;
        res.send(busqueda); 
        
    }
};

module.exports = searchController;