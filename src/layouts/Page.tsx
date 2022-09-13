import { Box } from "@chakra-ui/react";
import ColorToggler from "components/ColorToggler";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Page = () => {
	return (
		<Box minHeight={"100vh"}>
			<ColorToggler />
			<Navbar />
			<Box px={8}>
				<Outlet />
			</Box>
		</Box>
	);
};
export default Page;