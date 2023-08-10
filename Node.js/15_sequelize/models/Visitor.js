//visitor에 대한 테이블 정의
const Visitor = function (sequelize, DataTypes) {
    //sequelize는 models의 index.js에 있는 s(소문자)equelize (접속하는 그 경로를 뜻함)
    //DataTypes는 models의 index.js에 있는 Sequelize
    const model = sequelize.define(
<<<<<<< HEAD
        'visitor',  //테이블명
=======
        'visitor',
>>>>>>> 3625214b296458adbb195ec80e8a34f634506a37
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
<<<<<<< HEAD
        // {
        //     tableName: 'visitor',
        //     freezeTableName: true,  //복수형막는거
        //     timestamps: false,
        // }
        );
=======
        {
            tableName: 'visitor',
            freezeTableName: true,
            timestamps: false,
        });
>>>>>>> 3625214b296458adbb195ec80e8a34f634506a37
        return model
};

module.exports = Visitor;