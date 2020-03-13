import $ from 'jquery'

const loadHtmlSuccessCallbacks = []

export function onLoadHtmlSuccess(callback){
    if(!loadHtmlSuccessCallbacks.includes(callback)){
        loadHtmlSuccessCallbacks.push(callback)
    }
}

function loadIncludes(parent){
    if(!parent) parent = 'body'
    $(parent).find('[ib-include]').each((i, e) => {
        const url = $(e).attr('ib-include')
        $.ajax({
            url,
            success(data){
                $(e).html(data)
                $(e).removeAttr('ib-include')

                loadHtmlSuccessCallbacks.forEach(callback => callback(data))
                loadIncludes(e)
            }
        })
    })
}

loadIncludes()