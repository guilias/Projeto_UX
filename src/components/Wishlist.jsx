import { createContext, useContext, useState } from "react";
import Icon from "./Icon";
import { useToast } from "./Toast";

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [games, setGames] = useState([]);
  const { showToast } = useToast();

  const toggle = (title, image) => {
    const saved = games.some((game) => game.title === title);
    if (saved) {
      setGames(games.filter((game) => game.title !== title));
      showToast("Jogo removido da sua lista de desejos.", "bookmark_remove");
    } else {
      setGames([...games, { title, image }]);
      showToast("Jogo adicionado à sua lista de desejos!", "bookmark");
    }
  };

  return (
    <WishlistContext.Provider value={{ games, toggle }}>
      {children}
    </WishlistContext.Provider>
  );
}

function useWishlist() {
  return useContext(WishlistContext);
}

export function WishlistButton({ game, image }) {
  const { games, toggle } = useWishlist();
  const saved = games.some((item) => item.title === game);
  return (
    <button
      className={`wishlist-btn ${saved ? "saved" : ""}`}
      type="button"
      aria-pressed={saved}
      aria-label={
        saved
          ? `Remover ${game} da lista de desejos`
          : `Adicionar ${game} à lista de desejos`
      }
      title={saved ? "Na sua lista de desejos" : "Adicionar à lista de desejos"}
      onClick={() => toggle(game, image)}
    >
      <Icon>bookmark</Icon>
    </button>
  );
}

export function WishlistSection() {
  const { games } = useWishlist();
  return (
    <section>
      <div className="section-header">
        <h2 className="section-title">
          Lista de Desejos{games.length > 0 && ` (${games.length})`}
        </h2>
      </div>
      {games.length === 0 ? (
        <p className="wishlist-empty">
          <Icon>bookmark</Icon>
          <span>
            Sua lista de desejos está vazia. Toque na bandeirinha da capa de um
            jogo, em Explorar ou nas Categorias, para guardá-lo aqui.
          </span>
        </p>
      ) : (
        <div className="poster-grid-5">
          {games.map(({ title, image }) => (
            <article className="poster-card" key={title}>
              <div className="poster-img-wrap">
                <img src={`/assets/${image}`} alt={title} />
                <WishlistButton game={title} image={image} />
              </div>
              <div className="poster-meta">
                <div className="poster-title">{title}</div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
