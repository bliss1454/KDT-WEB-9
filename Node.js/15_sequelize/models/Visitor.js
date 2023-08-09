//visitor에 대한 테이블 정의
const Visitor = function (sequelize, DataTypes) {
    //sequelize는 models의 index.js에 있는 s(소문자)equelize (접속하는 그 경로를 뜻함)
    //DataTypes는 models의 index.js에 있는 Sequelize
    const model = sequelize.define(
        'visitor',
        {
            id : {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            comment: {
                type: DataTypes.TEXT('medium'),
            }
        }, 
        {
            tableName: 'visitor',
            freezeTableName: true,
            timestamps: false,
        });
        return model
};

module.exports = Visitor;