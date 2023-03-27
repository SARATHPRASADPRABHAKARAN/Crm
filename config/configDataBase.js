import Sequelize from 'sequelize';


 export const sequelize = new Sequelize("crm","root","root",{
    host:"127.0.0.1",
    dialect:"mysql"
})

