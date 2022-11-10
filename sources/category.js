let People_type=['Men','Women','Boys','Girls'];
People_type.forEach((el,i)=>{
    let prnt=document.getElementById('people_type');
    let person=document.createElement('div');
    person.addEventListener('click',(el1)=>{
        Click_unclick_0(el1,i);        
        // console.log(el.target.parentElement.childNodes[0].checked);        
    })
    let input=document.createElement('input');
    input.type='radio';
    input.id=`pType${i}`;
    let pType=document.createElement('span');
    pType.textContent=el;
    
    person.append(input,pType);   
    prnt.append(person);
});
function Click_unclick_0(el,i){
    // console.log(el,i);
    el.target.parentElement.childNodes[0].checked=true;
    People_type.forEach((el2,ind)=>{
        if(ind!=i){
            document.getElementById(`pType${ind}`).checked=false;
        }      
    })
}


let concepts = [
    { code: "BASICS", count: 10 },
    { code: "H&M MAN", count: 23 },
    { code: "H&M Move", count: 1 },
    { code: "MODERN CLASSIC", count: 50 }
]
concepts=concepts.sort((a, b) => b.count - a.count);
concepts.forEach((el,i)=>{
    let prnt=document.getElementById('brand');
    let brd=document.createElement('div');
    brd.addEventListener('click',(el1)=>{
        Click_unclick_1(el1,i);        
        // console.log(el.target.parentElement.childNodes[0].checked);        
    })
    let input=document.createElement('input');
    input.type='radio';
    input.id=`brand${i}`;
    let brdName=document.createElement('span');
    brdName.textContent=el.code;
    let brdCount=document.createElement('span');
    brdCount.textContent=` (${el.count})`;
    brd.append(input,brdName,brdCount);   
    prnt.append(brd);
})
function Click_unclick_1(el,i){
    // console.log(el,i);
    el.target.parentElement.childNodes[0].checked=true;
    concepts.forEach((el2,ind)=>{
        if(ind!=i){
            document.getElementById(`brand${ind}`).checked=false;
        }      
    })
}

let colorWithNames = [
    { code: 'red', count: 28 },
    { code: 'yellow', count: 38 },
    { code: 'green', count: 18 },
    { code: 'pink', count: 15 },
    { code: 'blue', count: 20 },
    { code: 'green', count: 38 },
    { code: 'white', count: 8 },
    { code: 'purple', count: 23 },
    { code: 'green', count: 18 },
    { code: 'turquoise', count: 25 },
    { code: 'orange', count: 10 },
]
colorWithNames=colorWithNames.sort((a, b) => b.count - a.count)
colorWithNames.forEach((el,i)=>{
    let prnt=document.getElementById('colors');
    let clr=document.createElement('div');
    clr.addEventListener('click',(el1)=>{
        Click_unclick_2(el1,i);        
        // console.log(el.target.parentElement.childNodes[0].checked);        
    })
    let input=document.createElement('input');
    input.type='radio';
    input.id=`color${i}`;
    let clrName=document.createElement('span');
    clrName.textContent=el.code;
    let clrCount=document.createElement('span');
    clrCount.textContent=` (${el.count}) `;
    clr.append(input,clrName,clrCount);   
    prnt.append(clr);
})

function Click_unclick_2(el,i){
    // console.log(el,i);
    el.target.parentElement.childNodes[0].checked=true;
    colorWithNames.forEach((el2,ind)=>{
        if(ind!=i){
            document.getElementById(`color${ind}`).checked=false;
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

Pdata.forEach((el,i)=>{
    
    let parent=document.getElementById('data');  
    
    let card=document.createElement('div');
    card.className='card';
    card.addEventListener('click',()=>{
        console.log(`working${i}`);
    })
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