function homeController(messageService) {
    let vm = this;

    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }

      

    vm.send = () => {

        let message = {
            email:vm.email,
            name:vm.name,
            message:vm.message
        };

        let validate = vm.validateMessage(message);
        if (validate !== 0) {
            toastr["error"]("Message Not sent", "Error!")
            return false;
        }
        else {
            messageService.sendMessage(message).then((res) => {
                if (res) {
                    toastr["success"]("Message Sent", "Success!")
                    vm.email = "";
                    vm.name = "";
                    vm.message = "";
                }
                else {
                }
            });
        }
    };

    vm.validateMessage = (msg) => {
        let err = 0;

        for (let prop in msg) {  
            if(msg[prop] === undefined || msg[prop] == "") {
                err++;
            }
        }//end of loop
        return err;
    };//end of function
}//end of controller