import sequelize from '../config/configDataBase.js'
import { Sequelize } from 'sequelize'

export const SocialMedia =sequelize.define(
  'SocialMedia',{
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  leadId: {
    type: Sequelize.INTEGER
  },
  whatsapp: {
    type: Sequelize.STRING
  },
  facebook: {
    type: Sequelize.STRING
  },
  insta: {
    type: Sequelize.STRING
  },
  linkedin: {
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