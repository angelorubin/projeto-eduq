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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
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
							Título Central
						</Typography>
						<Typography variant="body2" sx={{ m: 1 }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur.
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

						<Typography variant="body2" sx={{ m: 1 }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et dolore magna
							aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
							dolor in reprehenderit in voluptate velit esse cillum dolore eu
							fugiat nulla pariatur.
						</Typography>

						<Typography variant="body2" sx={{ m: 1 }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur.
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
							Maria Silva
						</Typography>
						<Typography variant="body2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur.
						</Typography>
					</Paper>
					<Paper sx={{ p: 1, m: 1 }}>
						<Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "600" }}>
							José Silva
						</Typography>
						<Typography variant="body2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur.
						</Typography>
					</Paper>
					<Paper sx={{ p: 1, m: 1 }}>
						<Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "600" }}>
							José Silva
						</Typography>
						<Typography variant="body2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur.
						</Typography>
					</Paper>
					<Paper sx={{ p: 1, m: 1 }}>
						<Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "600" }}>
							José Silva
						</Typography>
						<Typography variant="body2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur.
						</Typography>
					</Paper>
				</Box>
			</Box>
		</Box>
	);
}
