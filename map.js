var ctx = document.getElementById('main').getContext('2d');
var falling = true;

var map = [
	[2,2,0,0,0,0,0,0,0,1],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,2,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,1,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[2,2,2,2,2,2,2,2,2,2],
];

var mapCopy = [
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
];

var block = [
	[0,1,0],
	[1,1,1],
	[0,0,0],
];

var oorsprong = {
	x: 4,
	y: 0,
};

setInterval(gameLoop, 1500/*60*/);
function gameLoop ()
{
	clear();
	copyMapCopy();
	drawMap();
	checkCollision();
	copyMap();
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

function copyMap ()
{
	for (var copyMap1 = 0; copyMap1 < map.length; copyMap1++)
	{
		for (var copyMap2 = 0; copyMap2 < map[copyMap1].length; copyMap2++) 
		{
			if (map[copyMap1][copyMap2] === 2)
			{
				mapCopy[copyMap1][copyMap2] = map[copyMap1][copyMap2];
			};		
		};
	};	
};

function copyMapCopy ()
{
	for (var copyMap1 = 0; copyMap1 < map.length; copyMap1++)
	{
		for (var copyMap2 = 0; copyMap2 < map[copyMap1].length; copyMap2++) 
		{
			if (mapCopy[copyMap1][copyMap2] === 2)
			{
				map[copyMap1][copyMap2] = mapCopy[copyMap1][copyMap2];
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
	if (falling === true)
	{
		oorsprong.y = oorsprong.y + 1;
	};
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
			
function checkCollision ()
{
	if (map[oorsprong.y][oorsprong.x] === 2 || map[oorsprong.y][oorsprong.x + 1] === 2 || map[oorsprong.y][oorsprong.x + 2] === 2)
	{
		falling = false;
		makeSolid();	
	};
};

function makeSolid()
{
	for (var makeSolid1 = 0; makeSolid1 < map.length; makeSolid1++)
	{
		for (var makeSolid2 = 0; makeSolid2 < map[makeSolid1].length; makeSolid2++) 
		{
			if (map[makeSolid1][makeSolid2] === 1)
			{
				map[makeSolid1][makeSolid2] = 2;
			};		
		};
	};
};

function clear ()
{
	ctx.clearRect(0,0,1000,5000);
};