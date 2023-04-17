import { createTheme } from "@mui/material";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#fb0b14",
		},
		secondary: {
			main: "#f3934f",
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
