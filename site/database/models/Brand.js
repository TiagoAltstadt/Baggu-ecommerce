module.exports = function(sequelize, dataTypes) {

    let alias = 'Brands';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncremental: true,
            notNull: true
        },
        name: {
            type: dataTypes.STRING,
            notNull: true
        }
    };

    let config = {
        tableName: "brands",
        timestamps: false
    };

    const Brands = sequelize.define(alias, cols, config);

    Brands.assosiate = function(models) {
        Brands.hasMany(models.Products, {
            as: "productsBrands",
            foreignKey: "brand_id"
        })
    }


    return Brands;
}