import $ from 'jquery'

import { onLoadHtmlSuccess } from '../core/includes'


export function dragNdrop (){
    const items = document.querySelectorAll('[ib-dragable]')
        items.forEach((item, index) => {
            item.draggable = true
            item.id = item.id || `draggable-item-${index}`
            item.ondragstart = e =>
                e.dataTransfer.setData('item-id', e.target.id)
        })
    
    const dropzones = document.querySelectorAll('[ib-dropzone]')
        dropzones.forEach(dropzone => {
            const filho = dropzone.children[0]
            if(filho) {
                filho.ondragover = e => e.preventDefault()
                filho.ondragenter = e => {
                    dropzone.classList.add('hovered')
                }
                filho.ondragleave = e => {
                    dropzone.classList.remove('hovered')
                }
                filho.ondrop = function(e) {
                    const id = e.dataTransfer.getData('item-id')
                    const item = document.getElementById(id)
                    // e.target.appendChild(item)
                    const newDiv = $('<div>').addClass(['col-12', 'col-md-6', 'col-lg-3']).insertBefore(dropzone)
                    $(newDiv).attr("ib-dropzone", "")
                    dropzone.previousElementSibling.appendChild(item)
                    dropzone.classList.remove('hovered')
                    document.querySelectorAll('div .col-12').forEach( item => {
                        if(item.children.length === 0) item.classList.add('d-none')
                    })
                    
                    dragNdrop()
                }
            }
            
        })

    const albums = document.querySelectorAll('.album')
        albums.forEach(album => {
            album.ondragover = e => e.preventDefault()
            album.ondragenter = e => {
                album.classList.add('albumHovered')
            }
            album.ondragleave = e => {
                album.classList.remove('albumHovered')
            }
            album.ondrop = function(e) {
                const id = e.dataTransfer.getData('item-id')
                const item = document.getElementById(id)
                const numAlbum = album.getAttribute('key')
                item.setAttribute('ib-inalbum', numAlbum)
                album.classList.remove('albumHovered')
                dragNdrop()
            }
        })
    document.querySelectorAll('.album').forEach( album => {
        const numAlbum = album.getAttribute('key')
        const qtdFotos = document.querySelectorAll(`[ib-inalbum="${numAlbum}"]`).length
        if(qtdFotos > 0) {
            album.innerHTML = `#${numAlbum} Album <br><br> ${qtdFotos} Foto(s)`
        } else {
            album.innerHTML = `#${numAlbum} Album <br><br> Insira uma foto`
        }
    })
}

onLoadHtmlSuccess(dragNdrop)
