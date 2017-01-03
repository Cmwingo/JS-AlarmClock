function Template() {}

Template.prototype.getWeather = function() {
    console.log("Hi! I'm a template object.");
};

exports.templateModule = Template;
