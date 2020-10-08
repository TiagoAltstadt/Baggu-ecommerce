module.exports = function(sequelize, dataTypes) {

    let alias = 'Products';

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
        },
        description: {
            type: dataTypes.STRING,
            notNull: true
        },
        price: {
            type: dataTypes.INTEGER,
            notNull: true
        },
        brand_id: {
            type: dataTypes.INTEGER,
            notNull: true
        },
        category_id: {
            type: dataTypes.INTEGER,
            notNull: true
        }
    };

    let config = {
        tableName: "products",
        timestamps: false
    };

    const Products = sequelize.define(alias, cols, config);

    Products.assosiate = function(models) {
        Products.belongsTo(models.Categories, {
            as: "categories",
            foreignKey: "category_id"
        });

        Products.belongsTo(models.Brands, {
            as: "brands",
            foreignKey: "brand_id"
        });

        Products.hasMany(models.Images, {
            as: "images",
            foreignKey: "product_id"
        })
    }


    return Products;
}