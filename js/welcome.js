/*
* 欢迎页 需要的信息
* */
var user;
var name="abc";
var pay_num=4,deliver_num=5,receive_num=6,evaluate_num=7;
var all_num=pay_num+deliver_num+receive_num+evaluate_num;
var order_all_list;
var order_pay_list;
var order_deliver_list;
var order_receive_list;
var order_evaluate_list;

var orderList = new Array({
        id:"123",
        name:"abcujyhbjhbjkn",
        date:"2018-2-14",
        src:"images/temp/item-img_1.jpg",
        color:"red",
        size:"big",
        unitPrice:100,
        num:2,
        totalPrice:200,
        state:"待收货"
    },{
        id:"456",
        name:"edf"
    }
);

function getOrder(user) {

}

function backToIndex(){
    window.location="index.html";
}
function initLoad() {
    document.getElementById("display_name").innerHTML="你好，"+name;
    document.getElementById("pay_num").appendChild(document.createTextNode(pay_num));
    document.getElementById("payNum").appendChild(document.createTextNode(pay_num));
    order_list_show();
}

function order_list_show() {

    var table = document.getElementById("orderAll");

    for(var i=0;i<orderList.length;i++){
        var tr = document.createElement("tr");	tr.className+="order-item";
        var td_1 = document.createElement("td");
        var label = document.createElement("label");

        var div_1 = document.createElement("div");	div_1.className+="num";
        div_1.appendChild(document.createTextNode(orderList[i].date+"订单号"+orderList[i].id));
        label.appendChild(div_1);

        var div_2 = document.createElement("div");	div_2.className+="card";

        var div_div_1 = document.createElement("div");	div_div_1.className+="img";/*图片*/
        var img = document.createElement("img");		img.className+="cover";
        img.src = orderList[i].src;
        div_div_1.appendChild(img);
        div_2.appendChild(div_div_1);

        var div_div_2 = document.createElement("div");	/*商品名*/
        div_div_2.className+="name ep2";
        div_div_2.appendChild(document.createTextNode(orderList[i].name));
        div_2.appendChild(div_div_2);

        var div_div_3=document.createElement("div");		div_div_3.className="format";	/*型号 颜色*/
        div_div_3.appendChild(document.createTextNode("颜色分类："+orderList[i].color+"  尺码"+orderList[i].size));
        div_2.appendChild(div_div_3);

        label.appendChild(div_2);
        td_1.appendChild(label);
        tr.appendChild(td_1);

        var td_2 = document.createElement("td");
        td_2.appendChild(document.createTextNode(orderList[i].unitPrice));
        tr.appendChild(td_2);
//
        var td_3 = document.createElement("td");
        td_3.appendChild(document.createTextNode(orderList[i].num));
        tr.appendChild(td_3);
//
        var td_4 = document.createElement("td");
        td_4.appendChild(document.createTextNode(orderList[i].totalPrice));
        tr.appendChild(td_4);
//L
        var td_5 = document.createElement("td");
        td_5.className="state";
        var a_1 = document.createElement("a");
        a_1.className="but c6";
        a_1.appendChild(document.createTextNode(orderList[i].state));
        td_5.appendChild(a_1);
        var a_2 = document.createElement("a");
        a_2.className="but c9";
        a_2.href="";
        a_2.appendChild(document.createTextNode("订单详情"));
        td_5.appendChild(a_2);
        tr.appendChild(td_5);
//
        var td_6 = document.createElement("td");
        td_6.className="order";
        var a_3 = document.createElement("a");
        a_3.href="";
        a_3.className="but but-primary";
        a_3.appendChild(document.createTextNode("立即付款"));
        td_6.appendChild(a_3);
        var a_4 = document.createElement("a");
        a_4.href="";
        a_4.classNam="but c3";
        a_4.appendChild(document.createTextNode("取消订单"));
        td_6.appendChild(a_4);
        tr.appendChild(td_6);

        table.appendChild(tr);
    }
}





