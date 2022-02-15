const items=[
    '22 green laptop',
    's85 red phone',
    'laptop 888jg gray',
    'phone jk88 green',
    'phone jsk88 green',
]
const phone=[];
const search='Phone';
for(const item of items){
    if(item.toLowerCase().startsWith(search.toLowerCase())){
        phone.push(item);
    }
}
console.log(phone)