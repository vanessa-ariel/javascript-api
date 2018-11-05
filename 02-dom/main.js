const input_cpf = document.getElementById("cpf")

input_cpf.addEventListener("focus" , function(event) {
    input_cpf.value = "___.___.___-__"
    setTimeout(function() { // to fix race condition bug
        input_cpf.setSelectionRange(0, 0) // to start at the beginning of the input
    }, 1) //miliseconds

    // or...
    // event.target.value = "___.___.___-__"
    // setTimeout(function() {
    //     event.target.setSelectionRange(0, 0)
    // }, 1)
    // or...
    // this.value = "___.___.___-__"
    // const that = this
    // setTimeout(function() {
    //     that.setSelectionRange(0, 0)
    // }, 1)
    // or...
    // this.value = "___.___.___-__"
    // let set_cursor_position = function () {
    //     this.setSelectionRange(0, 0)
    // }
    // set_cursor_position = set_cursor_position.bind(this)
    // setTimeout(set_cursor_position, 1)
})

input_cpf.addEventListener("blur" , function() {
    this.value = ""
})

input_cpf.addEventListener("keydown", function(event) {
    event.preventDefault() //nothing happens when we type 
    if("0123456789".indexOf(event.key) !== -1 //if the key is a digit return the index of the number in the string, if not, return -1
        && this.value.indexOf("_") !== -1) { // if there is any underscore
            this.value = this.value.replace(/_/, event.key) //the value of the input will return the value of the typed number that replaced the first underscore found on the input
            const next_index = this.value.indexOf("_") //get the index of the next underline
            this.setSelectionRange(next_index, next_index) //
    } else if (event.key === "Backspace") { //if the clicked key is backspace
        this.value = this.value.replace(/(\d$)|(\d(?=\D+$))/, "_") // found the last occurrency of the digit and replaced by the underscore
        const next_index = this.value.indexOf("_")
        this.setSelectionRange(next_index, next_index) //
    }
})
