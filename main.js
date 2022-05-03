var gallery = document.querySelector('main');

var imageUrls = [
  'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  'https://etcanada.com/wp-content/uploads/2016/06/58c0500b2ac4c342c6fc4ab096ada150.jpg?quality=80&strip=all&crop=0px%2C21px%2C500px%2C333px&resize=720%2C480',
  'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg',
  'https://cdn.vox-cdn.com/thumbor/mFiywP9BUHDC8AIRBDYJvXdfQiA=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23265504/Spider_Man_meme.jpg',
  'https://cdn.atomix.vg/wp-content/uploads/2022/01/New-Project-30-1.jpg',
  'https://www.dictionary.com/e/wp-content/uploads/2021/09/20210922_atw_memeStonk_800x800.png'
];

var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', function() {
  console.log(imageUrlInput.value);
  if(imageUrlInput.value != '') {
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value = '';
  updateGallery();
});

function updateGallery() {
  gallery.innerHTML = '';
  for(var i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}

updateGallery();
