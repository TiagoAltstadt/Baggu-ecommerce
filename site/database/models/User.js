module.exports = function (sequelize, dataTypes) {

    let alias = 'Users';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncremental: true,
            notNull: true
        },
        avatar: {
            type: dataTypes.STRING
        },
        username: {
            type: dataTypes.STRING
        },
        name: {
            type: dataTypes.STRING,
            notNull: true
        },
        surname: {
            type: dataTypes.STRING,
            notNull: true
        },
        email: {
            type: dataTypes.STRING,
            notNull: true
        },
        password: {
            type: dataTypes.STRING,
            notNull: true
        },
        category_user_id: {
            type: dataTypes.INTEGER,
            notNull: true
        }

    };

    let config = {
        tableName: "users",
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config);

    User.assosiate = function (models) {
        User.belongsTo(models.Category_user, {
            as: "category_users",
            foreignKey: "category_user_id"
        })
    }
    return User;
}