 $(function(){

		//get the information of the student
		$.ajax({
			url:"a2.xml",
			data:{},
			type:'GET',
			dataType:'xml',
			error: function(err){
				console.log(err);
			},
			success:function(data){
				var title=$(data).find('title').text();
				$('.title').html(title);
				var name=$(data).find('name').text();
				$('.name').html(name+" | ");
				var studentNo=$(data).find('name').attr('studentNo');
				$('.studentNo').html(studentNo+" | ");
				var program=$(data).find('name').attr('program');
				$('.program').html(program);
				var movies=$(data).find('movie');
				$(movies).each(function(index,obj){
					var movieName=$(obj).find('movieName').text();
					$('#m'+(index+1)).html(movieName);
					$('#movie'+(index+1)+' .movieName').html(movieName);
					var img=$(obj).find('movieName').attr('img');
					$('#movie'+(index+1)+' img').attr('src',img);
					$('#movie'+(index+1)+' img').attr('alt',movieName);
					
					var casts=$(obj).find('cast');
					var str="";
					$(casts).each(function(index,obj){
						str+="<li>"+$(obj).text()+"</li>";
						
					});
					$('#movie'+(index+1)+' .cast').html(str);
					var plot=$(obj).find('plot').text();
					$('#movie'+(index+1)+' .plot').html(plot);
					var reviews=$(obj).find('review');
					str="";
					$(reviews).each(function(index,obj){
						str+="<li>"+$(obj).text()+"</li>";
						
					});
					$('#movie'+(index+1)+' .review').html(str);
					var imdb=$(obj).find('imdb').text();
					$('#movie'+(index+1)+' .imdb').attr('href',imdb);
					var theater=$(obj).find('theater').text();
					$('#movie'+(index+1)+' .theater').attr('href',theater);
				});	
					
	
			}
		});
	
		
 
 });

