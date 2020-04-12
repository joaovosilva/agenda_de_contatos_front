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
			phonesQuantity: 0,
			addressesQuantity: 0,
			PhoneMinus: false,
			addressMinus: false,
		};
	},

	methods: {
		saveContact() {
			if (this.name == '') {
				swal('Oops', 'Digite um nome de contato', 'info');
				return;
			}

			for (let i = 0; i <= this.phonesQuantity; i++) {
				this.phones.push({
					type: $('#phoneSelect' + i).val(),
					phone: $('#phoneInput' + i).val(),
				});
			}

			for (let i = 0; i <= this.addressesQuantity; i++) {
				this.addresses.push({
					zip_code: $('#zipCode' + i).val(),
					street: $('#street' + i).val(),
					number: $('#number' + i).val(),
					neighborhood: $('#neighborhood' + i).val(),
					complement: $('#complement' + i).val(),
					city: $('#city' + i).val(),
					state: $('#state' + i).val(),
				});
			}

			let data = {
				user_fk: localStorage.getItem('user_id'),
				name: this.name,
				company: this.company,
				role: this.role,
				phones: this.phones,
				addresses: this.addresses
			}

			$.ajax({
				method: 'POST',
				url: config.server + '/contacts/register',
				data: data,
				headers: config.headers,
			})
				.done((result) => {
					console.log(result);

					if (result.status) {
						this.clear();
						swal(
							'Sucesso',
							'Contato cadastrado com sucesso!',
							'success'
						);
					} else {
						swal('Oops', result.msg, 'info');
					}
				})
		},

		getCep(id) {
			let zipCode = $('#zipCode'+id).val();

			if (zipCode == '') {
				swal('Oops', 'Digite a descrição do Produto', 'info');
				return;
			}

			$.ajax({
				method: 'GET',
				url: 'https://viacep.com.br/ws/' + zipCode + '/json/',
			})
				.done((result) => {
					$('#street' + id).val(result.logradouro);
					$('#neighborhood' + id).val(result.bairro);
					$('#complement' + id).val(result.complemento);
					$('#city' + id).val(result.localidade);
					$('#state' + id).val(result.uf);
					$('#number' + id).focus();
				})
				.fail((result) => {
					swal('Oops', 'CEP não encontrado \n Por favor digite manualmente', 'info');
					return;
				});
		},

		addPhone() {
			this.phonesQuantity++;

			let html = '';

			html += '<div id="phoneDiv' + this.phonesQuantity + '" class="col-md-4 col-sm-12">';
				html += '<label for="phoneLabel' + this.phonesQuantity + '">Telefone:</label>';
					html += '<div class="input-group mb-3">';
							html += '<select class="col-5 custom-select" id="phoneSelect' + this.phonesQuantity + '">';
								html += '<option selected>Selecione...</option>';
								html += '<option value="Celular">Celular</option>';
								html += '<option value="Residencial">Residencial</option>';
								html += '<option value="Comercial">Comercial</option>';
								html += '<option value="Outros">Outros</option>';
							html += '</select>';
						html += '<div class="col-7 input-group-append no-padding">';
							html += '<input type="text" id="phoneInput' + this.phonesQuantity + '" placeholder="Telefone..." />';
						html += '</div>';
					html += '</div>';
			html += '</div>';

			$('#phonesDiv').append(html);
		},

		removePhone() {
			$('#phoneDiv' + this.phonesQuantity).remove();
			this.phonesQuantity--;
		},

		addAddress() {
			this.addressesQuantity++;
			
			let html = '';

			html += '<div id="addressDiv' + this.addressesQuantity + '" style="border-top: solid 1px rgba(210, 215, 217, 0.75); margin-top: 20px;">';
				html += '<div class="row gtr-uniform">';
					html += '<div class="col-md-3 col-sm-12">';
						html += '<label for="zipCode' + this.addressesQuantity + '">CEP:</label>';
						html += '<div class="input-group mb-3" style="align-items: center;">';
							html += '<input type="text" id="zipCode' + this.addressesQuantity + '" class="form-control" placeholder="CEP..." aria-label="Recipient\'s username" aria-describedby="basic-addon2">';
							html += '<div class="input-group-append">';
								html += '<button id="zipButton' + this.addressesQuantity + '" class="button search btn btn-outline-secondary" type="button" onclick="vueContacts.getCep(' + this.addressesQuantity + ')"><span class=" icon solid fa-search"></span></button>';
							html += '</div>';
						html += '</div>';
					html += '</div>';
				html += '</div>';
				html += '<div class="row gtr-uniform">';
					html += '<div class="col-md-6 col-sm-12">';
						html += '<label for="street' + this.addressesQuantity + '">Logradouro:</label>';
						html += '<input type="text" id="street' + this.addressesQuantity + '" placeholder="Logradouro..." />';
					html += '</div>';
					html += '<div class="col-md-3 col-sm-12">';
						html += '<label for="number' + this.addressesQuantity + '">Número:</label>';
						html += '<input type="text" id="number' + this.addressesQuantity + '" placeholder="Número..." />';
					html += '</div>';
					html += '<div class="col-md-3 col-sm-12">';
						html += '<label for="neighborhood' + this.addressesQuantity + '">Bairro:</label>';
						html += '<input type="text" id="neighborhood' + this.addressesQuantity + '" placeholder="Bairro..." />';
					html += '</div>';
					html += '<div class="col-md-4 col-sm-12">';
						html += '<label for="complement' + this.addressesQuantity + '">Complemento:</label>';
						html += '<input type="text" id="complement' + this.addressesQuantity + '" placeholder="Complemento..." />';
					html += '</div>';
					html += '<div class="col-md-4 col-sm-12">';
						html += '<label for="city' + this.addressesQuantity + '">Cidade:</label>';
						html += '<input type="text" id="city' + this.addressesQuantity + '" placeholder="Cidade..." />';
					html += '</div>';
					html += '<div class="col-md-4 col-sm-12">';
						html += '<label for="state' + this.addressesQuantity + '">Estado:</label>';
						html += '<input type="text" id="state' + this.addressesQuantity + '" placeholder="Estado..." />';
					html += '</div>';
				html += '</div>';
			html += '</div>';

			$('#addressesDiv').append(html);
		},

		removeAddress() {
			$('#addressDiv' + this.addressesQuantity).remove();
			this.addressesQuantity--;
		},

		clear() {
			for (let i = this.phonesQuantity; i >= 1; i--) {
				$('#phoneDiv' + i).remove();
			}
			for (let i = this.addressesQuantity; i >= 1; i--) {
				$('#addressDiv' + i).remove();
			}

			$('#removePhone').remove();
			$('#removeAddress').remove();

			this.contactId = '',
			this.name = '';
			this.company = '';
			this.role = '';
			this.phones = [];
			this.addresses = [];
			this.phonesQuantity = 0;
			this.addressesQuantity = 0;
			this.PhoneMinus = false;
			this.addressMinus = false;

			$('#phoneSelect0').val('Celular');
			$('#phoneInput0').val('');
			$('#zipCode0').val('');
			$('#street0').val('');
			$('#number0').val('');
			$('#neighborhood0').val('');
			$('#complement0').val('');
			$('#city0').val('');
			$('#state0').val('');
		}
	},

	mounted() {},

	watch: {
		phonesQuantity(nV, oV) {
			if (nV > 0 && !this.PhoneMinus) {
				let html = '';
				html =
					'<li id="removePhone"><button onclick="vueContacts.removePhone()" class="button small"><span class="icon solid fa-minus"></span></li>';
				$('#phoneActions').append(html);
				this.PhoneMinus = true;
			} else if (nV == 0 && this.PhoneMinus) {
				$('#removePhone').remove();
				this.PhoneMinus = false;
			}
		},
		addressesQuantity(nV, oV) {
			if (nV > 0 && !this.addressMinus) {
				let html = '';
				html =
					'<li id="removeAddress"><button onclick="vueContacts.removeAddress()" class="button small"><span class="icon solid fa-minus"></span></li>';
				$('#addressActions').append(html);
				this.addressMinus = true;
			} else if (nV == 0 && this.addressMinus) {
				$('#removeAddress').remove();
				this.addressMinus = false;
			}
		},
	},
});
