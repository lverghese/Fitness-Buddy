const Workoutplan = require('./Workoutplan');
const User = require('./User');
const Goals = require('./Goals');
const cut = require('./cut');
const cardio = require('./cardio');
const bulk = require('./bulk');

Goals.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCASE'
});

User.hasMany(Workoutplan, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Workoutplan.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

cut.belongsTo(Workoutplan, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

cardio.belongsTo(Workoutplan, {
    foreignKey: 'user_id',
    onDelete:'CASCADE'
});

bulk.belongsTo(Workoutplan, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});




