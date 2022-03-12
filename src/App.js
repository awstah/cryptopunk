import CollectionCard from "./compnents/CollectionCard";
import Header from "./compnents/Header";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Main from "./compnents/Main";

function App() {
  const [nftLists, setnftLists] = useState(null);
  const [selectednft, setSelectednft] = useState();
  const fetchNftlist = async () => {
    const collectionList = await axios.get(
      "https://testnets-api.opensea.io/assets?asset_contract_address=0xcDdCf72988131c9CEeB372d839A0895C2634a184&order_direction=asc"
    );

    setnftLists(collectionList.data.assets);
    setSelectednft(collectionList.data.assets[0]);

    console.log(collectionList.data.assets);
  };

  useEffect(() => {
    return fetchNftlist();
  }, []);

  return (
    <div className="">
      <Header />

      {selectednft && <Main selectednft={selectednft} />}

      <div className="flex space-x-5 snap-x snap-mandatory overflow-x-auto px-5 pt-5 scrollbar-hide">
        {nftLists?.map((nft) => (
          <CollectionCard
            key={nft.token_id}
            id={nft.token_id}
            name={nft.name}
            traits={nft.traits}
            image={nft.image_preview_url}
            setSelectednft={setSelectednft}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
