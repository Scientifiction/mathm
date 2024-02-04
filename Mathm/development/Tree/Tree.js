class Tree{
    constructor(str){
        this.str=str;
    }
    parse_to_arr(str){ //has not fixed bugs
        const arr=[];
        const visited0=[];
        const visited1=[];
        var _k=0;
        var flag=0;
        for (let i = 0; i < str.length; i++) {
            if(i != str.length-1){
                if(/[a-zA-Z]/.test(str[i]) == true && str[i+1]!="("){
                    arr.push(str[i]);
                }else if(str[i]=="+" || str[i]=="-" || str[i]=="*" || str[i]=="/"){
                    arr.push(str[i]);
                }else if(/[a-zA-Z]/.test(str[i]) == true && str[i+1]=="("){
                    visited0[_k]=i+1;
                    for (let j=i;j<str.length;j++){
                        if(str[j]==")"){
                            visited1[_k]=j;
                            _k++;
                            arr.push(str.slice(i,j+1));
                            break;
                        }
                    }
                }else if(/^[0-9]+.?[0-9]*/.test(str[i])==true){
                    for(let s=0;s<visited0.length;s++){
                        if(visited0[s]>i || i>visited1[s]){
                            console.log(visited0[s],visited1[s],s,i);
                            arr.push(str[i]);
                            console.log(visited0[s],visited1[s],s,i);
                        }
                    }
                }
            }else{
                arr.push(str[i]);
            }
        }
        return arr;
    }
}
module.exports=Tree;
