const products=[
 {id:1,name:"Urban Male Ped",cat:"Peds",price:499,desc:"Game-ready male ped placeholder."},
 {id:2,name:"Premium Character",cat:"Characters",price:799,desc:"Custom character asset placeholder."},
 {id:3,name:"Modern House",cat:"Houses",price:999,desc:"Game-ready house with interior placeholder."},
 {id:4,name:"Street Props Pack",cat:"Props",price:399,desc:"Collection of gameplay-ready props."},
 {id:5,name:"Female Ped",cat:"Peds",price:499,desc:"Game-ready female ped placeholder."},
 {id:6,name:"Luxury Villa",cat:"Houses",price:1299,desc:"Large detailed house asset placeholder."}
];
let cart=[],active="All";
const money=n=>"₹"+n.toLocaleString("en-IN");
function render(){
 const list=active==="All"?products:products.filter(p=>p.cat===active);
 document.getElementById("resultText").textContent=list.length+" assets";
 document.getElementById("products").innerHTML=list.map(p=>`
 <article class="card">
  <div class="thumb">${p.cat[0]}</div>
  <div class="info"><span class="tag">${p.cat}</span><h3>${p.name}</h3><div class="desc">${p.desc}</div>
  <div class="row"><span class="price">${money(p.price)}</span><button class="buy" onclick="add(${p.id})">Buy Now</button></div></div>
 </article>`).join("");
}
function filterProducts(c){active=c;render();location.hash="shop"}
function add(id){cart.push(products.find(p=>p.id===id));updateCart();openCart()}
function updateCart(){
 document.getElementById("cartCount").textContent=cart.length;
 document.getElementById("cartItems").innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-item"><span>${p.name}</span><b>${money(p.price)}</b></div>`).join(""):"<p style='color:#888'>Your cart is empty.</p>";
 document.getElementById("total").textContent=money(cart.reduce((s,p)=>s+p.price,0));
}
function openCart(){document.getElementById("cart").classList.add("open");document.getElementById("overlay").classList.add("show")}
function closeCart(){document.getElementById("cart").classList.remove("open");document.getElementById("overlay").classList.remove("show")}
function checkout(){
 if(!cart.length)return alert("Add an asset first.");
 alert("Checkout placeholder: connect your payment gateway and digital-download delivery before accepting real payments.");
}
render();updateCart();