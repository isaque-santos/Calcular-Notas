(function () {
    angular
        .module('myApp', [])
        .controller('myCtrl', myCtrl)

    function myCtrl() {
        var vm = this;

        vm.list = [];


        vm.register = register; 


        function register(student) {

            var n1 = student.n1;
            var n2 = student.n2;

            var total = n1 * 0.25 + n2 * 0.25;
            var n3 = (6.20 - total) / 0.5;

            n3 = n3.toFixed(2);

            if (n3 >  10) {
                student.status = "Reprovado :-("
            } else {
                student.status = "Pendente"
            }

            student.n3 = n3
            vm.list.push(student);
            vm.student = undefined;
        }
    }
})();