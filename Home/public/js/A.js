let checkBoxNew = document.getElementById("flexSwitchCheckChecked")
checkBoxNew.addEventListener("change",(e)=>{
        if(checkBoxNew.checked){
                checkBoxNew.value = true
        }else{
                checkBoxNew.value = false
        }
        e.preventDefault()
})

let checkBoxSale = document.getElementById("flexSwitchCheckDisabled")
checkBoxSale.addEventListener("change",(e)=>{
        if(checkBoxSale.checked){
                checkBoxSale.value = true
        }else{
                checkBoxSale.value = false
        }
        e.preventDefault()
})
