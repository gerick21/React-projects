export function Otro() {
  return (
    <div>
      <h1>Random Cat Facts</h1>
      <button onClick={handleClick}>New Cat Fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt="Random cat" />}
    </div>
  );
}
