document.getElementById("getCipher").addEventListener("click",function(){
      getCipher(document.getElementById("plaintext").value,document.getElementById("key").value);
})

function getCipher(plain,k)
{
      var lowerchars="abcdefghijklmnopqrstuvwxyz";
      var upperchars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      if(isNaN(k) || k<0){
            document.getElementById("ciphertext").innerHTML=" Your key must be a positive integer.";
      }else{
            var ciphertext="";
            for(let i=0;i<plain.length;i++)
            {
                  if(plain.charCodeAt(i)>90){
                        ciphertext+=lowerchars[ (lowerchars.indexOf(plain[i])+parseInt(k))%26];
                  } else{
                        ciphertext+=upperchars[ (upperchars.indexOf(plain[i])+parseInt(k))%26];
                  }
            }  
      document.getElementById("ciphertext").innerHTML="Your cipher text is " +ciphertext;
      }
}     