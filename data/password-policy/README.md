# password-policy
Helps to check a string for different types of password-policies.

## Install

```
npm install password-policy
```

## Example

```js
const passwordPolicy = require('password-policy');

passwordPolicy.hasLowerCase('Test'); // => true
```

#### Functions:
  - hasUpperCase
  - hasLowerCase
  - hasNumber
  - hasSpecialCharacter


###### hasUpperCase(password, (times = 1))
Returns true if the number of uppercase-characters in the password is more than times.


###### hasLowerCase(password, (times = 1))
Returns true if the number of lowercase-characters in the password is more than times.


###### hasNumber(password, (times = 1))
Returns true if the number of numeric-characters in the password is more than times.


###### hasSpecialCharacter(password, (times = 1))
Returns true if the number of special-characters in the password is more than times.
