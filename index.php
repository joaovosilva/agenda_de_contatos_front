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

	<!-- Wrapper -->
	<div id="wrapper">

		<!-- Main -->
		<div id="main">
			<div id="vueIndex" class="inner">

				<!-- Header -->
				<header id="header">
					<span class="logo"><strong>Contatos</strong></span>
				</header>

				<!-- Banner -->
				<section id="banner">
					<div class="content">
						<header style="position: absolute;">
							<h3>Meus contatos</h3>
						</header>
						<ul class="actions" style="justify-content: flex-end;">
							<li><a href="contacts.php"><button class=" button icon solid fa-plus">Novo</button></a></li>
						</ul>
						<div class="table-wrapper">
							<table id="contactsTable" class="table table-bordered">
								<thead>
									<tr>
										<th>Nome</th>
										<th>Empresa</th>
										<th>Cargo</th>
										<th>Telefone</th>
										<th>Opções</th>
									</tr>
								</thead>
								<tbody>
									<!-- Inoformações preenchidas com o rows.add do DataTable -->
								</tbody>
							</table>
						</div>
					</div>
				</section>
			</div>
		</div>

		<?php require_once("sidebar.php"); ?>
	</div>
	<script type="text/javascript" src="scripts/sidebar.js"></script>
	<script type="text/javascript" src="scripts/index.js"></script>
	<?php require_once("footerScripts.php"); ?>
</body>

</html>