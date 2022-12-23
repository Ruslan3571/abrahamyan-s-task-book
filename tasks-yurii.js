// // // <-----------------------------------------NEW TASK----------------------------------------->
// Реалізуй функцію userRegistration()
// Має приймати два аргументи:
// email -  пошта може бути тільки на gmail.com, ukr.net
// password - пароль має містити не тільки цифри і залежно від довжини символів показувати юзеру
// (4 - слабкий, до 8 - хороший, від 12 надійний) 4 - мінімум, 15 - максимум.
// Якщо юзер ввів усе правильно вивести сповіщення про успішну реєстрацію

function userRegistration(email, password) {
    const matchedEmail = email && (email.includes(@gmail.com) || email.includes(@ukr.net));


    const matchedPassword 
      if (password.length >= 4) { console.log("слабкий") },
      else if (password.length >= 4 && password.length <= 8) { console.log("хороший") }
      else (password.length >= 12 || password.length <= 15){console.log("надійний")}
    }


// console.log("userRegistration: ", userRegistration());
