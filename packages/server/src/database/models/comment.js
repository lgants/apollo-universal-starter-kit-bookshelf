module.exports = function(db) {
  let Comment = db.Model.extend({
    tableName: 'posts',
    comments: function() {
      return this.belongsTo('Post');
    }
  });

  return db.Model('Comment', Comment);
};
