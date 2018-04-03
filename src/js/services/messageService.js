myApp.service("messageService", messageService);

function messageService($http) {
    let sv = this;

    sv.sendMessage = (msg) => {
        return $http.post("/", msg).then(res => {
            return true;
        });
    };
}