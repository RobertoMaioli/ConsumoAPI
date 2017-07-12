angular.module("users").factory("Meususers", function ($q, $http) {
	return {
		listar: function () {
			var promessa = $q.defer();

			$http.get("https://users-58e8b.firebaseio.com/users.json").then(
				function (result) {
					var users = [];

					angular.forEach(result.data, function (user, id) {
						user.id = id;
						users.push(user);
					});

					promessa.resolve(users);
				}
			);

			return promessa.promise;
		},
		inserir: function (user) {
			var id = user.id;
			delete user.id;

			return $http.put("https://users-58e8b.firebaseio.com/users/" + id + ".json", user);
		},
		remover: function (id) {
			return $http.delete("https://users-58e8b.firebaseio.com/users/" + id + ".json");
		}
	};
});