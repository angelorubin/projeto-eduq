import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import logo from "../../assets/img/logo2.png";

export default function Header() {
	const theme = useTheme();

	return (
		<Box
			sx={{
				display: "flex",
				width: "100%",
				minHeight: "25vh",
				backgroundColor: "secondary.main",
				[theme.breakpoints.between("xs", "md")]: {
					flexDirection: "column-reverse",
				},
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "flex-start",
					alignItems: "center",
					ml: 2,
					width: "50%",
					[theme.breakpoints.between("xs", "md")]: {
						alignItems: "center",
						justifyContent: "center",
						width: "100%",
						ml: 0,
					},
				}}
			>
				<Typography
					variant="h4"
					sx={{
						fontWeight: "800",
						mt: 2,
						mb: 2,
					}}
				>
					Campanha Anti-bullying
				</Typography>
			</Box>

			<Box
				sx={{
					display: "flex",
					justifyContent: "flex-end",
					width: "50%",
					[theme.breakpoints.between("xs", "md")]: {
						width: "100%",
						alignItems: "center",
						justifyContent: "center",
					},
				}}
			>
				<Image src={logo} alt="bullying" width="100%" height={300} />
			</Box>
		</Box>
	);
}
