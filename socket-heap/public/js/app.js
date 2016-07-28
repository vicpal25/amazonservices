/*************************************
//
// socket-heap app
//
**************************************/

// connect to our socket server
var socket = io.connect('http://localhost:1337/');

var app = app || {};


var socket_heap = function() {

	return {

			connect: function() {

				console.log("here");

			}


	}


}

// shortcut for document.ready
$(function(){

 var sh = new socket_heap();

	//setup some common vars
	var $blastField = $('#blast'),
		$allPostsTextArea = $('#allPosts'),
		$clearAllPosts = $('#clearAllPosts'),
		$sendBlastButton = $('#send');


	//SOCKET STUFF
	socket.on("blast", function(data){
		var copy = $allPostsTextArea.html();
		$allPostsTextArea.html('<p>' + copy + data.msg + "</p>");
		$allPostsTextArea.scrollTop($allPostsTextArea[0].scrollHeight - $allPostsTextArea.height());
		//.css('scrollTop', $allPostsTextArea.css('scrollHeight'));

	});

	$clearAllPosts.click(function(e){
		$allPostsTextArea.text('');
	});

	$sendBlastButton.click(function(e){

		var blast = $blastField.val();
		if(blast.length){
			socket.emit("blast", {msg:blast},
				function(data){
					$blastField.val('');
				});
		}


	});

	$blastField.keydown(function (e){
	    if(e.keyCode == 13){
	        $sendBlastButton.trigger('click');//lazy, but works
	    }
	})

});
