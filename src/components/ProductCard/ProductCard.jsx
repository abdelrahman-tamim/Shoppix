import { useDispatch } from "react-redux";
import styles from "./ProductCard.module.css";
import {
  addtocart,
  removefromcart,
  plusone,
  minusone,
} from "../Slices/CartSlice";
import { addToWishList, removeFromWishList } from "../Slices/WishListSlice";
import { Link } from "react-router-dom";

let ProductCard = ({ item, inCartPage, inWishListPage }) => {
  let dispatch = useDispatch();
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <Link to={`/products/${item.id}`} className={styles.imageContainer}>
          <img
            src={item.image}
            alt={item.title}
            className={styles.productImage}
          />
        </Link>

        <div className={styles.contentContainer}>
          <div className={styles.priceTag}>${item.price}</div>
          <h3 className={styles.productTitle}>{item.title}</h3>

          <div className={styles.statsContainer}>
            <div className={styles.rating}>
              <span className={styles.rateValue}>{item.rating.rate}</span>
              <span className={styles.rateLabel}>Rating</span>
            </div>
            <div className={styles.stock}>
              <span className={styles.stockValue}>{item.rating.count}</span>
              <span className={styles.stockLabel}>In Stock</span>
            </div>
          </div>

          <div className={styles.actions}>
            {inCartPage ? (
              <button
                onClick={() => dispatch(removefromcart(item))}
                className={`${styles.actionButton} ${styles.removeButton}`}
              >
                Remove From Cart
              </button>
            ) : (
              <button
                onClick={() => dispatch(addtocart(item))}
                className={`${styles.actionButton} ${styles.addButton}`}
              >
                Add To Cart
              </button>
            )}

            {inWishListPage ? (
              <button
                onClick={() => dispatch(removeFromWishList(item))}
                className={`${styles.actionButton} ${styles.removeButton}`}
              >
                Remove From WishList
              </button>
            ) : (
              <button
                onClick={() => dispatch(addToWishList(item))}
                className={`${styles.actionButton} ${styles.wishlistButton}`}
              >
                Add to WishList
              </button>
            )}

            {inCartPage && (
              <div className={styles.quantityControl}>
                <button
                  onClick={() => dispatch(minusone(item))}
                  className={styles.quantityButton}
                >
                  −
                </button>
                <span className={styles.quantity}>{item.quantity}</span>
                <button
                  onClick={() => dispatch(plusone(item))}
                  className={styles.quantityButton}
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
