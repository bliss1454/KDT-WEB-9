const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'todo_user',
  dialect: 'mysql',
});

module.exports = (Sequelize, DataTypes) => {
    const model = Sequelize.define(
        "todo", 
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            done: {
                type: DataTypes.TINYINT,
                allowNull: false,
                defaultValue: 0,
            }
        },
        {
            tableName: "todo",
            freezeTableName: true, 
            timestamps: false, 
        }
    );
    return model;
}
