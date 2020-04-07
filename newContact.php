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
	<div id="vueNewContact">
		<!-- Wrapper -->
		<div id="wrapper">

			<!-- Main -->
			<div id="main">
				<div class="inner">

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
								<li><button href="#" class="button small icon solid fa-save">salvar</button></li>
							</ul>
							<form method="post" action="#">
								<div class="row gtr-uniform">
									<div class="col-md-4 col-sm-12">
										<label for="name">Nome:</label>
										<input type="text" id="name" placeholder="Nome..." />
									</div>
									<div class="col-md-4 col-sm-12">
										<label for="company">Empresa:</label>
										<input type="text" id="company" placeholder="Empresa..." />
									</div>
									<div class="col-md-4 col-sm-12">
										<label for="role">Cargo:</label>
										<input type="text" id="role" placeholder="Cargo..." />
									</div>
								</div>
							</form>
						</div>
					</section>

					<section>
						<header style="position: absolute;">
							<h5>Telefones</h5>
						</header>
						<ul class="actions" style="justify-content: flex-end;">
							<li><button href="#" class="button small"><span class="icon solid fa-plus"></span></li>
						</ul>
						<form method="post" action="#">
							<div class="row gtr-uniform">
								<div class="col-md-4 col-sm-12">
									<div id="phoneInput0">
										<label for="telefone">Telefone:</label>
										<div class="input-group mb-3">
											<select class="col-5 custom-select" id="inputGroupSelect01">
												<option selected>Selecione...</option>
												<option value="1">Celular</option>
												<option value="2">Residencial</option>
												<option value="3">Comercial</option>
												<option value="4">Outros</option>
											</select>
											<div class="col-7 input-group-append no-padding">
												<input type="text" id="phone01" placeholder="Telefone..." />
											</div>
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
						<ul class="actions" style="justify-content: flex-end;">
							<li><button href="#" class="button small"><span class="icon solid fa-plus"></span></li>
						</ul>
						<form>
							<div class="row gtr-uniform">
								<div class="col-md-3 col-sm-12">
									<label for="zipCode0">CEP:</label>
									<div class="input-group mb-3">
										<input type="text" id="zipCode" v-model="zipCode" class="form-control" placeholder="CEP..." aria-label="Recipient's username" aria-describedby="basic-addon2">
										<div class="input-group-append">
											<button class="button btn btn-outline-secondary" type="button" @click="getCep()"><span class=" icon solid fa-search"></span></button>
										</div>
									</div>
								</div>
							</div>
							<div class="row gtr-uniform">
								<div class="col-md-6 col-sm-12">
									<label for="street">Logradouro:</label>
									<input type="text" id="street" placeholder="Logradouro..." />
								</div>
								<div class="col-md-3 col-sm-12">
									<label for="number">Número:</label>
									<input type="text" id="number" placeholder="Número..." />
								</div>
								<div class="col-md-3 col-sm-12">
									<label for="neighborhood">Bairro:</label>
									<input type="text" id="neighborhood" placeholder="Bairro..." />
								</div>
								<div class="col-md-4 col-sm-12">
									<label for="complement">Complemento:</label>
									<input type="text" id="complement" placeholder="Complemento..." />
								</div>
								<div class="col-md-4 col-sm-12">
									<label for="city">Cidade:</label>
									<input type="text" id="city" placeholder="Cidade..." />
								</div>
								<div class="col-md-4 col-sm-12">
									<label for="state">Estado:</label>
									<input type="text" id="state" placeholder="Estado..." />
								</div>

							</div>
						</form>
					</section>
				</div>
			</div>

			<?php include_once("sidebar.php"); ?>

		</div><!-- wrapper -->
	</div> <!-- vueNewContact -->

	<script type="text/javascript" src="scripts/newContact.js"></script>
	<?php require_once("footerScripts.php"); ?>
</body>

</html>