module.exports = function(sequelize, dataTypes) {

    let alias = 'Categories';

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
        tableName: "categories",
        timestamps: false
    };

    const Categories = sequelize.define(alias, cols, config);

    Categories.assosiate = function(models) {
        Categories.hasMany(models.Products, {
            as: "productsCategories",
            foreignKey: "category_id"
        })
    }

    return Categories;
}