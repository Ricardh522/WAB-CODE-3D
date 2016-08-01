import declare from 'dojo/_base/declare';
import BaseWidget from 'jimu/BaseWidget';

// To create a widget, you need to derive from BaseWidget.
export default declare([BaseWidget], {

  // Custom widget code goes here

  baseClass: 'obstacle-generator',

  // add additional properties here

  // methods to communication with app container:
  postCreate () {
    this.inherited(arguments);
    console.log('ObstacleGenerator::postCreate');
  }
  // startup() {
  //   this.inherited(arguments);
  //   console.log('ObstacleGenerator::startup');
  // },
  // onOpen() {
  //   console.log('ObstacleGenerator::onOpen');
  // },
  // onClose(){
  //   console.log('ObstacleGenerator::onClose');
  // },
  // onMinimize(){
  //   console.log('ObstacleGenerator::onMinimize');
  // },
  // onMaximize(){
  //   console.log('ObstacleGenerator::onMaximize');
  // },
  // onSignIn(credential){
  //   console.log('ObstacleGenerator::onSignIn', credential);
  // },
  // onSignOut(){
  //   console.log('ObstacleGenerator::onSignOut');
  // }
  // onPositionChange(){
  //   console.log('ObstacleGenerator::onPositionChange');
  // },
  // resize(){
  //   console.log('ObstacleGenerator::resize');
  // }
});
