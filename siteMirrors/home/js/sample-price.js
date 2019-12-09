

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
        conditions[cond].forEach(opt_price=>{
            options += `<option>${opt_price[0]}(${opt_price[1]}元)</option>`
        })
        container.append(`<div class="form-group">
        <div class="row">
          <label class="col-sm-2 col-sm-offset-2 control-label" style="margin-top: 10px;">${cond}</label>
          <div class="col-sm-8">
            <select class="form-control">
              ${options}
            </select>
          </div>
        </div>
    </div>`)
    })
}


$(initPriceForm())