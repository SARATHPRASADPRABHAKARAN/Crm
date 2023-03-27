import sequelize from '../config.js'
import { Sequelize } from 'sequelize'

export const customerFavourite =sequelize.define(
  'customer_favourite',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    customerId: {
      type: Sequelize.INTEGER
    },
    state: {
      type: Sequelize.STRING
    },
    country: {
      type: Sequelize.STRING
    },
    food: {
      type: Sequelize.STRING
    },
    hobie: {
      type: Sequelize.STRING
    },
    flight: {
      type: Sequelize.STRING
    },
    vehicle: {
      type: Sequelize.STRING
    },
    deletedAt: {
      type: Sequelize.DATE
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  
});