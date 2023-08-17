        document.getElementById('btn').addEventListener('click', function(){
            const input = document.getElementById('cupon')
            const inputString = input.value
            if(inputString != 'cup30'){
                alert('wrong cupon')
                
            }else{
                
                const price = document.getElementById('price')
                price.classList.remove('hidden')
                const priceAmount = document.getElementById('amount')
                priceAmount.innerText = '700'
                const priceAmountString = priceAmount.innerText

            }          
            
            input.value='';
        })
