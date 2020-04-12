<!DOCTYPE html>
<!--
	Astral by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>

<head>
	<title>Astral by HTML5 UP</title>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<?php require_once("headerscripts.php"); ?>
	<script src="assets/js/init.js"></script>
	<noscript>
		<?php require_once("noscripts.php"); ?>
	</noscript>
</head>

<body>
	<!-- Wrapper-->
	<div id="wrapper">
		<!-- Nav -->
		<nav id="nav">
			<a href="#login" class="icon fa-sign-in active"><span>Logar</span></a>
			<a href="#register" class="icon fa-user-plus"><span>Cadastrar</span></a>
		</nav>

		<!-- Main -->
		<div id="main">
			<div id="vueLogin">
				<!-- login -->
				<article id="login" class="panel">
					<a href="#register" class="jumplink pic" id="register-link">
						<p>Não é membro? <br> Cadastre-se já!</p>
						<span class="arrow icon fa-chevron-right"></span>
					</a>
					<div class="formulario">
						<form class="form-login">
							<div class="form-group">
								<label for="emailLogin" class="">Email: </label>
								<input name="emailLogin" placeholder="Email..." v-model="emailLogin" @keyup="keyUpEmail" ref="emailLogin" type="text" class="form-control" value="" autocomplete="off">
							</div>
							<div class="form-group">
								<label for="passwordLogin" class="">Senha: </label>
								<input name="passwordLogin" placeholder="Senha..." v-model="passwordLogin" @keyup="keyupPassword" ref="passwordLogin" type="password" class="form-control" value="" autocomplete="off">
							</div>
							<div class="form-group">
								<button type="button" class="align-self-end button-gradient float-right btn btn-secondary" @click="login">Conectar</button>
							</div>
						</form>
					</div>
				</article>

				<!-- register -->
				<article id="register" class="panel">
					<a href="#login" class="jumplink pic" id="login-link">
						<p>Já é um membro? <br> Faça login!</p>
						<span class="arrow icon fa-chevron-left"><span></span></span>
					</a>
					<div class="formulario">
						<form class="form-login">
							<div class="form-group">
								<label for="nameRegister" class="">Nome: </label>
								<input name="nameRegister" placeholder="Nome..." v-model="nameRegister" type="text" class="form-control" value="" autocomplete="off">
							</div>
							<div class="form-group">
								<label for="emailRegister" class="">Email: </label>
								<input name="emailRegister" placeholder="Email..." v-model="emailRegister" type="text" class="form-control" value="" autocomplete="off">
							</div>
							<div class="form-group">
								<label for="passwordRegister" class="">Senha: </label>
								<input name="passwordRegister" placeholder="Senha..." v-model="passwordRegister" type="password" class="form-control" value="" autocomplete="off">
							</div>
							<div class="form-group">
								<label for="passwordRegisterConfirm" class="">Confirme sua senha: </label>
								<input name="passwordRegisterConfirm" placeholder="Senha..." v-model="passwordRegisterConfirm" type="password" class="form-control" value="" autocomplete="off">
							</div>
							<div class="form-group">
								<button type="button" class="align-self-end button-gradient float-right btn btn-secondary" @click="register">Registrar</button>
							</div>
						</form>
					</div>
				</article>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="scripts/login.js"></script>
	<?php require_once("footerScripts.php"); ?>
</body>

</html>