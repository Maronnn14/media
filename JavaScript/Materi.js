  const track = document.getElementById("kontendipelajari");
  const items = document.querySelectorAll(".card-materi");
  const itemCount = items.length;
  const itemsVisible = 3;
  let index = 0;

  function moveCarousel(direction) {
    index += direction;

    const maxIndex = itemCount - itemsVisible;
    if (index < 0) index = 0;
    if (index > maxIndex) index = maxIndex;

    const itemWidth = items[0].offsetWidth;
    const offset = index * itemWidth;

    track.style.transform = `translateX(-${offset}px)`;
  }

