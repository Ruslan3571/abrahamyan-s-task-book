// // // <-----------------------------------------NEW TASK----------------------------------------->
// Реалізуй функцію userRegistration()
// Має приймати два аргументи:
// email -  пошта може бути тільки на gmail.com, ukr.net
// password - пароль має містити не тільки цифри і залежно від довжини символів показувати юзеру
// (4 - слабкий, до 8 - хороший, від 12 надійний) 4 - мінімум, 15 - максимум.
// Якщо юзер ввів усе правильно вивести сповіщення про успішну реєстрацію

function userRegistration(email, password) {
  const matchedEmail =
    email && (email.includes("@gmail.com") || email.includes("@ukr.net"));
  console.assert(
    matchedEmail,
    "Реєстрація підтримує пошту @gmail.com, @ukr.net"
  );
  const passwordLengh = password.length;

  let passwordMsg;
  let passwordLevel;
  let matchedPassword;

  if (
    passwordLengh &&
    passwordLengh >= 4 &&
    passwordLengh <= 15 &&
    !Number(password)
  ) {
    matchedPassword = true;

    switch (true) {
      case passwordLengh < 8:
        passwordLevel = "слабки";
        break;
      case passwordLengh >= 8 && passwordLengh < 12:
        passwordLevel = "хороший";
        break;
      case passwordLengh >= 12:
        passwordLevel = "надійний";
        break;
    }
  } else {
    passwordMsg =
      "Пароль має складатись 4-15 символів та містити не тільки цифри";
  }
  if (matchedEmail && matchedPassword) {
    console.info(`Success registration, you created ${passwordLevel} password`);
  } else if (!matchedEmail) {
    console.warn(`Bad email`);
  } else if (!matchedPassword) {
    console.warn(`Bad pawword:`, passwordMsg);
  }
}

console.log(
  "userRegistration: ",
  userRegistration("rus@gmail.com", "parol2021")
);
