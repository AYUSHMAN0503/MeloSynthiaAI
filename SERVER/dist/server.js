const forwarderOrigin = 'http://localhost:5000';

const initialize = () => {
    const connectButton = document.getElementById('connectWallet');
    const { ethereum } = window;

    const onboardMetaMaskClient = async () => {
        if (!isMetamaskInstalled()) {
            // prompt the user to install it
            console.log("MetaMask is not installed :(");
            connectButton.value = "Click here to install metamask";
            connectButton.onclick = installMetaMask;
        } else {
            console.log("MetaMask is installed Hurray!!!!!");
            connectButton.onclick = connectMetaMask;
        }
    }

    const connectMetaMask = async () => {
        connectButton.disabled = true;
        try {
            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            connectButton.value = "Connected";
            console.log("accounts: ", accounts);
            connectButton.disabled = false;
        } catch (err) {
            console.error("error occured while connecting to MetaMask: ", err)
        }
    }

    const isMetamaskInstalled = () => {
        return ethereum && ethereum.isMetaMask;
    }

    const installMetaMask = () => {
        const onboarding = new MetaMaskOnboarding({ forwarderOrigin });
        connectButton.value = "Installation in progress";
        connectButton.disabled = true;
        onboarding.startOnboarding();
    }

    onboardMetaMaskClient();
};

window.addEventListener('DOMContentLoaded', initialize);