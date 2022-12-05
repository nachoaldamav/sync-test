var fready;

(function(){
  var undef = typeof undefined;

  fready = function( fn ){
    if( typeof window === undef ){
      setTimeout( fn, 0 );
      return;
    }

    switch( document.readyState ){
      case 'complete':
      case 'interactive':
        setTimeout( fn, 0 );
        break;
      default:
        window.addEventListener( 'DOMContentLoaded', fn );
    }
  };

  if( typeof module !== undef ){
    module.exports = fready;
  }
})();
