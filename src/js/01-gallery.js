// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery')

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup (items){
    const markup = items.map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a>`;
    }).join('');

    return markup;
} 


let gallery = new SimpleLightbox('.gallery a', {
    captionsData : "alt",
    captionDelay : 250
});

gallery.on('show.simplelightbox', function () {
});