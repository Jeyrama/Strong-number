/*
Strong number is the number that the sum of the 
factorial of its digits is equal to number itself.
For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.

Task:
  Given a number, Find if it is Strong or not 
  and return either "STRONG!!!!" or "Not Strong !!".

Notes:
  Number passed is always Positive.
  Return the result as String

Examples:
strong_num(123) ==> return "Not Strong !!"
Since the sum of its digits' factorial of 1! + 2! + 3! = 9 
is not equal to number itself, then it's Not Strong . 

strong_num(2)  ==>  return "STRONG!!!!"
Since the sum of its digits' factorial of 2! = 2 
is equal to number itself, then its a Strong.
*/