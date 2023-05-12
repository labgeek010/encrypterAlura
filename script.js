const textArea = document.querySelector(".text-area");
const message = document.querySelector(".message");


/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function btnEncrypt(){
    const encryptedText =encrypt(textArea.value)
    message.value = encryptedText
    textArea.value = "";
    message.style.backgroundImage = "none"

}

function encrypt(encryptedString){
    let matrixCode = [["e", "enter"],["i", "imes"],["a","ai"],["o","ober"],["u", "ufat"]];
    encryptedString = encryptedString.toLowerCase()

    for(let i = 0; i <matrixCode.length; i++){
        if(encryptedString.includes(matrixCode[i][0])){
                encryptedString = encryptedString.replaceAll(matrixCode[i][0], matrixCode[i][1])
        }
    }
    return encryptedString;
}

function btnDecrypt(){
    const encryptedText = decrypt(textArea.value)
    message.value = encryptedText
    textArea.value = "";
}


function decrypt(decryptedString){
    let matrixCode = [["e", "enter"],["i", "imes"],["a","ai"],["o","ober"],["u", "ufat"]];
    decryptedString = decryptedString.toLowerCase()

    for(let i = 0; i <matrixCode.length; i++){
        if(decryptedString.includes(matrixCode[i][1])){
            decryptedString = decryptedString.replaceAll(matrixCode[i][1], matrixCode[i][0] )
        }
    }
    return decryptedString;
}



			var txt = document.querySelector('.message');
			var btn = document.querySelector('.copy');

			var clipboard =
			{
				data      : '',
				intercept : false,
				hook      : function (evt)
				{
					if (clipboard.intercept)
					{
						evt.preventDefault();
						evt.clipboardData.setData('text/plain', clipboard.data);
						clipboard.intercept = false;
						clipboard.data      = '';
					}
				}
			};

			window.addEventListener('copy', clipboard.hook);
			btn.addEventListener('click', onButtonClick);

			function onButtonClick ()
			{
				clipboard.data = txt.value;

				if (window.clipboardData)
				{
					window.clipboardData.setData('Text', clipboard.data);
				}
				else
				{
					clipboard.intercept = true;
					document.execCommand('copy');
				}
			}

