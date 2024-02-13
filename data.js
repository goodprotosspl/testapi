import fs from 'fs';

export function receiveData(){
    try{
        const test = fs.readFileSync('./data.json', 'utf-8');
        return JSON.parse(test);
    } catch(err) {
        console.log(err);
    }
}

export function receiveDataById(searchId){
    try{
        const test = fs.readFileSync('./data.json', 'utf-8');
        const data = JSON.parse(test).data;
        const ele = data.find(e => e.id === parseInt(searchId));
        return ele;
    } catch(err) {
        console.log(err);
    }
}

console.log(receiveData());
console.log(receiveDataById(2));
