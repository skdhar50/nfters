import AmazeNFT from "./components/amaze";
import CollectionNFT from "./components/collectionNFT";
import CollectionOver from "./components/collectionOver";
import DiscoverNFTs from "./components/discoverNFT";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import SignUpNFT from "./components/signupNFT";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AmazeNFT />
      <CollectionOver />
      <CollectionNFT />
      <SignUpNFT />
      <DiscoverNFTs />
      <Footer />
    </>
  );
}

export default App;
