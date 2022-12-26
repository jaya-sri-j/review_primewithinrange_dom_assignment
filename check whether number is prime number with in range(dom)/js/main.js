var flex=document.createElement("div");
flex.style.display="flex";
flex.style.flexDirection="column";
flex.style.justifyContent="center";
flex.style.alignItems="center";
flex.style.height="690px";
flex.style.border="5px solid black";
flex.style.backgroundColor="aqua";
document.body.appendChild(flex);

  
var head=document.createElement("h1");
flex.appendChild(head);
head.textContent="CHECK WHETHER THE NUMBER IS PRIME WITH IN RANGE";
head.style.color="purple";
head.style.fontStyle = "sans-serif";
head.style.borderTop = "10px ridge ";
head.style.borderBottom = "10px ridge ";
head.style.borderLeft = "10px ridge ";
head.style.borderRight = "10px ridge ";

var input=document.createElement("input");
input.setAttribute("id","input");
input.placeholder="ENTER RANGE";
input.style.margin="30px";
input.style.height="30px";
input.style.width="300px";
input.style.textAlign="center";
input.style.fontsize="40px";
input.style.textDecoration="underline";
input.style.backgroundColor="azure";
input.style.border="2px solid black";
flex.appendChild(input);

var buttonElement=document.createElement("button");
buttonElement.setAttribute("id","buttonElement");
buttonElement.innerHTML="CHECK PRIME NUMBER";
buttonElement.style.margin="10px";
buttonElement.style.border="2px solid black";
buttonElement.style.borderRadius="40px";
buttonElement.style.backgroundColor="pink";
flex.appendChild(buttonElement);
buttonElement.onclick=function()
{
	var range=parseInt(document.getElementById("input").value);
	var f=true;
	for(number=1;number<=range;number++)
	{
		var output=document.createElement("p");
		output.style.backgroundColor="aqua";
		flex.appendChild(output);
		if(number>2)
		{
			for(i=2;i<number;i++)
			{
				if(number%i==0)
				{
					f=false;
				}
			}
		}
		if(f)
		{
			output.textContent=number+" IS A PRIME NUMBER";
			output.style.textAlign="center";
		}
		f=true;
	}
}