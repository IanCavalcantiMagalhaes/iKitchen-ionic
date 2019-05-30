cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-filechooser.FileChooser",
      "file": "plugins/cordova-plugin-filechooser/www/fileChooser.js",
      "pluginId": "cordova-plugin-filechooser",
      "clobbers": [
        "fileChooser"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-filechooser": "1.2.0"
  };
});