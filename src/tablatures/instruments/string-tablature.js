var AbsoluteElement = require('../../write/abc_absolute_element');
var RelativeElement = require('../../write/abc_relative_element');

/**
 * Layout tablature informations for draw
 * @param {*} numLines 
 * @param {*} lineSpace 
 */

function StringTablature(numLines, lineSpace) {
  this.numLines = numLines;
  this.lineSpace = lineSpace;
  this.verticalSize = this.numLines * this.lineSpace;
  var pitch = 3;
  this.bar = {
    pitch: pitch,
    pitch2: lineSpace * numLines ,
    height: 5,
  }
}

StringTablature.prototype.setRelative = function(child,relative,first) {
  switch (child.type) {
    case 'bar':
      relative.pitch = this.bar.pitch;
      relative.pitch2 = this.bar.pitch2 ;
      relative.height = this.height;
    break;
    case 'symbol':
      var top = this.bar.pitch2/2
      if (child.name == 'dots.dot') {
        if (first) {
          relative.pitch = top;
          return false;
        } else {
          relative.pitch = top + this.lineSpace;
          return true;
        }
      }
    break;
  }
  return first;
}

module.exports = StringTablature;