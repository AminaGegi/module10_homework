Var = prompt ('введите значение');
++Var;

console.log(typeof(Var));
--Var;
Var %= 2;

if (Var == 0)
    console.log("Четное")
if (Var == 1)
    console.log("Не четное")

if (isNaN(Var))
    console.log("Упс вы ввели не число")