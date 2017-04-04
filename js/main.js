$(document).ready(function(){
	$('#searchUser').on('keyup', function(e){
		let username = e.target.value;

		//make request to github
		$.ajax({
			url:'https://api.github.com/users/'+username,
			data:{
				client_id:'265e25aab339b22902e3',
				client_secret:'4638d72c2507d8088573da87dc49afb31b188cf5'
			}  
		}).done(function(user){
			$('#profile').html(`
				${user.name}`);
		});
	});
});