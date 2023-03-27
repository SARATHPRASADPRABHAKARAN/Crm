import sequelize from '../config.js'
import { Sequelize } from 'sequelize'

export const Customer =sequelize.define(
  'Customer',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    leadId: {
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    whatsapp: {
      type: Sequelize.STRING
    },
    insta: {
      type: Sequelize.STRING
    },
    facebook: {
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