let brand=['A','B','C','D','E'];

brand.forEach((el,i)=>{
    let prnt=document.getElementById('brand');
    let brd=document.createElement('div');
    brd.addEventListener('click',(el1)=>{
        testfunction(el1,i);
        
        // console.log(el.target.parentElement.childNodes[0].checked);
        
    })
    let input=document.createElement('input');
    input.type='radio';
    input.id=`brand${i}`;
    let brdName=document.createElement('span');
    brdName.textContent=el;
    brd.append(input,brdName);   
    prnt.append(brd);

})
function testfunction(el,i){
    console.log(el,i);
    el.target.parentElement.childNodes[0].checked=true;
    brand.forEach((el2,ind)=>{
        if(ind!=i){
            document.getElementById(`brand${ind}`).checked=false;
        }
       

    })
}
let Pdata=[
    {image:'https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/r/a/y/4xl-fo-shrt-pekok-5th-anfold-original-imafkzvqg4qptzg4-bb.jpeg?q=70',
    title:'formal shirt',
    MRP: 200,
    discount: 10,
    actual_price:150   
},
{image:'https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/r/a/y/4xl-fo-shrt-pekok-5th-anfold-original-imafkzvqg4qptzg4-bb.jpeg?q=70',
    title:'formal shirt',
    MRP: 200,
    discount: 10,
    actual_price:150   
},
{image:'https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/r/a/y/4xl-fo-shrt-pekok-5th-anfold-original-imafkzvqg4qptzg4-bb.jpeg?q=70',
    title:'formal shirt',
    MRP: 200,
    discount: 10,
    actual_price:150   
},
{image:'https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/r/a/y/4xl-fo-shrt-pekok-5th-anfold-original-imafkzvqg4qptzg4-bb.jpeg?q=70',
    title:'formal shirt',
    MRP: 200,
    discount: 10,
    actual_price:150   
},
{image:'https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/r/a/y/4xl-fo-shrt-pekok-5th-anfold-original-imafkzvqg4qptzg4-bb.jpeg?q=70',
    title:'formal shirt',
    MRP: 200,
    discount: 10,
    actual_price:150   
},
{image:'https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/r/a/y/4xl-fo-shrt-pekok-5th-anfold-original-imafkzvqg4qptzg4-bb.jpeg?q=70',
    title:'formal shirt',
    MRP: 200,
    discount: 10,
    actual_price:150   
}
]

Pdata.forEach((el)=>{
    
    let parent=document.getElementById('data');  
    
    let card=document.createElement('div');
    card.className='card';
    let image=document.createElement('img');
    image.src=el.image;
    
    let title=document.createElement('h3');
    title.textContent=el.title;

    let prices=document.createElement('div');
    prices.className='prices';
    let MRP=document.createElement('p');
    MRP.textContent='Rs.'+el.MRP+' ';
    MRP.style.textDecoration='line-through';
    let discount=document.createElement('p');
    discount.textContent=el.discount+'% OFF';
    discount.style.color = "red";
    let actual_price=document.createElement('h4');
    actual_price.textContent='Rs:'+(el.MRP-(el.MRP/el.discount))+' ';
    prices.append(actual_price,MRP,discount);

    card.append(image,title,prices);
    parent.append(card);   

})
 // actual_price: this.MRP-((this.MRP/this.discount)*100)