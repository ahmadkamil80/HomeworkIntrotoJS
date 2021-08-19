const message = 'The quick brown fox jumps over the lazy dog';
const replaceVowels = (message = '') => {
   const vocal = 'aeiou';
   let res = '';
   for(let i = 0; i < message.length; i++){
      const el = message[i];
      if(vocal.includes(el)){  
         res += ('*');
      }else{
         res += el;
      };
   };
   return res;
};
console.log(replaceVowels(message));