var vueContacts = new Vue({
	el: '#vueContacts',

	data() {
		return {
			contactId: '',
			name: '',
			company: '',
			role: '',
			phones: [],
			addresses: [],
			zipCode: '',
		};
	},

	methods: {
		getCep() {
			console.log(this.zipCode);

			if (this.zipCode == '') {
				swal('Oops', 'Digite a descrição do Produto', 'info');
				return;
			}

			$.ajax({
				method: 'GET',
				url: 'https://viacep.com.br/ws/' + this.zipCode + '/json/',
			}).done((result) => {
				if (result.erro) {
					console.log('Deu ruim');
				} else {
					console.log(result);
				}
			});
		},
	},

	mounted() {},

	watch: {},
});
