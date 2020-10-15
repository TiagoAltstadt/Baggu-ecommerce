module.exports = function(sequelize, dataTypes) {

    let alias = 'Images';

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
        product_id: {
            type: dataTypes.INTEGER,
            notNull: true
        }
    };

    let config = {
        tableName: "images",
        timestamps: false
    };

    const Images = sequelize.define(alias, cols, config);

    Images.assosiate = function(models) {
        Images.belongsTo(models.Products, {
            as: "productsImages",
            foreignKey: "product_id"
        })
    }

    return Images;
}