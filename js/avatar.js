const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const uploadImg = document.querySelector('#upload-file');
const previewImg = document.querySelector('.img-upload__preview > img');
const previewThumbnails = document.querySelectorAll('.effects__label > span');

const onUploadImgChange = () => {
  const file = uploadImg.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewImg.src = URL.createObjectURL(file);
    previewThumbnails.forEach((element) => {
      element.style.backgroundImage = `url('${URL.createObjectURL(file)}')`;
    });
  }
};

uploadImg.addEventListener('change', onUploadImgChange);
