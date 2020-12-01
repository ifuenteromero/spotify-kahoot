// Esto si serían utils :-D
// ¡Esta doc está de vicio!
/**
 * getRandomNumber genera un número aleatorio entre dos números dados min y max
 * @param {number} min incluído
 * @param {number} max excluido
 * @example getRandomNumber(1,4) puede ser 1, 2 o 3
 * @returns number
 */
export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * getRandomNumbers genera un array de números aleatorios entre 0 y el max. Tantos números con length
 * @param {number} length longitud del array que se devuelve
 * @param {number } max número máximo .Los números aleatorios serán menores que max
 * @example getRandomNumbers(4, 6) [1, 5, 4, 0]
 */
export const getRandomNumbers = (length, max) => {
  const randomNumbers = [];
  while (randomNumbers.length < length) {
    const randomNumber = getRandomNumber(0, max - 1);
    if (!randomNumbers.includes(randomNumbers)) {
      randomNumbers.push(randomNumber);
    }
  }
  return randomNumbers;
};

export const getSound = soundName => {
  const soundsFolder = require.context('../sounds', true, /\.wav$/);
  const soundObject = {};
  soundsFolder.keys().forEach(pathName => {
    const key = pathName.substring(
      pathName.lastIndexOf('/') + 1,
      pathName.lastIndexOf('.')
    );
    soundObject[key] = soundsFolder(pathName).default;
  });

  return soundObject[soundName];
};
