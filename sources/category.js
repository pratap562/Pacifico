let data=[
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

data.forEach((el)=>{
    let parent=document.getElementById('data');
    parent.innerText=el.title;
    // let card=document.createElement('div');
    // let image=document.createElement('img');
    // image.src=el.image;

    // let title=document.createElement('h3');
    // title.textContent=el.title;

    // let prices=document.createElement('div');
    // let MRP=document.createElement('span');
    // MRP.textContent=el.MRP;
    // let discount=document.createElement('span');
    // discount=el.discount;
    // let actual_price=document.createElement('span');
    // actual_price=el.actual_price;
    // prices.append(actual_price,MRP,discount);

    // card.append(image,title,prices);
    // parent.append(card);   

})

console.log(data); // actual_price: this.MRP-((this.MRP/this.discount)*100)