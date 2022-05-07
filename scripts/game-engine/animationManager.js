const animationsList = {};

export const AnimationManager = {

  sprite(name) {
    return animationsList[name];
  },

  add(image, xImages, yImages) {
    const sprites = [];

    const spriteWidth = image.width / xImages;

    const spriteHeight = image.height / yImages;

    for (let y = 0; y < yImages; y++) {
      for (let x = 0; x < xImages; x++) {
        sprites.push({
          x: x * spriteWidth,
          y: y * spriteHeight,
        });
      }
    }

    animationsList[image.name] = {
      image,
      sprites,
      width: spriteWidth,
      height: spriteHeight,
    };
  },
  createAnimation(spritesIndex) {
    let currentIndex = 0;
    let frameCounter = 0;

    return () => {
      frameCounter++;

      if (frameCounter < 5) {
        return spritesIndex[currentIndex];
      }

      frameCounter = 0;
      currentIndex++;

      if (currentIndex >= spritesIndex.length) {
        currentIndex = 0;
      }

      return spritesIndex[currentIndex];
    };
  },
};
