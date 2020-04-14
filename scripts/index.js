var vueIndex = new Vue({
	el: '#vueIndex',
	data() {
		return {
			dataTableData: {
				paging: true,
				lengthChange: true,
				searching: true,
				ordering: true,
				info: true,
				autoWidth: false,

				language: {
					searchPlaceholder: 'Procurar...',
				},

				oLanguage: {
					sProcessing: 'Aguarde enquanto os dados são carregados ...',
					sLengthMenu: 'Mostrar _MENU_ registros por pagina',
					sZeroRecords: 'Nenhum registro encontrado',
					sInfoEmpty: 'Exibindo 0 a 0 de 0 registros',
					sInfo: 'Exibindo de _START_ a _END_ de _TOTAL_ registros',
					sInfoFiltered: '',
					sSearch: 'Procurar',
					oPaginate: {
						sFirst: 'Primeiro',
						sPrevious: 'Anterior',
						sNext: 'Próximo',
						sLast: 'Último',
					},
				},
			},
			table: null,
			contactsList: [],
		};
	},
	methods: {
		getContacts() {
			$.ajax({
				method: 'GET',
				url: config.server + '/contacts/getUserContacts/' + localStorage.getItem('user_id'),
				headers: config.headers,
			}).done((result) => {
				if (result.status) {
                    this.contactsList = result.data;
                    let contactsArray = [];

					result.data.map((v) => {               
						let contact = {
							name: v.name,
							company: v.company,
							role: v.role,
							phone: v.phones[0].phone,
							options: `<div>
                                    <div class="input-group-btn">
                                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                            <span class="fa fa-th"></span>
                                        </button>
                                        <ul class="dropdown-menu" style="    transform: translate3d(800px, 170px, 0px) !important;">
                                            <!--<li><a href="javascript:void(0)" onclick="vueIndex.visualizeContact(`+ v.contact_id +`)">Visualizar</a></li>-->
                                            <li><a href="contacts.php?contact_id=`+ v.contact_id +`">Visualizar</a></li>
                                            <li><a href="javascript:void(0)" onclick="vueIndex.deleteContact(`+ v.contact_id +`)">Excluir</a></li>
                                        </ul>
                                    </div>
                                </div>`,
                        };

						contactsArray.push(contact);
					});

					this.renderTable(contactsArray);
				}
			});
		},

		visualizeContact(id) {
			//TODO
		},
        
        deleteContact(id) {
            $.ajax({
				method: 'DELETE',
				url: config.server + '/contacts/deleteContact/' + id,
				headers: config.headers,
			}).done((result) => {
				if (result.status) {
					this.getContacts();
					swal('Sucesso', 'Contato excluido com sucesso', 'success');
				} else {
					swal('Oops', result.msg, 'info');
				}
			});
        },

		renderTable(data) {
			this.renderDestroy();
			var tableItem = this.dataTableData;
			tableItem.columns = [
				{ data: 'name' },
				{ data: 'company' },
				{ data: 'role' },
				{ data: 'phone' },
				{ data: 'options' },
			];

			this.table = $('#contactsTable').DataTable(tableItem).rows.add(data).draw();
		},

		renderDestroy() {
			if (this.table != null) {
				this.table.clear();
				this.table.destroy();
				this.table = null;
			}
		},
	},
	mounted() {
		this.getContacts();
	},
	watch: {},
});
