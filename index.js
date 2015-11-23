var rbTemplate = require('rb_template').template;

module.exports = function (source) {
	this.cacheable && this.cacheable();
	var template = rbTemplate(source);
	return 'module.exports = ' + template.source;
};
