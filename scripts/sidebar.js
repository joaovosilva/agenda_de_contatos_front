var vueSidebar = new Vue({
	el: '#vueSidebar',
	data() {
		return {};
	},
	methods: {
		authenticate() {
			console.log('EU TO AQUI');

			var access_token = localStorage.getItem('access_token');
			if (access_token) {
				config.headers = {
					Authorization: 'Bearer ' + access_token,
				};

				$.ajax({
					method: 'POST',
					url: config.server + '/auth/me',
					data: {
						token: access_token,
					},
				})
					.done((result) => {
						if (typeof result.status != 'undefined') {
							if (!result.status) {
								window.location.replace('login.php');
							}
						}
					})
					.fail(() => {
						window.location.replace('login.php');
					});
			} else {
				window.location.replace('login.php');
			}
		},

		logout() {
            console.log("LOGOUT");
            
			var access_token = localStorage.getItem('access_token');
			localStorage.removeItem('access_token');

			$.ajax({
				method: 'POST',
				url: config.server + '/auth/logout',
				data: {
					token: access_token,
				},
			})
				.done(() => {
					window.location.replace('login.php');
				})
				.fail(() => {
					window.location.replace('login.php');
				});
		},
	},
	mounted() {
		this.authenticate();
	},
});
