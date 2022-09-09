//npm install prompt-sync on cmd
const prompt = require('prompt-sync')();
a = prompt('Enter first number:');
a=Number(a)
Eve_check(a);//calling function
function Eve_check(a)
{
	for(i=1;i<=a;i++)
	{
		if(i%2==0){console.log("%d is even",i);}
		
	}
}
