import { Delete, Edit } from "lucide-react";
import { Header } from "../../components/layout/Header";
import { Main } from "../../components/layout/Main";
import { Navbar } from "../../components/layout/Navbar";
import { Button } from "../../components/ui/Button";
import { StyledActivities } from "./Activities.style";

export const Activities = () => {
	const activities = [
		{
			id: 1,
			userId: 123,
			name: "Nadar",
			description: "Nadar na piscina local.",
			location: "Piscina Municipal",
			date: "2023-11-10",
			time: "14:00",
			notes: "Lembre-se de levar protetor solar.",
			status: "pendente",
		},
		{
			id: 2,
			userId: 456,
			name: "Correr",
			description: "Corrida matinal no parque.",
			location: "Parque da Cidade",
			date: "2023-11-12",
			time: "08:00",
			notes: "Use tênis de corrida confortáveis.",
			status: "concluída",
		},
		{
			id: 3,
			userId: 789,
			name: "Caminhada",
			description: "Caminhada à beira-mar.",
			location: "Praia da Cidade",
			date: "2023-11-15",
			time: "16:30",
			notes: "Desfrute do pôr do sol durante a caminhada.",
			status: "pendente",
		},
	];

	return (
		<StyledActivities>
			<Header />
			<Main>
				<article className="article">
					<section className="section section--active">
						<h3 className="section__title">Atividades programadas</h3>
						<ul className="section__list">
							{activities.map((activity) => (
								<li key={activity.id} className="section__item">
									<p className="section__item-name">{activity.name}</p>
									<span className="section__item-description">
										{activity.description}
									</span>
									<span>{activity.time} </span>
									<div className="section__item-button-group">
										<Button type="button" style="outlined" size="md">
											<Delete />
										</Button>
										<Button type="button" style="outlined" size="md">
											<Edit />
										</Button>
										<Button type="button" style="outlined" size="md">
											Concluir
										</Button>
									</div>
								</li>
							))}
						</ul>
						<Button type="button">Criar nova atividade</Button>
					</section>
					<section className="section section--expired">
						<h3 className="section__title">Atividades concluídas</h3>
						<ul className="section__list">
							<li></li>
						</ul>
					</section>
				</article>
			</Main>
			<Navbar />
		</StyledActivities>
	);
};
