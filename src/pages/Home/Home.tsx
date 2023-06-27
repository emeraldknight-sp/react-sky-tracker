import "./Home.style.js";

export const Home = () => {
	return (
		<>
			<header className="header">
				<div className="container">
					<div className="content">
						<figure>
							<img src="" alt="Logotipo" />
							<span>Project Weather</span>
						</figure>
						<button className="icon">Notificações</button>
					</div>
				</div>
			</header>
			<main className="main">
				<div className="container">
					<div className="content">
						<div className="climate_information">
							<div className="flex">
								<div className="location">Localização</div>
								<div className="temperature">Temperatura</div>
								<div className="preview">
									<span>
										<div className="icon">icone</div>
										mínima
									</span>
									<span>|</span>
									<span>
										<div className="icon">icone</div>
										máxima
									</span>
								</div>
							</div>
							<div className="flex">
								<div className="icon">icone</div>
								<span>descrição</span>
							</div>
						</div>
						<div className="climate_details">
							<div className="climate_item">
								<div className="icone">Icone</div>
								<span className="index">Dados</span>
								<span className="description">descrição</span>
							</div>
							<div className="climate_item">
								<div className="icone">Icone</div>
								<span className="index">Dados</span>
								<span className="description">descrição</span>
							</div>
							<div className="climate_item">
								<div className="icone">Icone</div>
								<span className="index">Dados</span>
								<span className="description">descrição</span>
							</div>
							<div className="climate_item">
								<div className="icone">Icone</div>
								<span className="index">Dados</span>
								<span className="description">descrição</span>
							</div>
							<div className="climate_item">
								<div className="icone">Icone</div>
								<span className="index">Dados</span>
								<span className="description">descrição</span>
							</div>
							<div className="climate_item">
								<div className="icone">Icone</div>
								<span className="index">Dados</span>
								<span className="description">descrição</span>
							</div>
						</div>
						<div className="climate_preview">
							<div className="header">
								<span className="today">Hoje</span>
								<button className="toogle">Próximos 7 dias</button>
							</div>
							<div className="details">
								<div className="item">
									<div className="hour">00h00</div>
									<div className="icon">Icone</div>
									<div className="description">Descrição</div>
								</div>
								<div className="item">
									<div className="hour">00h00</div>
									<div className="icon">Icone</div>
									<div className="description">Descrição</div>
								</div>
								<div className="item">
									<div className="hour">00h00</div>
									<div className="icon">Icone</div>
									<div className="description">Descrição</div>
								</div>
								<div className="item">
									<div className="hour">00h00</div>
									<div className="icon">Icone</div>
									<div className="description">Descrição</div>
								</div>
								<div className="item">
									<div className="hour">00h00</div>
									<div className="icon">Icone</div>
									<div className="description">Descrição</div>
								</div>
								<div className="item">
									<div className="hour">00h00</div>
									<div className="icon">Icone</div>
									<div className="description">Descrição</div>
								</div>
								<div className="item">
									<div className="hour">00h00</div>
									<div className="icon">Icone</div>
									<div className="description">Descrição</div>
								</div>
							</div>
						</div>
						<div className="sun_moon_toogle">
							<div className="sunrise">
								<div className="icon">Icone</div>
								<div className="hour">00h00</div>
							</div>
							<div className="sunset">
								<div className="icon">Icone</div>
								<div className="hour">05h00</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};
