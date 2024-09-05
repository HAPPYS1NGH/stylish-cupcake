import { getDefaultWallets, getDefaultConfig } from "@rainbow-me/rainbowkit"
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets"
import { http } from "viem"
import {
  arbitrum,
  arbitrumSepolia,
} from "wagmi/chains"

const { wallets } = getDefaultWallets()

export const WALLETCONNECT_PROJECT_ID =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? ""
if (!WALLETCONNECT_PROJECT_ID) {
  console.warn(
    "You need to provide a NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID env variable"
  )
}
export const config = getDefaultConfig({
  appName: "Cupcake Vending Machine",
  projectId: WALLETCONNECT_PROJECT_ID,
  wallets: [
    ...wallets,
    {
      groupName: "Other",
      wallets: [argentWallet, trustWallet, ledgerWallet],
    },
  ],
  chains: [
    arbitrumSepolia,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
      ? [arbitrumSepolia,]
      : []),
  ],
  transports: {
    [arbitrumSepolia.id]: http(process.env.ARBITRUM_RPC_URL)
  },
  ssr: true,
})
