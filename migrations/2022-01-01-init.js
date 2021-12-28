export
async function up(queryInterface, { DataTypes }) {
  await queryInterface.createTable('users', {
    id: {
      type: DataTypes.BIGINT(20).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    username: { type: DataTypes.STRING(255), allowNull: false }
  });
}

export
async function down(queryInterface) {
  await queryInterface.dropTable('users');
}
