module.exports = (sequelize, dataTypes) => {
    let alias = "Category_users";
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
        tableName: "category_users",
        timestamps: false   //-- sirve para createDate y updateDate
    };

    const Category_users = sequelize.define(alias, cols, config);

    Category_users.assosiate = function (models) {
        Category_users.hasMany(models.User, {
            as: "users",
            foreignKey: "category_user_id"
        })
    }

    return Category_users;
}