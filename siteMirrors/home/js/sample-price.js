

function getSamplePrices(){
    let data = {}
    let rows = $('#sample-price > tbody > tr')
    let condition = '';
    let options = [];
    rows.each(function(i, row){
        row = $(row)
        let tds = row.find('td');
        
        if(tds.length == 3){
            if(condition.length > 0 & options.length>0){
                data[condition] = options;
            }
            condition = tds[0].innerHTML
            options = [[tds[1].innerHTML, tds[2].innerHTML]]
        }else{
            options.push([tds[0].innerHTML, tds[1].innerHTML])
        }
        if(i==rows.length-1){
            if(condition.length > 0 & options.length>0){
                data[condition] = options;
            }
        }
    })
    console.log(data)
    return data
}


function initPriceForm(){
    let container = $('#price-estimate-form')
    let conditions = getSamplePrices()
    Object.keys(conditions).forEach(cond=>{
        let options = ''
        conditions[cond].forEach((opt_price, index)=>{
            options += `<option value="${index}" data-price="${opt_price[1]}">${opt_price[0]}(${opt_price[1]}元)</option>`
        })
        container.append(`<div class="form-group">
        <div class="row">
          <label class="col-sm-2 col-sm-offset-2 control-label" style="margin-top: 10px;">${cond}</label>
          <div class="col-sm-8">
            <select class="form-control sample-condition">
              ${options}
            </select>
          </div>
        </div>
    </div>`)
    })
}

function samplePrice(){
    let price = 0
    $('.sample-condition').each((index, sel)=>{
        console.log(sel)
        let opt = $(sel.options[sel.value])
        price += opt.data('price')
    })
    return price
}

function calculatePrice(){
    $('#qqimg').hide()
    $('#wximg').hide()
    let url = $('input[name="queUrl"]').val()
    if(!url || url.length==0){
        alert('请输入问卷网址')
        return
    }
    let number = $('input[name="queN"]').val()
    if(number == undefined || number<50){
        alert('问卷数量不能低于10')
        return
    }
    function callback(res){
        console.log(res)
        if(res.status == 'err'){
            alert('不支持该网站,无法解析内容和估计价格!')
        }else{
            let price = res.price;
            let sp = samplePrice()
            let report = `问卷价格:${price}元; <br>样本价格:${sp}元; <br>需要问卷数量:${number}个; <br>总价:${parseInt((price + sp) * number)}元;`
            $('#price-report').empty().append(report)
            $('#priceReport').modal()
        }
    }
    quePrice(url, callback)
}

$(initPriceForm())