'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// https://restcountries.com/v2/

// // ========= Render Country ========= //
// const renderCountryCard = function (data, className) {
//   const countryCard = `<article class="country ${className}">
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       data.population / 1000_000
//     ).toFixed(1)}M</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//   </div>
// </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', countryCard);
// };

// ========= Render Error ========= //
// const renderError = function (errMessage) {
//   const errText = `<p>${errMessage}</p>`;
//   countriesContainer.insertAdjacentHTML('beforeend', errText);
// };

// // ========= GET JSON ========= //
// const getJson = function (apiUrl, errorMessage = 'Something went wrong') {
//   // We returned the fetch API to get a promise
//   return fetch(apiUrl).then(function (response) {
//     if (!response.ok) {
//       throw new Error(`${errorMessage} (${response.status})`);
//     }
//     return response.json();
//   });
// };

// // ========= Bring Country Data ========= //
// // const bringCountryData = function (countryName) {
// //   getJson(
// //     `https://restcountries.com/v2/name/${countryName}`,
// //     'Country not found'
// //   )
// //     .then(function (data) {
// //       const [cData] = data;
// //       renderCountryCard(cData);

// //       // Second AJAX Call
// //       const neighbour = cData.borders?.[0];

// //       // guarding clause
// //       if (!neighbour) throw new Error('No Neighbours found');

// //       getJson(
// //         `https://restcountries.com/v2/alpha/${neighbour}`,
// //         'Country not found'
// //       ).then(function (data) {
// //         renderCountryCard(data, 'neighbour');
// //       });
// //     })
// //     .catch(function (err) {
// //       renderError(err);
// //     })
// //     .finally(function () {
// //       countriesContainer.style.opacity = 1;
// //     });
// // };
// // bringCountryData('denmark');

// // ========= Where Am I Challenge ========= //
// // const whereAmI = function (lat, lng) {
// //   fetch(
// //     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=797018805917427724945x79123`
// //   )
// //     .then(function (response) {
// //       if (!response.ok) {
// //         throw new Error(`Too many requests ${response.status}`);
// //       }
// //       return response.json();
// //     })
// //     .then(function (data) {
// //       fetch(`https://restcountries.com/v2/name/${data.country}`)
// //         .then(function (country) {
// //           return country.json();
// //         })
// //         .then(function (countryData) {
// //           const [country2Render] = countryData;
// //           renderCountryCard(country2Render);
// //         });
// //     })
// //     .catch(function (err) {
// //       console.log(err);
// //     })
// //     .finally(function () {
// //       countriesContainer.style.opacity = 1;
// //     });
// // };
// // whereAmI(-33.933, 18.474);

// // ================ Where Am I ================ //
// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=797018805917427724945x79123`
//   )
//     .then(function (response) {
//       if (!response.ok) {
//         throw new Error('🌏🚫 Country was not found');
//       }
//       return response.json();
//     })
//     .then(function (data) {
//       // Render the country data
//       fetch(`https://restcountries.com/v2/name/${data.country}`)
//         .then(function (response) {
//           if (!response.ok) {
//             throw new Error('No country was found');
//           }
//           return response.json();
//         })
//         .then(function (cdata) {
//           const data = cdata[1];
//           const countryCard = `<article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               data.population / 1000_000
//             ).toFixed(1)}M</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//           </div>
//         </article>`;

//           countriesContainer.insertAdjacentHTML('beforeend', countryCard);
//           countriesContainer.style.opacity = 1;
//         })
//         .catch(function (err) {
//           console.log(err.message);
//         });
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// };
// whereAmI(19.037, 7200.873);

// ================= Building a simple promise ================= //

/***
 * We build a promise using the promise constructor
 * That means promises are another type of objects
 * The Promise constructor takes one argument and that's the Executor function
 * As soon as the promise executor runs, it will call the executor function
 * Executor function takes to parameters [resolve, reject]
 * Executor function handles the Asynchronous behavior we are trying to handle
 * It stores the future value of the promise
 * We store the promise in a variable so that we can consume it later
 * */
// const lotteryDraw = new Promise(function (resolve, reject) {
//   console.log(`Lottery Draw began`);
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       /**
//        * In order to mark the promise as fulfilled we use the resolve function
//        * Into the resolved function here we pass the fulfilled value of the promise so that it can later be consumed with the then method.*/
//       resolve('You win 🎉');
//     } else {
//       /**
//        * in the reject method we specify the message we want to handle in the catch method
//        */
//       reject(new Error('You lose 💥'));
//     }
//   }, 2000);
// });

// lotteryDraw
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (err) {
//     console.error(err);
//   });

// =========== Promisifying the timer ================ //
// const wait = function (seconds) {
//   return new Promise(resolve => {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log(`I waited 1 second`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`I waited 2 second`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`I waited 3 second`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`I waited 4 second`);
//     return wait(1);
//   });

// // ☝ This Equals this
// setTimeout(function () {
//   console.log(`I waited 1 second`);
//   setTimeout(function () {
//     console.log(`I waited 2 second`);
//     setTimeout(function () {
//       console.log(`I waited 3 second`);
//       setTimeout(function () {
//         console.log(`I waited 4 second`);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Immediately resolve or reject
// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Errrrror')).catch(x => console.log(x));

// Promisifying the Geolocation API
// ================================
// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   error => console.error(error)
// );

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   function (position) {
//     //     resolve(position);
//     //   },
//     //   function (error) {
//     //     reject(error);
//     //   }
//     // );

//     // ☝ this equals this 👇
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition()
//   .then(position => console.log(position))
//   .catch(err => console.error(err));

// const whereAmI = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   })
//     .then(function (position) {
//       const { latitude: lat, longitude: lng } = position.coords;
//       return fetch(
//         `https://geocode.xyz/${lat},${lng}?geoit=json&auth=797018805917427724945x79123`
//       );
//     })
//     .then(function (response) {
//       if (!response.ok) {
//         throw new Error('🌏🚫 Country was not found');
//       }
//       return response.json();
//     })
//     .then(function (data) {
//       // Render the country data
//       fetch(`https://restcountries.com/v2/name/${data.country}`)
//         .then(function (response) {
//           if (!response.ok) {
//             throw new Error('No country was found');
//           }
//           return response.json();
//         })
//         .then(function (cdata) {
//           const [data] = cdata;
//           const countryCard = `<article class="country">
//             <img class="country__img" src="${data.flag}" />
//             <div class="country__data">
//               <h3 class="country__name">${data.name}</h3>
//               <h4 class="country__region">${data.region}</h4>
//               <p class="country__row"><span>👫</span>${(
//                 data.population / 1000_000
//               ).toFixed(1)}M</p>
//               <p class="country__row"><span>🗣️</span>${
//                 data.languages[0].name
//               }</p>
//               <p class="country__row"><span>💰</span>${
//                 data.currencies[0].name
//               }</p>
//             </div>
//           </article>`;

//           countriesContainer.insertAdjacentHTML('beforeend', countryCard);
//           countriesContainer.style.opacity = 1;
//         })
//         .catch(function (err) {
//           console.log(err.message);
//         });
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// };

// btn.addEventListener('click', whereAmI);

// =================
// Coding Challenge
// =================
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log(`Test start`);
//   if (Math.random() > 0.5) {
//     resolve(`you win`);
//   } else {
//     reject(new Error('you lose'));
//   }
//   console.log(`test end`);
// });
// lotteryPromise
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err.message);
//   });

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// wait(2)
//   .then(function () {
//     console.log(`waited 2s`);
//     return wait(2);
//   })
//   .then(function () {
//     console.log(`waited 4s`);
//     return wait(2);
//   })
//   .then(function () {
//     console.log(`waited 6s`);
//     return wait(2);
//   })
//   .then(function () {
//     console.log(`waited 8s`);
//   });

// ======= Building a Simple Promise ======= //

// const lotteryPromise = new Promise(function (resolve, reject) {
//   const rnd = Math.random();
//   if (rnd >= 0.5) {
//     resolve(rnd);
//   } else {
//     reject(new Error(`${rnd} is less that 0.5`));
//   }
// });
// lotteryPromise
//   .then(function (val) {
//     console.log(val);
//   })
//   .catch(function (err) {
//     console.error(err.message);
//   });

// ======= Promisifying setTimeout Timer ======= //
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(function () {
//     console.log(`waited 2 seconds.`);

//     return wait(2);
//   })
//   .then(function () {
//     console.log(`Waited 4 seconds.`);

//     return wait(2);
//   })
//   .then(function () {
//     console.log(`Waited 6 seconds.`);
//   });

// ======= Promisifying Geolocation API ======= //
// const geoPromise = function () {
//   return new Promise(function (resolve, reject) {
//     return navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// geoPromise()
//   .then(function (position) {
//     console.log(position);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// ======= Challenge #2 ======= //

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const createdImage = document.createElement('img');
//     createdImage.src = imgPath;
//     createdImage.addEventListener('load', function () {
//       document.querySelector('.images').append(createdImage);
//     });
//     createdImage.addEventListener('error', function (evt) {
//       reject(new Error('image not found 🚫'));
//     });
//   });
// };
// let myImage;
// createImage('img/img-1s.jpg')
//   .then(function (image) {
//     myImage = image;
//     return wait(2);
//   })
//   .then(function () {
//     myImage.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(function (image) {
//     myImage = image;
//     return wait(2);
//   })
//   .then(function () {
//     myImage.style.display = 'none';
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   });

// ============ Asynch / Await ==========
// const renderCountryCard = function (data, className) {
//   const countryCard = `<article class="country ${className}">
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       data.population / 1000_000
//     ).toFixed(1)}M</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//   </div>
// </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', countryCard);
//   countriesContainer.style.opacity = 1;
// };

// // ========= Render Error ========= //
// const renderError = function (err) {
//   const errText = `<p>${err.message}</p>`;
//   countriesContainer.insertAdjacentHTML('beforeend', errText);
// };

// const zlocation = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// // Asynchronous function
// const whereAmI = async function () {
//   try {
//     // First Promise
//     const currentLocation = await zlocation();
//     const { latitude: lat, longitude: lng } = currentLocation.coords;

//     // Second Promise
//     const gotCountry = await fetch(
//       `https://geocode.xyz/${lat},${lng}?geoit=json&auth=797018805917427724945x79123`
//     );
//     if (!gotCountry.ok) throw new Error('Problem getting country 🌏');

//     // Third promise
//     const gotCountryData = await gotCountry.json();

//     // Fourth promise
//     const countryPromise = await fetch(
//       `https://restcountries.com/v2/names/${gotCountryData.country}`
//     );
//     if (!countryPromise.ok) throw new Error('Problem getting country data 🌏');

//     // Fifth promise
//     const [countryData] = await countryPromise.json();
//     renderCountryCard(countryData);

//     // Returning a value from the async function
//     // this will return a promise and this string will be the resolved value of that promise
//     return `You are now in ${countryData.name}, ${countryData.region}`;
//   } catch (err) {
//     renderError(err);

//     // to catch errors outside we return the error
//     throw err;
//   }
// };
// To handle returned value we use then method or IFFE with Async/Await
// whereAmI()
//   .then(function (string) {
//     console.log(string);
//   })
//   .catch(function (err) {
//     console.log(`Error from outside ${err.message}`);
//   });
// (async function () {
//   try {
//     const data = await whereAmI();
//     console.log(data);
//   } catch (error) {
//     console.log(`Error from outside ${error.message}`);
//   }
// })();

// Running promises in parallel
// const getJson = function (url, errMessage = 'something went wrong') {
//   return fetch(url).then(function (result) {
//     if (!result.ok) {
//       throw new Error(`${errMessage}`);
//     }
//     return result.json();
//   });
// };

// const getCapitals = async function (c1, c2, c3) {
//   // const [d1] = await getJson(`https://restcountries.com/v2/name/${c1}`);
//   // const [d2] = await getJson(`https://restcountries.com/v2/name/${c2}`);
//   // const [d3] = await getJson(`https://restcountries.com/v2/name/${c3}`);
//   // console.log([d1.capital, d2.capital, d3.capital]);

//   // We can do this 👇 instead of this ☝ [all run together resulting more speed in loading the data]
//   const data = await Promise.all([
//     getJson(`https://restcountries.com/v2/name/${c1}`),
//     getJson(`https://restcountries.com/v2/name/${c2}`),
//     getJson(`https://restcountries.com/v2/name/${c3}`),
//   ]);
//   console.log(data.map(c => c[0].capital));
// };
// getCapitals('egypt', 'germany', 'france');

// const getJson = function (apiUrl, errorMessage = 'Something went wrong') {
//   // We returned the fetch API to get a promise
//   return fetch(apiUrl).then(function (response) {
//     if (!response.ok) {
//       throw new Error(`${errorMessage} (${response.status})`);
//     }
//     return response.json();
//   });
// };

// (async function () {
//   const data = await Promise.any([
//     getJson('https://restcountries.com/v2/name/egyptsss'),
//     getJson('https://restcountries.com/v2/name/germany'),
//     getJson('https://restcountries.com/v2/name/canada'),
//   ]);

//   console.log(data);
// })();

// const timeOut = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Promise took too long ⏱'));
//     }, s * 1000);
//   });
// };

// Promise.race([getJson('https://restcountries.com/v2/name/egypt'), timeOut(0.1)])
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// ======= Challenge #3 ======= //

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const createdImage = document.createElement('img');
//     createdImage.src = imgPath;
//     createdImage.addEventListener('load', function () {
//       document.querySelector('.images').append(createdImage);
//     });
//     createdImage.addEventListener('error', function (evt) {
//       reject(new Error('image not found 🚫'));
//     });
//   });
// };
// let myImage;
// createImage('img/img-1.jpg')
//   .then(function (image) {
//     myImage = image;
//     return wait(2);
//   })
//   .then(function () {
//     myImage.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(function (image) {
//     myImage = image;
//     return wait(2);
//   })
//   .then(function () {
//     myImage.style.display = 'none';
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   });

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const createdImage = document.createElement('img');
    createdImage.src = imgPath;
    createdImage.addEventListener('load', function () {
      document.querySelector('.images').append(createdImage);
      resolve(createdImage);
    });
    createdImage.addEventListener('error', function (evt) {
      reject(new Error('image not found 🚫'));
    });
  });
};

// const loadNPause = async function () {
//   try {
//     // First image
//     let img = await createImage('img/img-1.jpg');
//     console.log(`image 1 loaded`);
//     await wait(2);
//     img.style.display = 'none';

//     // Second image
//     img = await createImage('img/img-2.jpg');
//     console.log(`image 2 loaded`);
//     await wait(2);
//     img.style.display = 'none';

//     // Third image
//     img = await createImage('img/img-3.jpg');
//     console.log(`image 2 loaded`);
//     await wait(2);
//     img.style.display = 'none';
//   } catch (error) {
//     console.log(error);
//   }
// };
// loadNPause();

const loadAll = async function (imgArr) {
  const imgs = imgArr.map(async function (img) {
    return await createImage(img);
  });
  const allImages = await Promise.all(imgs);
  allImages.forEach(img => {
    img.classList.add('parallel');
  });
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
