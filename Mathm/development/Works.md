# polynomial Tree 多项式的树
## Grammar
```json
{
    "type":"polynomial",
    "a":{},//运算变量1
    "b":{},//运算变量2
    "O":""//O运算符
}
```
### Type
variable变量


# 字符串式解析
"M()"=>Matrix
"I()"=>I
"D()"=>Det
"V()"=>Vector
"F()"=>Fraction
"+"=>O.add
"-"=>O.reduce
"*"=>O.mult
"/"=>O.divide


# 多项式示例
a*M([[1,2,2],[2,3,4]])+b/I(2,3)+3*b=>
```json
Tree{
    "type":"polynomial",//多项式
    "a":{
        "type":"monomial",//单项式
        "a":{
            "name":"a",
            "type":"variable"
        },
        "b":{
            "type":"Matrix",
            "arr":[[1,2,2],[2,3,4]],
            "m":2, 
            "n":3 //
        },
        "O":"mult"
    },
    "b":{
        "type":"polynomial",
        "a":{
            "type":"monomial",
            "a":{
                "name":"b",
                "type":"variable"
            },
            "b":{
                "type":"I",
                "real":2,//实部
                "imaginary":3//虚部
            },
            "O":"divide"
        },
        "b":{
            "type":"monomial",
            "a":3,
            "b":{
                "name":"b",
                "type":"variable"
            },
            "O":"mult"
        }
    },
    "O":"add"
}
```
