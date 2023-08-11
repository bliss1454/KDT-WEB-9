const {DataTypes} = require('sequelize')


const studentProfileModel = (sequelize) => {
    const StudentProfile = sequelize.define('studentProfile', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true,
            allowNull: true
        },
        name :{ 
            type: DataTypes.STRING(15),
            allowNull: false
        },
        major: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
    });
    return StudentProfile;
}

module.exports = studentProfileModel