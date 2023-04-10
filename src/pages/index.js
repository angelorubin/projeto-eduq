import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Typography, Box, Paper, useTheme } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          border: "1px solid red",
          p: 1,
          m: 1,
        }}
      >
        Menu
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          m: 1,
          p: 1,
          [theme.breakpoints.between("xs", "sm")]: {
            flexDirection: "column",
          },
        }}
      >
        <Box>
          <Paper elevation={24} sx={{ p: 1, m: 1 }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: "600" }}>
              Informações Adicionais
            </Typography>
            <Typography variant="body">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
          </Paper>
        </Box>
        <Box>
          <Paper sx={{ p: 1, m: 1 }}>
            <Typography>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Typography>
          </Paper>
        </Box>
        <Box>
          <Paper sx={{ p: 1, m: 1 }}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
