import { Link } from 'react-router-dom';
import { TOffer } from '../../types/offers';
import { getStrStartWithCapitalLetters } from '../../utils';
import { AppRoute } from '../../const';
import Premium from '../ui/premium';
import Favorite from '../ui/favorite';

type OfferItemProps = {
  offer: TOffer;
}

function OfferItem ({offer}: OfferItemProps) : JSX.Element {
  const {id, title, type, price, previewImage, isFavorite, isPremium} = offer;

  return (
    <Link to={`${AppRoute.Offer}/${id}`}>
      <article className="cities__card place-card">
        {isPremium && <Premium isOfferCard/>}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={previewImage} width={260} height={200} alt={title}/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <Favorite isOfferCard isFavorite={isFavorite}/>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: '80%'}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{title}</a>
          </h2>
          <p className="place-card__type">{getStrStartWithCapitalLetters(type)}</p>
        </div>
      </article>
    </Link>
  );
}

export default OfferItem;
