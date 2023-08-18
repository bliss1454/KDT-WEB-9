const { DataTypes } = require('sequelize');

const UserModel = (sequelize) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, //NOT NULL
            primaryKey: true,
            autoIncrement: true,
        },
        userid: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        pw: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
    },
    { //테이블명에는 자동으로 s가 붙는다, 그리고 생성일/시간등이 테이블 안에 생기는데 그것을 없애려면 밑의 3가지를 작성해줘야한다.
        tableName: "user",
        freezeTableName: true,
        timestamps: false
    }
    );
    return User;
};

module.exports = UserModel;
