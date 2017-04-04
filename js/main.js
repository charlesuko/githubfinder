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
					<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">${user.name}</h3>
  </div>
  <div class="panel-body">
    <div class="row">
    	<div class="col-md-3">
    		<img class="thumbnail avatar" src="${user.avatar_url}">
    		<a class="btn btn-block btn-primary" target="_blank"  href="${user.html_url}">View profile</a>
    	</div>
    	<div class="col-md-9">
    		<span class="label label-default">Public Repos: ${user.public_repos}</span>
			<span class="label label-primary">Public Gists: ${user.public_gists}</span>
			<span class="label label-success">Public Followers: ${user.followers}</span>
			<span class="label label-info">Following: ${user.following}</span>
			<br> <br>
			<ul class="list-group">
				<li class="list-group-item">Company: ${user.company}</li>
				<li class="list-group-item">Website: ${user.blog}</li>
				<li class="list-group-item">Location: ${user.location}</li>
				<li class="list-group-item">Member Since: ${user.created_at}</li>



    	</div>
    	
    </div>
  </div>
</div>
				`);
		});
	});
});