	
			var ctx = document.getElementById('main').getContext('2d');
			var map = [
				[1,0,0,0,0,0,0,0,0,1],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,1],
			];
			
			var block = [
				[0,0,0],
				[1,1,1],
				[0,1,0],
			];
			
			var oorsprong = {
				x: 4,
				y: 0,
			};
			
			setInterval(gameLoop, 1500/*60*/);
			function gameLoop ()
			{
				drawMap();
				move();	
			};
			
			function drawMap ()
			{
				for (var i = 0; i < map.length; i++)
				{
					for (var j = 0; j < map[i].length; j++) {
						if (map[i][j] === 0) {
							ctx.fillStyle = 'pink';
							//ctx.fillStyle = 'transparent';
							ctx.fillRect(j * 34, i * 34, 34, 34);
						};
						
						if (map[i][j] === 1) {
							ctx.fillStyle = '#FF0000';
							ctx.fillRect(j * 34, i * 34, 34, 34);
						};
						
						if (map[i][j] === 2) {
							ctx.fillStyle = 'blue';
							ctx.fillRect(j * 34, i * 34, 34, 34);			
						};
					};
				};
			};
			
			function move ()
			{
				blockMove();
				hide();
				drawBlock();
			};
			
			function blockMove()
			{
				oorsprong.y = oorsprong.y + 1;
			};
			
			function drawBlock()
			{
				if (oorsprong.y >= 2)
				{
					map[oorsprong.y - 2][oorsprong.x] 		= block[0][0]; 
					map[oorsprong.y - 2][oorsprong.x + 1] 	= block[0][1];
					map[oorsprong.y - 2][oorsprong.x + 2] 	= block[0][2];
				};
				
				if (oorsprong.y >= 1)
				{
					map[oorsprong.y - 1][oorsprong.x] 		= block[1][0];
					map[oorsprong.y - 1][oorsprong.x + 1]	= block[1][1];
					map[oorsprong.y - 1][oorsprong.x + 2] 	= block[1][2];
				};
				
				map[oorsprong.y][oorsprong.x] 			= block[2][0];	//oorsprong
				map[oorsprong.y][oorsprong.x + 1] 		= block[2][1];
				map[oorsprong.y][oorsprong.x + 2] 		= block[2][2];	
			};
			
			function hide ()
			{
				for (var a = 0; a < map.length; a++)
				{
					for (var b = 0; b < map[a].length; b++) 
					{
						if (map[a][b] === 1)
						{
							map[a][b] = 0;
						};
					};
				};
			};