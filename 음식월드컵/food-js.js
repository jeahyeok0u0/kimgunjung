text ="";
var images=[];
var sImages = [];
var cnt=0;
var num=0;
var sNum = 0;
var cnt2=0;
	
function show(){
	for(i=0; i<16; i++)
	{
		images[i]= (i+1)+".jpg";
	}
	images.sort(function(a,b){return 0.5- Math.random()});
	showImg(num);
}
show(0);
function showImg(num){

	document.getElementById('image').src=images[num];
	document.getElementById('images').src=images[num+1];
	cnt2++;
}

function change(n){
	if(cnt2<17)
	{
		cnt++;
		if(n == 0)
			sImages[sNum++] = images[num];
		else
			sImages[sNum++] = images[num+1];
		num+=2;
		showImg(num);
		if(cnt == images.length/2){
			for(i=0; i<sImages.length; i++){
				images[i] = sImages[i];
				sImages[i] = null;
			}
			images.splice(cnt);
			cnt = 0;
			num = 0;
			sNum = 0;
			showImg(num);
		}
	}

}
document.getElementById('cal').innerHTML=text;