export default function Ad({ title, image, price, path, millage, city }) {
  return (
    <div className="smallAd">
      <img id="image" src={image} />
      <div className="infoSmallAd">
        <a class="link" id="link" href={path}>
          {title}
        </a>
        <p className="priceSmallAd">{price}</p>
        <p className="millageSmallAd">{millage}</p>
        <p className="citySmallAd">{city}</p>
      </div>
    </div>
  );
}
