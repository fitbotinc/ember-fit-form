/* eslint-env node */

module.exports = {
  description: 'Generates a form-adapter unit test',
  locals: function (options) {
    return {
      friendlyTestDescription: options.entity.name + ' adapter',
    };
  },
};
