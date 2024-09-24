const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let price=document.querySelectorAll(".price");
price=Array.from(price)

const getSum = () => {
//Add your code here
	let sum=0;
	for(let i=0;i<price.length;i++){
		sum=sum+Number(price[i].innerText);
	}
	const sumValue = document.createElement("span");
sumValue.append(sum);
document.body.appendChild(sumValue);
};

getSumBtn.addEventListener("click", getSum);

