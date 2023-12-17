"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productName: {
        type: Sequelize.STRING,
      },
      productDescription: {
        type: Sequelize.STRING,
      },
      productImage: {
        type: Sequelize.STRING,
      },
      productSlug: {
        type: Sequelize.STRING,
      },
      productPrice: {
        type: Sequelize.INTEGER,
      },
      productQuantity: {
        type: Sequelize.INTEGER,
      },
      productFeatured: {
        type: Sequelize.BOOLEAN,
      },
      productCategory: {
        type: Sequelize.JSON,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};
