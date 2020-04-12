<!DOCTYPE HTML>
<!--
	Editorial by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>

<head>
	<title>Agenda de Contatos</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
	<link rel="stylesheet" href="assets/css/main.css" />
	<?php require_once("headerScripts.php"); ?>
</head>

<body class="is-preload">
	<div>
		<!-- Wrapper -->
		<div id="wrapper">

			<!-- Main -->
			<div id="main">
				<div id="vueContacts" class="inner">
					<!-- Header -->
					<header id="header">
						<span class="logo"><strong>Contatos</strong></span>
					</header>

					<!-- Banner -->
					<section id="banner">
						<div class="content">
							<header style="position: absolute;">
								<h3>Novo contato</h3>
							</header>
							<ul class="actions" style="justify-content: flex-end;">
								<li><button @click="saveContact" class="button small icon solid fa-save">salvar</button></li>
							</ul>
							<form method="post" action="#">
								<div class="row gtr-uniform">
									<div class="col-md-4 col-sm-12">
										<label for="name">Nome:</label>
										<input type="text" v-model="name" placeholder="Nome..." autocomplete="false" />
									</div>
									<div class="col-md-4 col-sm-12">
										<label for="company">Empresa:</label>
										<input type="text" v-model="company" placeholder="Empresa..." />
									</div>
									<div class="col-md-4 col-sm-12">
										<label for="role">Cargo:</label>
										<input type="text" v-model="role" placeholder="Cargo..." />
									</div>
								</div>
							</form>
						</div>
					</section>

					<section>
						<header style="position: absolute;">
							<h5>Telefones</h5>
						</header>
						<ul id="phoneActions" class="actions" style="justify-content: flex-end;">
							<li><button @click="addPhone" class="button small"><span class="icon solid fa-plus"></span></li>
						</ul>
						<form method="post" action="#">
							<div id="phonesDiv" class="row gtr-uniform">
								<div id="phoneDiv0" class="col-md-4 col-sm-12">
									<label for="phoneLabel0">Telefone:</label>
									<div class="input-group mb-3">
										<select class="col-5 custom-select" id="phoneSelect0">
											<option value="Celular" selected>Celular</option>
											<option value="Residencial">Residencial</option>
											<option value="Comercial">Comercial</option>
											<option value="Outros">Outros</option>
										</select>
										<div class="col-7 input-group-append no-padding">
											<input type="text" id="phoneInput0" placeholder="Telefone..." />
										</div>
									</div>
								</div>
							</div>
						</form>
					</section>

					<section>
						<header style="position: absolute;">
							<h5>Endereços</h5>
						</header>
						<ul id="addressActions" class="actions" style="justify-content: flex-end;">
							<li><button type="button" @click="addAddress" class="button small"><span class="icon solid fa-plus"></span></li>
						</ul>
						<form>
							<div id="addressesDiv">
								<div id="addressDiv0">
									<div class="row gtr-uniform">
										<div class="col-md-3 col-sm-12">
											<label for="zipCode0">CEP:</label>
											<div class="input-group mb-3" style="align-items: center;">
												<input type="text" id="zipCode0" class="form-control" placeholder="CEP..." aria-label="Recipient's username" aria-describedby="basic-addon2" autocomplete="false">
												<div class="input-group-append">
													<button id="zipButton0" class="button search btn btn-outline-secondary" type="button" @click="getCep(0)"><span class=" icon solid fa-search"></span></button>
												</div>
											</div>
										</div>
									</div>
									<div class="row gtr-uniform">
										<div class="col-md-6 col-sm-12">
											<label for="street0">Logradouro:</label>
											<input type="text" id="street0" placeholder="Logradouro..." autocomplete="false" />
										</div>
										<div class="col-md-3 col-sm-12">
											<label for="number0">Número:</label>
											<input type="text" id="number0" placeholder="Número..." autocomplete="false" />
										</div>
										<div class="col-md-3 col-sm-12">
											<label for="neighborhood0">Bairro:</label>
											<input type="text" id="neighborhood0" placeholder="Bairro..." autocomplete="false" />
										</div>
										<div class="col-md-4 col-sm-12">
											<label for="complement0">Complemento:</label>
											<input type="text" id="complement0" placeholder="Complemento..." autocomplete="false" />
										</div>
										<div class="col-md-4 col-sm-12">
											<label for="city0">Cidade:</label>
											<input type="text" id="city0" placeholder="Cidade..." autocomplete="false" />
										</div>
										<div class="col-md-4 col-sm-12">
											<label for="state0">Estado:</label>
											<input type="text" id="state0" placeholder="Estado..." autocomplete="false" />
										</div>
									</div>
								</div>
							</div>
						</form>
					</section>
				</div>
			</div>

			<?php include_once("sidebar.php"); ?>

		</div><!-- wrapper -->
	</div> <!-- vueContacts -->

	<script type="text/javascript" src="scripts/sidebar.js"></script>
	<script type="text/javascript" src="scripts/contacts.js"></script>
	<?php require_once("footerScripts.php"); ?>
</body>

</html>