import {
	FiCloudRain,
	FiDroplet,
	FiSun,
	FiSunrise,
	FiSunset,
	FiThermometer,
	FiTrendingDown,
	FiTrendingUp,
	FiWind,
} from "react-icons/fi";
import { MdWaves } from "react-icons/md";
import { Header } from "../../components/layout/Header/";
import { Main } from "../../components/layout/Main";
import "./Home.style.js";

export const Home = () => {
	return (
		<>
			<Header />
			<Main>
				<div className="content">
					<div className="main_climate_information">
						<div className="flex-col justify-content align-items gap-3">
							<div className="location">São Paulo, São Paulo, Brasil</div>
							<div className="temperature">Temperatura ºC</div>
							<div className="preview flex-row gap-1">
								<div className="flex-row gap-1">
									<span>
										<FiTrendingDown />
									</span>
									<span>mínima</span>
								</div>
								<div>|</div>
								<div className="flex-row gap-1">
									<span>
										<FiTrendingUp />
									</span>
									<span>máxima</span>
								</div>
							</div>
						</div>
						<div className="flex-col justify-content align-items gap-3">
							<div className="icon">icone</div>
							<span>descrição</span>
						</div>
					</div>
					<div className="main_climate_details gap-1">
						<div className="climate_item">
							<span>
								<FiWind size={24} />
							</span>
							<p className="text text_data">Dados</p>
							<p className="text text_description">Qualidade do ar</p>
						</div>
						<div className="climate_item">
							<span>
								<FiThermometer size={24} />
							</span>
							<span className="text text_data">Dados</span>
							<span className="text text_description">Pressão ATM</span>
						</div>
						<div className="climate_item">
							<span>
								<FiSun size={24} />
							</span>
							<span className="text text_data">Dados</span>
							<span className="text text_description">Raios UV</span>
						</div>
						<div className="climate_item">
							<span>
								<FiCloudRain size={24} />
							</span>
							<span className="text text_data">Dados</span>
							<span className="text text_description">
								Umidade relativa do ar
							</span>
						</div>
						<div className="climate_item">
							<span>
								<MdWaves size={24} />
							</span>
							<span className="text text_data">Dados</span>
							<span className="text text_description">Veloc. do vento</span>
						</div>
						<div className="climate_item">
							<span>
								<FiDroplet size={24} />
							</span>
							<span className="text text_data">Dados</span>
							<span className="text text_description">Volume de chuva</span>
						</div>
					</div>
					<div className="main_climate_preview">
						<div className="content">
							<div className="climate_preview_title">
								<p className="text text--md">Hoje</p>
								<button className="button button--text text text--md">
									Próximos 7 dias
								</button>
							</div>
							<div className="climate_preview_details">
								<div className="climate_item">
									<div className="text">00h00</div>
									<div className="text">Icone</div>
									<div className="text">Descrição</div>
								</div>
								<div className="climate_item">
									<div className="text">00h00</div>
									<div className="text">Icone</div>
									<div className="text">Descrição</div>
								</div>
								<div className="climate_item">
									<div className="text">00h00</div>
									<div className="text">Icone</div>
									<div className="text">Descrição</div>
								</div>
								<div className="climate_item">
									<div className="text">00h00</div>
									<div className="text">Icone</div>
									<div className="text">Descrição</div>
								</div>
								<div className="climate_item">
									<div className="text">00h00</div>
									<div className="text">Icone</div>
									<div className="text">Descrição</div>
								</div>
								<div className="climate_item">
									<div className="text">00h00</div>
									<div className="text">Icone</div>
									<div className="text">Descrição</div>
								</div>
								<div className="climate_item">
									<div className="text">00h00</div>
									<div className="text">Icone</div>
									<div className="text">Descrição</div>
								</div>
							</div>
						</div>
					</div>
					<div className="main_sun_moon_toggle">
						<div className="time_container">
							<span>
								<FiSunrise size={24} />
							</span>
							<p className="text">Nascer do Sol</p>
							<p className="text">00h00</p>
						</div>
						<div className="time_container">
							<span>
								<FiSunset size={24} />
							</span>
							<p className="text">Pôr do Sol</p>
							<p className="text">05h00</p>
						</div>
					</div>
				</div>
			</Main>
		</>
	);
};
