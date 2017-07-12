(function () {
  angular
    .module('users')
    .controller('usersController', function ($scope, Meususers) {
      $scope.titulo = "Cadastro de Usuarios";
      $scope.titulo2 = "Lista de Usuarios";

      $scope.users = [];

      var carregarusers = function () {
        Meususers.listar().then(function (users) {
          $scope.users = users;
        });
      }

      $scope.novouser = {};

      $scope.criaruser = function () {
        var user = {
          id: Date.now() + "",
          nome: $scope.novouser.nome,
          sobrenome: $scope.novouser.sobrenome,
          idade: $scope.novouser.idade,
        };

        Meususers.inserir(user).then(carregarusers);

        $scope.novouser = {};
      }

      $scope.removeruser = function (id) {
        Meususers.remover(id).then(carregarusers);
      }

      carregarusers();

    });
})();