import { createConfig, http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
const { NEXT_PUBLIC_INFURA_SEPOLIA_URL } = process.env;

export const config = createConfig({
	chains: [mainnet, sepolia],
	transports: {
		[mainnet.id]: http(),
		[sepolia.id]: http(NEXT_PUBLIC_INFURA_SEPOLIA_URL),
	},
});
