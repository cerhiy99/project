const {Sequelize}=require("sequelize");

module.exports=new Sequelize(
    'project',
    'root',
    '',
    {
        dialect:"mysql",
        host:'localhost',
        port:3301
    }
);