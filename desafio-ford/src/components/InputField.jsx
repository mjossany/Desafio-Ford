//Eu tinha combinado com o grupo de fazer uma verificação para os casos do número 9 e 0 e letras A, B, Y, Z, porém por uma gestão de tempo decidi para fazer a verificação no final e não deu tempo

import React, { useState } from 'react';

export const Encrypter = () => {
  const [vin, setVin] = useState('');
  const [encryptedVin, setEncryptedVin] = useState('');
  const [decryptedVin, setDecryptedVin] = useState('');

  const sumTwo = (string) => {
    let encryptedCode = []
    for (let i = 0; i < string.length; i++) {
      const ascEncrypted = (string[i].charCodeAt(0) + 2)
      encryptedCode.push(ascEncrypted);
    }
    console.log(encryptedCode);
    return encryptedCode;
  }

  const reverseArray = (array) => {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
      newArray.push(array[i]);
    }
    console.log(newArray);
    return newArray;
  }

  const transformArray = (array) => {
    let newString = '';
    for (let i = 0; i < array.length; i++) {
      const newLetter = String.fromCharCode(array[i]);
      newString += newLetter;
    }
    console.log(newString);
    return newString;
  }

  
  const subTwo = (string) => {
    let encryptedCode = []
    for (let i = 0; i < string.length; i++) {
      const ascEncrypted = (string[i].charCodeAt(0) - 2)
      encryptedCode.push(ascEncrypted);
    }
    console.log(encryptedCode);
    return encryptedCode;
  }

  const encrypt = (string) => {
    const firstStep = sumTwo(string);
    const secondStep = reverseArray(firstStep);
    const thirdStep = transformArray(secondStep);
    setEncryptedVin(thirdStep);
  }

  const decrypt = (string) => {
    const firstStep = subTwo(string);
    const secondStep = reverseArray(firstStep);
    const thirdStep = transformArray(secondStep);
    setDecryptedVin(thirdStep);
  }

  return(
    <>
      <input 
        value={vin}
        onChange={event => setVin(event.target.value)}
      />
      <button
        onClick={() => encrypt(vin)}
      >
        Encrypt
      </button>
      <button
        onClick={() => decrypt(encryptedVin)}
      >
        Decrypt
      </button>
      <div>Encrypted Vin:{encryptedVin}</div>
      <div>Decrypted Vin:{decryptedVin}</div>
    </>
  )
}