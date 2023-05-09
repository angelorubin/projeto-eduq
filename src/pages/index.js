import { Inter } from "next/font/google";
import { Typography, Box, Paper, useTheme } from "@mui/material";
import Header from "../components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const theme = useTheme();

	return (
		<Box sx={{ display: "flex", flexDirection: "column" }}>
			<Box
				sx={{
					display: "flex",
					width: "100%",
				}}
			>
				<Header />
			</Box>

			<Box
				sx={{
					display: "flex",
					m: 1,
					p: 1,
					gap: "1rem",
					[theme.breakpoints.between("xs", "md")]: {
						flexDirection: "column",
					},
				}}
			>
				<Box
					sx={{
						[theme.breakpoints.up("md")]: {
							width: "25%",
						},
					}}
				>
					<Box sx={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
						<Typography variant="h5" sx={{ fontWeight: "600" }}>
							Informações Adicionais
						</Typography>
						<Typography variant="body2">
							O bullying é qualquer ato de violência física ou verbal
							intencional e praticado sem motivação contra alguém, cometido por
							uma ou mais pessoas. Existem vários tipos de bullying, sendo os
							mais praticados o verbal e o cyberbullying ou bullying virtual,
							mas também existem o físico, o material, o social e o psicológico.
						</Typography>
						<Typography variant="body2">
							Além dos tipos, existem também os “protagonistas”, indivíduos
							participantes, dentre eles estão os espectadores, as pessoas que
							estão presentes e veem tudo que está ocorrendo, porém permanecem
							em silêncio ou até mesmo participam com pequenos gestos e ações,
							como rir das piadas feitas para ofender o alvo, pessoa para qual
							as piadas, agressões e a perseguição são direcionadas e, quem
							sofre por traumas gerados a partir das ações praticadas pelo
							autor, indivíduo que pratica o bullying e está ciente de que isso
							poderá machucar o outro, porém não pensa nas possíveis
							consequências de seus atos.
						</Typography>
						<Typography variant="body2">
							Há muitas maneiras de conseguir identificar se uma pessoa está
							sofrendo bullying, como o desinteresse pelas aulas e estudos,
							hematomas e ferimentos constantes, invenção de desculpas para
							poder faltar a escola, isolamento e distanciamento até de amigos
							próximos, entre outras mudanças comportamentais. Uma das formas de
							lidar com isso é prestar atenção e buscar ouvir mais os filhos ou
							pessoas ao redor e observar pequenas mudanças, procurar um
							psicólogo caso ocorra alterações no humor, como irritabilidade,
							oscilações de humor, atitudes imprudentes, silêncio inusual,
							ansiedade, crises de choro e queda na autoestima.
						</Typography>
						<Typography variant="body2">
							É importante destacar a conscientização do bullying, pois é uma
							das principais formas para combatê-lo. Principalmente em escolas e
							na internet, pois podem auxiliar a identificar, impedir que isso
							continue ocorrendo e até mesmo a encorajar as pessoas que sofrem
							bullying a buscarem alguém para falar sobre isso.
						</Typography>
					</Box>
				</Box>

				<Box
					sx={{
						[theme.breakpoints.up("md")]: {
							width: "50%",
						},
					}}
				>
					<Box>
						<Typography variant="h5" sx={{ mb: 1, fontWeight: "600" }}>
							Como abordar o problema
						</Typography>
						<Typography variant="body2" sx={{ m: 1 }}>
							Embora seja difícil erradicar completamente o bullying, é possível
							reduzir significativamente sua incidência e impacto. Aqui estão
							algumas maneiras de abordar o problema:
						</Typography>

						<Box sx={{ m: 1 }}>
							<video
								src="https://res.cloudinary.com/angelorubin/video/upload/v1681734685/eduq/video-bullying-eduq-manoela_sidqbc.mp4"
								width="100%"
								controls
								autoplay
								type="video/mp4"
							/>
						</Box>

						<Typography variant="h5" sx={{ fontWeight: "600" }}>
							1. Conscientização e Educação
						</Typography>
						<Typography variant="body2" sx={{ m: 1 }}>
							É importante que as pessoas, especialmente as crianças, entendam o
							que é o bullying e quais são as suas consequências. As escolas e
							comunidades podem realizar programas de conscientização e educação
							sobre o bullying para sensibilizar as pessoas e ajudá-las a
							identificar e combater esse comportamento.
						</Typography>

						<Typography variant="h5" sx={{ fontWeight: 600 }}>
							2. Intervenção Imediata
						</Typography>
						<Typography variant="body2" sx={{ m: 1 }}>
							Quando o bullying é identificado, é importante agir imediatamente.
							As escolas e comunidades devem ter políticas claras para lidar com
							o bullying e agir rapidamente para proteger as vítimas e
							responsabilizar os agressores.
						</Typography>

						<Typography variant="h5" sx={{ fontWeight: 600 }}>
							3. Apoio Emocional e Psicológico
						</Typography>
						<Typography variant="body2" sx={{ m: 1 }}>
							As vítimas de bullying precisam de apoio emocional e psicológico
							para lidar com o trauma e o estresse. É importante que as escolas
							e comunidades ofereçam serviços de aconselhamento e terapia para
							ajudar as vítimas a lidar com as consequências do bullying.
						</Typography>

						<Typography variant="h5" sx={{ fontWeight: 600 }}>
							4. Responsabilização dos Agressores
						</Typography>
						<Typography variant="body2" sx={{ m: 1 }}>
							É importante que os agressores sejam responsabilizados por seu
							comportamento e enfrentem consequências adequadas. Isso pode
							incluir suspensão, expulsão ou até mesmo intervenção legal,
							dependendo da gravidade do bullying.
						</Typography>

						<Typography variant="h5" sx={{ fontWeight: 600 }}>
							5. Incentivar a empatia e a compaixão
						</Typography>
						<Typography variant="body2" sx={{ m: 1 }}>
							Incentivar a empatia e a compaixão: É importante que as escolas e
							comunidades incentivem a empatia e a compaixão em vez de agressão
							e violência. Isso pode ser feito por meio de programas de
							desenvolvimento social e emocional, como atividades de serviço
							comunitário e clubes de voluntários.
						</Typography>

						<Typography variant="body2" sx={{ m: 1 }}>
							Em resumo, o combate ao bullying exige um esforço coletivo de
							conscientização, intervenção imediata, apoio emocional e
							psicológico às vítimas, responsabilização dos agressores e
							promoção de empatia e compaixão. Com essas ações combinadas,
							podemos trabalhar para reduzir significativamente a incidência e o
							impacto do bullying em nossas comunidades.
						</Typography>

						<Typography variant="h5" x={{ fontWeight: 600 }}>
							Um Problema Social
						</Typography>
						<Typography variant="body2" sx={{ m: 1 }}>
							Bullying é um problema social que afeta muitas crianças,
							adolescentes e até mesmo adultos em todo o mundo. Ele se refere a
							um comportamento repetido e intencional de agressão, intimidação
							ou humilhação que é direcionado a uma pessoa ou grupo de pessoas
							mais fracos ou vulneráveis. Isso pode ocorrer em diferentes
							contextos, incluindo escolas, locais de trabalho e até mesmo na
							internet.
						</Typography>
						<Typography variant="body2" sx={{ m: 1 }}>
							O bullying pode ter graves consequências para a saúde mental e
							física das vítimas, incluindo ansiedade, depressão, baixa
							autoestima, isolamento social e até mesmo suicídio. Além disso,
							pode levar a problemas de comportamento, como abuso de drogas e
							álcool, comportamento agressivo e delinquência juvenil. Há muitas
							formas de bullying, incluindo bullying verbal (como insultos,
							ofensas e ameaças), bullying físico (como empurrões, socos e
							pontapés), bullying psicológico (como exclusão social e
							manipulação emocional), cyberbullying (assédio online) e sexting
							(o compartilhamento não consensual de conteúdo sexualmente
							explícito). É importante que as vítimas de bullying busquem ajuda
							de um adulto de confiança, como um professor, conselheiro, pai ou
							mãe. As escolas e as comunidades em geral também devem estar
							cientes desse problema e trabalhar para prevenir o bullying por
							meio de políticas e programas de conscientização. Além disso, é
							importante que todos nós nos esforcemos para sermos mais empáticos
							e respeitosos com os outros, para que possamos criar um ambiente
							mais seguro e positivo para todos. A mudança começa com cada um de
							nós, e todos podemos fazer a diferença no combate ao bullying.
						</Typography>
					</Box>
				</Box>

				{/* SEÇÃO DEPOIMENTOS */}
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						[theme.breakpoints.up("md")]: {
							width: "25%",
						},
					}}
				>
					<Typography variant="h5" sx={{ fontWeight: 600 }}>
						Depoimentos
					</Typography>
					<Paper sx={{ p: 1, m: 1 }}>
						<Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "600" }}>
							-Desconhecido
						</Typography>
						<Typography variant="body2">
							No colégio, todos da sala faziam piadas e vez ou outra os pegava
							apontando para mim e rindo.
						</Typography>
					</Paper>

					<Paper sx={{ p: 1, m: 1 }}>
						<Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "600" }}>
							-Pedro Guilherme
						</Typography>
						<Typography variant="body2">
							Quando menor virei motivo de chacota na escola por ter um jeito
							"afeminado", os garotos mais "masculos" faziam piadas sobre minha
							sexualidade e gênero, isso se espalhou por toda sala e todos os
							meus colegas repetiam as mesmas frases, "olha lá o viadinho!" ou
							"vira homem bixinha".
						</Typography>
					</Paper>

					<Paper sx={{ p: 1, m: 1 }}>
						<Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "600" }}>
							-Fabiana Silveira
						</Typography>
						<Typography variant="body2">
							Na minha infância tinha meninas que me batiam todos os dias na
							volta da escola. Eu não podia contar para minha mãe, pois ela ia
							me bater se eu não revidasse. Então um dia eu vi uma delas indo
							para a padaria, fui correndo, e agarrei ela pelos cabelos e
							comecei a dar porrada nela, ela saiu correndo e elas nunca mais
							mexeram comigo.
						</Typography>
					</Paper>

					<Paper sx={{ p: 1, m: 1 }}>
						<Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "600" }}>
							-Maiara dos Santos
						</Typography>
						<Typography variant="body2">
							"Meus familiares falam que eu preciso emagrecer e me dão pílulas
							para isso também e sempre fazem comentários maldosos sobre meu
							corpo".
						</Typography>
					</Paper>

					<Paper sx={{ p: 1, m: 1 }}>
						<Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "600" }}>
							-Andressa
						</Typography>
						<Typography variant="body2">
							Na minha antiga escola, eu sofria bullying por ser muito baixinha,
							me chamavam de anã, de tampinha e muitas outras coisas.
						</Typography>
					</Paper>
				</Box>
			</Box>
		</Box>
	);
}
