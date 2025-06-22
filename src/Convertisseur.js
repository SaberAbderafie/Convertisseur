import React, { useState } from "react";

function Convertisseur() {
  const [from, setFrom] = useState("bitcoin");
  const [to, setTo] = useState("cad");
  const [resultat, setResultat] = useState(null);

  const convertir = async () => {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${from}&vs_currencies=${to}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setResultat(data[from][to]);
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  const vider = () => {
    setResultat(null);
  };

  return (
    <div style={{ margin: "30px" }}>
      <h2>Convertisseur de monnaie</h2>
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        <option value="bitcoin">Bitcoin</option>
        <option value="ethereum">Ethereum</option>
        <option value="litecoin">Litecoin</option>
        <option value="tether">Tether</option>
      </select>
      <span> ➜ </span>
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        <option value="cad">CAD</option>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="mad">MAD</option>
      </select>
      <br /><br />
      <button onClick={convertir}>Convertir la monnaie</button>
      <button onClick={vider} style={{ marginLeft: "10px" }}>Vider</button>
      <div style={{ marginTop: "20px", fontSize: "20px" }}>
        {resultat && (
          <div>
            💰 1 {from} = <strong>{resultat}</strong> {to.toUpperCase()}
          </div>
        )}
      </div>
    </div>
  );
}

export default Convertisseur;
