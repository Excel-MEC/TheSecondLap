$(document).ready(function() {
	var i = 0;
	function LoopForever() {
		if (i == 0) $(".gold,.yesbank,.medical").fadeOut();
		if (i % 3 == 0) {
			$(".gold").fadeOut();
			$(".yesbank").fadeIn();
		} else if (i % 3 == 1) {
			$(".yesbank").fadeOut();
			$(".medical").fadeIn();
		} else {
			$(".medical").fadeOut();
			$(".gold").fadeIn();
		}
		i++;
	}
	var interval = self.setInterval(function() {
		LoopForever();
	}, 3000);
});
