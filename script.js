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
// 	const sumValue = document.createElement("span");
// sumValue.append(sum);
// document.body.appendChild(sumValue);
	const table= document.querySelector("table");
	const row= document.createElement("tr");
	const cell=document.createElement("td");
	cell.innerText=sum;
	cell.colSpan=2;
	cell.id="and"
	row.appendChild(cell);
	table.appendChild(row)
};

getSumBtn.addEventListener("click", getSum);

