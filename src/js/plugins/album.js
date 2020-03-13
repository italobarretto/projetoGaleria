import $ from 'jquery'
import { onLoadHtmlSuccess } from '../core/includes'
import { dragNdrop } from './dragndrop'

const duration = 300

function filterByAlbum(album) {
    $('[ib-inAlbum]').each(function (i, e) {
        const isTarget = $(this).attr('ib-inalbum') === album
        if (isTarget) {
            $(this).parent().removeClass('d-none')
            $(this).fadeIn(duration)
        } else {
            $(this).fadeOut(duration, () => {
                $(this).parent().addClass('d-none')
            })
        }
    })
}

function album () {
    let numAlbum = 0

    const btn = document.querySelector('[ib-addalbum]')
    if(btn){
        btn.onclick = e => {
            numAlbum++
            if(numAlbum === 1){
                document.querySelectorAll('[ib-txtalbum]').forEach( paragrafo => {
                    paragrafo.classList.add('d-none')
                })

                const albumDiv = document.createElement('div')
                document.querySelector('#cardAlbum').appendChild(albumDiv)
                albumDiv.classList.add('albumDiv')
                
            }

            const album = document.createElement('div')
            
            $(album).hide().appendTo('.albumDiv').fadeIn(450)
           
            album.classList.add('album')
            const attr = document.createAttribute('key')
            attr.value = numAlbum
            album.innerHTML = `#${attr.value} Album <br><br> Insira uma foto`

            album.setAttributeNode(attr)
            album.onclick = function(e){
                filterByAlbum(attr.value)
            } 
            // addEventListener('click', e => filterByAlbum(attr.value))
            dragNdrop()
        }
    }
}

onLoadHtmlSuccess(album)