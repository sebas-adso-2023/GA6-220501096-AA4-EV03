let currentIndex = 0;

function showImage(index) {
  const items = document.querySelectorAll(".accordion-item");
  if (index >= items.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = items.length - 1;
  } else {
    currentIndex = index;
  }
  items.forEach((item, i) => {
    item.style.transform = `translateX(-${currentIndex * 100}%)`;
  });
}

function nextImage() {
  showImage(currentIndex + 1);
}

function prevImage() {
  showImage(currentIndex - 1);
}

showImage(currentIndex);
