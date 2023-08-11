const {DataTypes} = require('sequelize');

const studentModel = (sequelize) => {
    const Student = sequelize.define('student', {
        id: {  //테이블명 앞글자의 대소문자에 따라 primarykey 첫글자 대소문자 구분됨
            type: DataTypes.INTEGER,
            allowNull : false,
            primaryKey: true,
            autoIncrement: true
        },
        userid : {
            type: DataTypes.STRING(31),
            allowNull: false
        },
        password : {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        email : {
            type: DataTypes.STRING(63),
            allowNull: true //null을 허용한다.
        }
    });
    return Student;
}

module.exports = studentModel