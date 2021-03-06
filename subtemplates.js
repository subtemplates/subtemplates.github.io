var imagesToken = 'http://i.pcp003.com';
document.addEventListener('DOMContentLoaded', function() {
	var subtemplates = document.querySelectorAll('.g2-template');
	Array.prototype.forEach.call(subtemplates, function(subtemplate) {
		(function(subtemplate) {
			function handler() {
				if(this.status == 200) {
					var tmp = document.createElement('div');
					tmp.innerHTML = this.responseText.replace(/{IMAGES}/g, imagesToken);
					subtemplate.outerHTML = tmp.innerHTML;
					if(tmp.querySelector('script')) {
						var scripts = tmp.querySelectorAll('script');
						Array.prototype.forEach.call(scripts, function(script) {
							setTimeout(function() {
								eval(script.innerHTML);
							}, 100);
						});
					}
				} else {
					subtemplate.outerHTML = '';
				}
			}
			var client = new XMLHttpRequest();
			client.onload = handler;
			//client.open("GET", "https://cdn.rawgit.com/subtemplates/subtemplates.github.io/master/"+subtemplate.innerHTML+"/index.html");
			client.open("GET", "https://rawgit.com/subtemplates/subtemplates.github.io/master/"+subtemplate.innerHTML+"/index.html");
			client.send();
		})(subtemplate);
	});
}, false);
