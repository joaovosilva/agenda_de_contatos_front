var vueLogin = new Vue({
	el: '#vueLogin',
	data() {
		return {
			emailLogin: '',
			passwordLogin: '',
			nameRegister: '',
			emailRegister: '',
			passwordRegister: '',
			passwordRegisterConfirm: '',
		};
	},
	methods: {
		index() {
			window.location.replace('index.php');
		},
		login() {
			if (this.emailLogin == '') {
				swal('Oops', 'Digite o seu email', 'info');
				return;
			}

			if (this.passwordLogin == '') {
				swal('Oops', 'Digite a sua senha', 'info');
				return;
			}

			var data = {
				email: this.emailLogin,
				password: this.passwordLogin,
			};

			$.ajax({
				method: 'POST',
				url: config.server + '/auth/login',
				data: data,
				dataType: 'json',
			})
				.done((result) => {
					if (typeof result.error != 'undefined') {
						swal('Opss', 'Usuário ou senha inválida.', 'error');
					} else {
						if (typeof result.access_token != 'undefined') {
							localStorage.setItem('user_id', result.user_id);
							localStorage.setItem('access_token', result.access_token);
							this.index();
						} else {
							swal('Opss', 'Usuário ou senha inválida.', 'error');
						}
					}
				})
				.fail(function (jqXHR, textStatus, msg) {
					swal('Opss', 'Usuário ou senha inválida.', 'error');
				});
		},
		register() {
			if (this.nameRegister == '') {
				swal('Oops', 'Digite o seu nome', 'info');
				return;
			}

			if (this.emailRegister == '') {
				swal('Oops', 'Digite o seu email', 'info');
				return;
			}

			let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			if (!regex.test(this.emailRegister)) {
				swal('Oops', 'Formato de email inválido', 'info');
				return;
			}

			if (this.passwordRegister == '') {
				swal('Oops', 'Digite a sua senha', 'info');
				return;
			}

			if (this.passwordRegister != this.passwordRegisterConfirm) {
				swal('Oops', 'Campos de senha diferentes', 'info');
				return;
			}

			var data = {
				name: this.nameRegister,
				email: this.emailRegister,
				password: this.passwordRegister,
			};

			$.ajax({
				method: 'POST',
				url: config.server + '/users/register',
				data: data,
				dataType: 'json',
			})
				.done((result) => {
					if (result.status) {
						swal(
							'Sucesso',
							'Usuario cadastrado com sucesso, voce será redirecionado para realizar o login.',
							'success'
						).then((value) => {
							if (value) {
								$.ajax({
									method: 'GET',
									url: config.server + '/emails/sendWelcome',
									data: result.data
								}).done((result) => {
									console.log("Email enviado");
								});
							}
						});
						this.cleanRegister();
						$('#login-link').click();
					} else {
						swal('Oops', result.msg, 'info');
					}
				})
				.fail(() => {
					swal('Oops', 'Verifique o servidor ou administrador do sistema', 'info');
				});
		},
		cleanRegister() {
			this.nameRegister = '';
			this.emailRegister = '';
			this.passwordRegister = '';
			this.passwordRegisterConfirm = '';
		},
		keyUpEmail(e) {
			if (e.keyCode == 13) {
				this.$refs.passwordLogin.focus();
			}
		},
		keyupPassword(e) {
			if (e.keyCode == 13) {
				this.login();
			}
		},
	},
});
