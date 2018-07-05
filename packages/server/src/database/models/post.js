module.exports = function(db) {
  let Post = db.Model.extend({
    tableName: 'posts',
    posts: function() {
      return this.hasMany('Comment');
    }
  });

  return db.Model('Post', Post);
};
