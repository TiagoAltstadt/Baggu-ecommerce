module.exports = function(sequelize, dataTypes) {

    let alias = 'Products';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        title: {
            allowNull: false,
            type: dataTypes.STRING
        }
    };

    let config = {
        //tableName: "products",
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config);

    return Product;
}