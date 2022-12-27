// https://github.com/SofiaProtsiv/goit-js-codewars/blob/main/10-module-lesson-01/uk.md

// const users = [
//   "YuriyVytyag",
//   "NikitaKhokhulia",
//   "Vladislav-Ivanilov",
//   "storm2107",
//   "MP23-web",
//   "SofiaProtsiv",
// ];
// getUsers(users)
//   .then((result) => {
//     result.map(({ login }) => console.log(login));
//     console.log(result);
//   })
//   .catch((error) => console.log(error));

// function getUsers(names) {
//   const promise = names.map((name) => {
//     return fetch(`https://api.github.com/users/${name}`).then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error("error");
//       }
//     });
//   });
//   return Promise.all(promise);
// }

// <---------------------------------------------NEW TASK---------------------------------------------------->
