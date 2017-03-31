(function() {
	angular.module('starter').controller('SoundController', ['$ionicPlatform', '$timeout',  '$cordovaNativeAudio', SoundController]);
	
	function SoundController($ionicPlatform, $timeout, $cordovaNativeAudio) {  
	    var vm = this;

	    $ionicPlatform.ready(function() {

	        // all calls to $cordovaNativeAudio return promises

	        $cordovaNativeAudio.preloadSimple('cat', 'audio/cat.wav');
	        $cordovaNativeAudio.preloadSimple('dog', 'audio/dog.wav');
	        $cordovaNativeAudio.preloadSimple('horse', 'audio/horse.wav');

	        $cordovaNativeAudio.preloadSimple('bear', 'audio/bear.wav');
	        $cordovaNativeAudio.preloadSimple('duck', 'audio/duck.wav');
	        $cordovaNativeAudio.preloadSimple('cow', 'audio/cow.wav');

	        $cordovaNativeAudio.preloadSimple('pig', 'audio/pig.wav');
	        $cordovaNativeAudio.preloadSimple('chimp', 'audio/chimp.wav');
	        $cordovaNativeAudio.preloadSimple('bird', 'audio/bird.wav');
	    });

	    vm.play = function(sound) {
	        $cordovaNativeAudio.play(sound);
	    };

	    return vm;
	}
})();
