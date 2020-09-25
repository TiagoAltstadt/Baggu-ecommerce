module.exports = function(sequelize, dataTypes) {

    let alias = 'Users';

    let cols = {
        avatar: {
            type: dataTypes.STRING
        },
        username: {
            type: dataTypes.STRING
        },
        name: {
            allowNull: false,
            type: dataTypes.STRING
        },
        surname: {
            allowNull: false,
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        category: {
            type: dataTypes.INTEGER
        }

    };

    let config = {
        tableName: "users",
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config);

    return User;
}