import DS from 'ember-data';

export default DS.Model.extend({
  comments: DS.hasMany(),

  title: DS.attr(),
  body: DS.attr()
});
