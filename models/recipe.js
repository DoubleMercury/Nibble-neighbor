module.exports = function(sequelize, DataTypes){
    let Recipe = sequelize.define("Recipe", {
        label:{
            type: DataTypes.STRING,
            allowNull: false
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false
        },
        url:{
            type: DataTypes.STRING,
            allowNull: false
        },
        calories:{
            type: DataTypes.FLOAT,
            allowNull: false
        }

    });

    Recipe.associate = function(models){
        Recipe.belongsTo(models.User,{
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Recipe;
}