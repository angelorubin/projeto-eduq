import { Box, Typography, useTheme } from "@mui/material";
import bullying from "../../assets/img/bullying.png";

export default function Header() {
	const theme = useTheme();
	return (
		<Box
			sx={{
				display: "flex",
				width: "100%",
				height: "20vh",
				backgroundColor: "primary.main",
				alignItems: "center",
				[theme.breakpoints.between("xs", "md")]: {
					justifyContent: "center",
				},
			}}
		>
			<Typography
				variant="h4"
				sx={{ ml: 1, fontWeight: 600, color: "common.white" }}
			>
				Campanha anti-bullying
			</Typography>
		</Box>
	);
}
