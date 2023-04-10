import { createTheme } from "@mui/material";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#115C9B",
		},
		secondary: {
			main: "#FFC107",
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 300,
			md: 600,
			lg: 900,
			xl: 1200,
		},
	},
});
