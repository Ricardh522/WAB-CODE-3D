define(['dojo/_base/declare', 'jimu/BaseWidget'],
function(declare, BaseWidget) {
  //To create a widget, you need to derive from BaseWidget.
  return declare([BaseWidget], {

    // Custom widget code goes here

    baseClass: 'obstacle-generator',
    // this property is set by the framework when widget is loaded.
    // name: 'ObstacleGenerator',
    // add additional properties here

    //methods to communication with app container:
    postCreate: function() {
      this.inherited(arguments);
      console.log('ObstacleGenerator::postCreate');
    }

    // startup: function() {
    //   this.inherited(arguments);
    //   console.log('ObstacleGenerator::startup');
    // },

    // onOpen: function(){
    //   console.log('ObstacleGenerator::onOpen');
    // },

    // onClose: function(){
    //   console.log('ObstacleGenerator::onClose');
    // },

    // onMinimize: function(){
    //   console.log('ObstacleGenerator::onMinimize');
    // },

    // onMaximize: function(){
    //   console.log('ObstacleGenerator::onMaximize');
    // },

    // onSignIn: function(credential){
    //   console.log('ObstacleGenerator::onSignIn', credential);
    // },

    // onSignOut: function(){
    //   console.log('ObstacleGenerator::onSignOut');
    // }

    // onPositionChange: function(){
    //   console.log('ObstacleGenerator::onPositionChange');
    // },

    // resize: function(){
    //   console.log('ObstacleGenerator::resize');
    // }

//methods to communication between widgets:

  });

});
