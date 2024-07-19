import { TonConnectButton, useTonAddress } from "@tonconnect/ui-react";

export default function Header() {
    const address = useTonAddress();

    return (
        <header>
            <TonConnectButton />
            {address && <p>Address: {address}</p>}
        </header>
    );
};