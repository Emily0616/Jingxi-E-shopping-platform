$(document).ready(function(){
  $(".all-cat").mouseover(function(){
    $(".cat-list__box").css("display","block");
	$(".cat-list__box").css("z-index","9999");
  });
  $(".all-cat").mouseout(function(){
    $(".cat-list__box").css("display","none");
  });
});

function mOver1(obj)
{
	obj.style.backgroundColor="#b31e22";
	obj.style.color="white"
}

function mOut1(obj)
{
	obj.style.backgroundColor="";
	obj.style.color="#666"
}

function mOver(obj)
{
	obj.style.color="#b31e22"
}

function mOut(obj)
{
	obj.style.color="#666"
}
/*------------------------- 筛选相关函数 ---------------------------*/
var check_val = [];
var has_checked = [];

//取得所有的复选框对象数组，并生成对应标签
function GetAllCheckBox(e) {
    var filter = document.getElementById("myFilter");
    var color = document.getElementsByName("color");
	console.log(color);
    var category = document.getElementsByName("Category");
	
	for(i in color){
		
	}
	
    for (k in color) {
        if (color[k].checked) {
            var flag = 0;
            for (j in has_checked) {
                if (color[k].value == has_checked[j]) {
                    flag = 1;
                }
            }
            if (!flag) {
                check_val.push(color[k].value);
            }
        } else {
            for (m in has_checked) {
                if (color[k].value == has_checked[m]) {
                    var thisNode = document.getElementsByName(has_checked[m]);
                    filter.removeChild(thisNode[0]);
                    has_checked.splice(m, 1);
                    check_val.splice(m, 1);
                }
            }
        }
    }
    for (k in category) {
        if (category[k].checked) {
            var flag = 0;
            for (j in has_checked) {
                if (category[k].value == has_checked[j]) {
                    flag = 1;
                }
            }
            if (!flag) {
                check_val.push(category[k].value);
            }
        } else {
            for (m in has_checked) {
                if (category[k].value == has_checked[m]) {
                    var thisNode = document.getElementsByName(has_checked[m]);
                    filter.removeChild(thisNode[0]);
                    has_checked.splice(m, 1);
                    check_val.splice(m, 1);
                }
            }
        }
    }
}

//“重置”按钮
function ClearAll() {
    for (var i = 0; i < has_checked.length; i++) {
        var cancel = document.getElementById(has_checked[i]);
        cancel.checked = false;

        var father = document.getElementById("filter-value");

        // console.log("000"+check_val);
        father.removeChild(document.getElementsByName(has_checked[i])[0]);
    }
    check_val = [];
    has_checked = [];
    // console.log(check_val);
    // console.log(has_checked);
}

function AddFilter(e) {
	console.log(e.getAttribute("name"));
    GetAllCheckBox(e);
    for (var i = 0; i < check_val.length; i++) {
        var flag = 0;
        for (k in has_checked) {
            if (has_checked[k] == check_val[i]) {
                flag = 1;
            }
        }
        if (!flag) {
            var newchild = document.createElement("span");
            newchild.innerHTML = ":" + check_val[i];
            newchild.setAttribute("name", check_val[i]);
            document.getElementById("myFilter").appendChild(newchild);
            has_checked.push(check_val[i]);
        }
    }
    // console.log("3 "+has_checked)
    // console.log("4 "+check_val);
}