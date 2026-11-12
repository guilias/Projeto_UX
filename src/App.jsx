import { useState } from "react";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import Layout from "./components/Layout";
import Icon from "./components/Icon";
import { ToastProvider, useToast } from "./components/Toast";
import {
  WishlistButton,
  WishlistProvider,
  WishlistSection,
} from "./components/Wishlist";

const reviews = [
  [
    "rdr2_big.png",
    "Red Dead Redemption 2",
    "arthur.silva",
    "A",
    "5.0",
    "há 2 horas",
    "Simplesmente uma obra-prima. Atmosfera, os personagens e a história são incríveis. É um jogo que fica com você depois que termina.",
    "24",
    "182",
  ],
  [
    "hogwarts_big.png",
    "Hogwarts Legacy",
    "lunaferreira",
    "L",
    "4.5",
    "há 5 horas",
    "O mundo é lindo e a jogabilidade é fluida. Sinto falta de mais profundidade nas missões secundárias, mas ainda assim vale muito a pena.",
    "37",
    "156",
  ],
  [
    "tlou_big.png",
    "The Last of Us Part I",
    "pedrozz",
    "P",
    "4.8",
    "há 8 horas",
    "Rejogando agora e continua sendo uma das experiências mais marcantes dos games. A história e os personagens são absurdos.",
    "12",
    "98",
  ],
];

function ReviewCard({ review }) {
  return (
    <article className="review-card-vertical">
      <img
        className="review-card-thumb"
        src={`/assets/${review[0]}`}
        alt={`Capa de ${review[1]}`}
      />
      <div className="review-card-body">
        <h3 className="review-game-title">{review[1]}</h3>
        <div className="user-meta">
          <span className="avatar-circle" aria-hidden="true">
            {review[3]}
          </span>
          <span>
            <strong>{review[2]}</strong> · {review[5]}
          </span>
        </div>
        <div className="rating-badge" aria-label={`Nota ${review[4]} de 5`}>
          <Icon className="icon-star">star</Icon> {review[4]}
        </div>
        <p className="review-excerpt">{review[6]}</p>
        <div className="card-stats">
          <span aria-label={`${review[7]} comentários`}>
            <Icon>comment</Icon> {review[7]}
          </span>
          <span aria-label={`${review[8]} favoritos`}>
            <Icon className="icon-like">favorite</Icon> {review[8]}
          </span>
        </div>
      </div>
    </article>
  );
}

function Home() {
  return (
    <>
      <div className="content-col">
        <section
          className="hero-banner"
          aria-labelledby="featured-game-title"
          style={{ backgroundImage: "url('/assets/elden_ring_big.png')" }}
        >
          <div className="hero-content">
            <span className="hero-tag">Jogo em Destaque</span>
            <h1 id="featured-game-title" className="hero-title">
              Elden Ring
            </h1>
            <div
              className="rating-badge"
              aria-label="Nota 4.7 de 5, 328 mil avaliações"
            >
              <Icon className="icon-star">star</Icon> 4.7{" "}
              <span>(328k avaliações)</span>
            </div>
            <p className="hero-desc">
              Um vasto mundo aberto, repleto de mistérios, desafios épicos e uma
              história inesquecível nas Terras Intermédias.
            </p>
            <Link to="/avaliacoes" className="btn-primary">
              Ver avaliações <span aria-hidden="true">›</span>
            </Link>
          </div>
        </section>
        <section aria-labelledby="new-reviews-title">
          <div className="section-header">
            <h2 id="new-reviews-title" className="section-title">
              Novas avaliações
            </h2>
            <Link to="/avaliacoes" className="link-more">
              Ver todas →
            </Link>
          </div>
          <div className="reviews-grid-3">
            {reviews.map((review) => (
              <ReviewCard key={review[1]} review={review} />
            ))}
          </div>
        </section>
        <section aria-labelledby="featured-discussions-title">
          <div className="section-header">
            <h2 id="featured-discussions-title" className="section-title">
              Discussões em destaque
            </h2>
            <Link to="/comunidade" className="link-more">
              Ver todas →
            </Link>
          </div>
          <div className="discussion-list">
            {[
              [
                "Qual foi o último jogo que te fez sentir algo?",
                "A",
                "Comunidade",
                "",
                "142",
                "há 3h",
              ],
              [
                "O que acharam do novo trailer de GTA VI?",
                "L",
                "Notícias",
                "pink",
                "98",
                "há 5h",
              ],
              [
                "Indies que todo mundo deveria jogar",
                "P",
                "Indie",
                "green",
                "76",
                "há 7h",
              ],
              [
                "Vale a pena jogar no PC ou no console?",
                "M",
                "Discussão",
                "",
                "64",
                "há 9h",
              ],
            ].map(([title, initial, tag, color, replies, time]) => (
              <div className="discussion-row" key={title}>
                <div className="discussion-left">
                  <div className="avatar-circle md" aria-hidden="true">
                    {initial}
                  </div>
                  <div className="discussion-info">
                    <h4>{title}</h4>
                    <div className="user-meta">
                      <span className={`tag-badge ${color}`}>{tag}</span>
                      <span>
                        {replies} respostas · {time}
                      </span>
                    </div>
                  </div>
                </div>
                <span
                  className="reply-pill"
                  aria-label={`${replies} respostas`}
                >
                  {replies}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
      <aside className="right-panel" aria-label="Informações da comunidade">
        <div className="widget-card">
          <div className="section-header">
            <h2 className="section-title">Jogos mais bem avaliados</h2>
            <Link to="/explorar" className="link-more">
              Ver todos →
            </Link>
          </div>
          {[
            ["elden_ring.png", "Elden Ring", "4.7"],
            [
              "zelda_totk.png",
              "The Legend of Zelda: Tears of the Kingdom",
              "4.6",
            ],
            ["rdr2_icon.png", "Red Dead Redemption 2", "4.6"],
            ["bg3.png", "Baldur's Gate 3", "4.5"],
            ["gow_ragnarok.png", "God of War Ragnarok", "4.4"],
          ].map(([image, title, rating], index) => (
            <div className="ranked-item" key={title}>
              <span className="rank-num" aria-label={`Posição ${index + 1}`}>
                {index + 1}
              </span>
              <img
                className="rank-thumb"
                src={`/assets/${image}`}
                alt={`Capa de ${title}`}
              />
              <div className="rank-info">
                <div className="rank-title">{title}</div>
                <div
                  className="rating-badge"
                  aria-label={`Nota ${rating} de 5`}
                >
                  <Icon className="icon-star">star</Icon> {rating}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="widget-card">
          <h2 className="section-title">Atividade recente</h2>
          <div className="ranked-list">
            {[
              [
                "J",
                "julia comentou na sua avaliação de The Last of Us Part I",
                "há 1h",
              ],
              ["M", "mateus começou a seguir você", "há 2h"],
              [
                "C",
                'caio postou uma nova discussão: "Qual é o melhor final boss da história?"',
                "há 3h",
              ],
            ].map(([initial, text, time]) => (
              <div className="ranked-item" key={text}>
                <div className="avatar-circle md" aria-hidden="true">
                  {initial}
                </div>
                <div className="rank-info">
                  <p>{text}</p>
                  <span>{time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="widget-card">
          <h2 className="section-title">Tópicos em alta</h2>
          <div className="ranked-list">
            {[
              ["Zelda: Ocarina of Time", "12.4k posts"],
              ["GTA VI", "10.8k posts"],
              ["Nintendo Switch 2", "9.2k posts"],
              ["PS5", "8.7k posts"],
            ].map(([title, posts], index) => (
              <div className="ranked-item" key={title}>
                <span className="rank-num">{index + 1}</span>
                <div className="rank-info">
                  <div className="rank-title">{title}</div>
                  <span>{posts}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}

function PrototypePage({ title, description, children }) {
  return (
    <div className="route-content">
      {title ? (
        <section>
          <div className="section-header">
            <div>
              <h1 className="page-title">{title}</h1>
              <p className="hero-desc">{description}</p>
            </div>
            <Link to="/" className="link-more">
              Voltar ao início
            </Link>
          </div>
          {children}
        </section>
      ) : (
        children
      )}
    </div>
  );
}

function Explore() {
  const games = [
    ["bg3.png", "Baldur's Gate 3", "4.8", "12k"],
    ["spiderman.png", "Marvel's Spider-Man 2", "4.8", "12k"],
    ["zelda_totk_capa.png", "Tears of the Kingdom", "4.8", "12k"],
    ["alan_wake2.png", "Alan Wake 2", "4.8", "12k"],
    ["re4.png", "Resident Evil 4", "4.7", "9k"],
    ["cyberpunk.png", "Cyberpunk 2077", "4.8", "12k"],
  ];
  return (
    <PrototypePage title="" description="">
      <section className="explore-hero" aria-labelledby="explore-title">
        <span className="hero-tag">Explorar Novos Mundos</span>
        <h1 id="explore-title" className="hero-title">
          Explore o universo dos games
        </h1>
        <label className="explore-search-box" htmlFor="explore-search">
          <Icon>search</Icon>
          <input
            id="explore-search"
            type="search"
            placeholder="Buscar por gênero, plataforma, ano, desenvolvedora..."
            aria-label="Buscar por gênero, plataforma, ano ou desenvolvedora"
          />
        </label>
      </section>
      <div
        className="filter-pills filter-pills-centered"
        role="group"
        aria-label="Filtrar jogos"
      >
        {[
          "Populares",
          "Lançamentos",
          "Mais Avaliados",
          "Em Alta",
          "Recomendados para Você",
        ].map((filter, index) => (
          <button
            className={`pill-btn ${index === 0 ? "active" : ""}`}
            type="button"
            aria-pressed={index === 0}
            key={filter}
          >
            {filter}
          </button>
        ))}
      </div>
      <section aria-labelledby="trending-title">
        <div className="section-header">
          <h2 id="trending-title" className="section-title">
            Tendências da Semana
          </h2>
        </div>
        <div className="poster-grid-6">
          {games.map(([image, title, rating, comments]) => (
            <article className="poster-card" key={title}>
              <div className="poster-img-wrap">
                <img src={`/assets/${image}`} alt={`Capa de ${title}`} />
                <WishlistButton game={title} image={image} />
              </div>
              <div className="poster-meta">
                <div className="poster-title">{title}</div>
                <div className="poster-sub">
                  <span
                    className="rating-badge"
                    aria-label={`Nota ${rating} de 5`}
                  >
                    <Icon className="icon-star">star</Icon> {rating}
                  </span>
                  <span aria-label={`${comments} comentários`}>
                    <Icon>comment</Icon> {comments}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="explore-bottom">
        <div>
          <div className="section-header">
            <h2 className="section-title">Listas da Comunidade</h2>
          </div>
          <div className="reviews-grid-3">
            {[
              [
                "chrono_trigger.png",
                "Os Melhores RPGs de Turno",
                "C",
                "Criador · 36 respostas",
                "12k",
              ],
              [
                "games_to_cry_to.png",
                "Jogos para chorar",
                "R",
                "Ratna Norte",
                "232",
              ],
              [
                "dark_souls.png",
                "Os mais difíceis da história",
                "L",
                "Lunanccinera · 75 respostas",
                "410",
              ],
            ].map(([image, title, initial, user, likes]) => (
              <article className="review-card-vertical" key={title}>
                <img
                  className="review-card-thumb"
                  src={`/assets/${image}`}
                  alt={`Capa da lista ${title}`}
                />
                <div className="review-card-body">
                  <h3 className="review-game-title">{title}</h3>
                  <div className="user-meta">
                    <span className="avatar-circle" aria-hidden="true">
                      {initial}
                    </span>
                    <span>{user}</span>
                  </div>
                  <div className="card-stats">
                    <span aria-label={`${likes} favoritos`}>
                      <Icon className="icon-like">favorite</Icon> {likes}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <aside className="widget-card" aria-labelledby="genres-title">
          <h3 id="genres-title" className="section-title">
            Gêneros Populares
          </h3>
          <div className="genre-grid">
            {[
              ["Ação & Aventura", "acao", "swords"],
              ["RPG", "rpg", "layers"],
              ["Sobrevivência", "", "near_me"],
              ["Terror", "terror", "skull"],
              ["Indies", "", "videogame_asset"],
              ["Estratégia", "estrategia", "military_tech"],
            ].map(([genre, slug, icon]) =>
              slug ? (
                <Link
                  className="genre-tile"
                  to={`/categorias/${slug}`}
                  key={genre}
                >
                  <Icon>{icon}</Icon>
                  {genre}
                </Link>
              ) : (
                <span className="genre-tile" key={genre}>
                  <Icon>{icon}</Icon>
                  {genre}
                </span>
              ),
            )}
          </div>
        </aside>
      </section>
    </PrototypePage>
  );
}

function Reviews() {
  const recentReviews = [
    [
      "re4.png",
      "Resident Evil 4",
      "Arthur Silva",
      "A",
      "há 2 horas",
      "Um remake impecável que respeita o clássico original enquanto moderniza toda a tensão e o combate.",
      "182",
      "24",
      5,
    ],
    [
      "alan_wake2.png",
      "Alan Wake II",
      "lunaferreira",
      "L",
      "há 5 horas",
      "Direção de arte surreal e narrativa psicológica que prende do início ao fim.",
      "98",
      "12",
      4,
    ],
    [
      "hades.png",
      "Hades",
      "pedrozz",
      "P",
      "há 5 horas",
      "Viciante demais! A trilha sonora e a progressão narrativa a cada tentativa deixam tudo perfeito.",
      "42",
      "24",
      5,
    ],
    [
      "cyberpunk.png",
      "Cyberpunk 2077",
      "pedrozz",
      "P",
      "há 5 horas",
      "Night City hoje está irreconhecível de tão boa após a atualização 2.0 e Phantom Liberty.",
      "98",
      "12",
      4,
    ],
  ];
  return (
    <PrototypePage title="" description="">
      <div className="reviews-page">
        <div className="reviews-heading">
          <h1 className="page-title">Avaliações Recentes</h1>
          <Link
            to="/fazer-avaliacao"
            className="btn-primary review-write-button"
          >
            <Icon>add</Icon> Escrever Avaliação
          </Link>
        </div>
        <div
          className="filter-pills reviews-filters"
          role="group"
          aria-label="Filtrar avaliações"
        >
          {[
            "Mais Recentes",
            "Melhores Notas",
            "Críticas Populares",
            "Amigos",
            "Minhas Avaliações",
          ].map((filter, index) => (
            <button
              className={`pill-btn ${index === 0 ? "active" : ""}`}
              type="button"
              aria-pressed={index === 0}
              key={filter}
            >
              {filter}
            </button>
          ))}
          <Link to="/rascunhos" className="pill-btn drafts-pill">
            📝 Rascunhos
          </Link>
        </div>
        <div className="review-feed">
          {recentReviews.map(
            ([
              image,
              title,
              user,
              initial,
              time,
              text,
              likes,
              comments,
              rating,
            ]) => (
              <article className="review-card-horizontal" key={title}>
                <img
                  className="review-poster-sm"
                  src={`/assets/${image}`}
                  alt={title}
                />
                <div className="review-h-body">
                  <div>
                    <h2 className="review-game-title">{title}</h2>
                    <div
                      className="star-row"
                      aria-label={`Nota ${rating} de 5`}
                    >
                      {[0, 1, 2, 3, 4].map((star) => (
                        <Icon
                          className={`icon-star ${star < rating ? "" : "star-dim"}`}
                          key={star}
                        >
                          star
                        </Icon>
                      ))}
                    </div>
                    <div className="user-meta">
                      <span className="avatar-circle" aria-hidden="true">
                        {initial}
                      </span>
                      <span>
                        <strong>{user}</strong> · {time}
                      </span>
                    </div>
                    <p className="review-excerpt">{text}</p>
                  </div>
                  <div className="card-stats card-stats-end">
                    <span
                      className="stat-like"
                      aria-label={`${likes} favoritos`}
                    >
                      <Icon className="icon-like">favorite</Icon> {likes}
                    </span>
                    <span aria-label={`${comments} comentários`}>
                      <Icon>comment</Icon> {comments}
                    </span>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
      <aside className="right-panel reviews-sidebar">
        <div className="widget-card">
          <h2 className="section-title">Jogos Mais Avaliados</h2>
          <div className="ranked-list">
            {[
              ["elden_ring.png", "Elden Ring", "328k avaliações"],
              ["bg3.png", "Baldur's Gate 3", "110k avaliações"],
              ["tlou.png", "The Last of Us Part I", "95k avaliações"],
            ].map(([image, title, count]) => (
              <div className="ranked-item" key={title}>
                <img
                  className="rank-thumb"
                  src={`/assets/${image}`}
                  alt={title}
                />
                <div className="rank-info">
                  <div className="rank-title">{title}</div>
                  <span>{count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="widget-card">
          <h2 className="section-title">Críticos em Destaque</h2>
          <div className="ranked-list">
            {[
              ["A", "arthur.silva", "25 avaliações"],
              ["L", "lunaferreira", "19 avaliações"],
              ["P", "pedrozz", "18 avaliações"],
            ].map(([initial, user, count]) => (
              <div className="ranked-item" key={user}>
                <div className="avatar-circle md" aria-hidden="true">
                  {initial}
                </div>
                <div className="rank-info">
                  <div className="rank-title">{user}</div>
                  <span>{count}</span>
                </div>
                <button className="btn-follow" type="button">
                  + Seguir
                </button>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </PrototypePage>
  );
}

function Community() {
  const discussions = [
    [
      "Qual foi o último jogo que te fez sentir algo?",
      "Arthur Silva",
      "A",
      "Discussão",
      "pink",
      "Novidades",
      "",
      "142 respostas",
      "há 2 horas",
    ],
    [
      "O que acharam do novo trailer de GTA VI?",
      "lunaferreira",
      "L",
      "Novidades",
      "",
      "Indies",
      "orange",
      "98 respostas",
      "há 5 horas",
    ],
    [
      "Qual boss de Elden Ring te deu mais trabalho?",
      "pedrozz",
      "P",
      "Discussão",
      "pink",
      "Indies",
      "green",
      "15 respostas",
      "há 5 horas",
    ],
    [
      "Desafio de Platina do Mês",
      "pedrozz",
      "P",
      "Desafio",
      "orange",
      "",
      "",
      "15 respostas",
      "há 5 horas",
    ],
  ];
  return (
    <PrototypePage title="" description="">
      <div className="community-page">
        <h1 className="page-title">Comunidade</h1>
        <div
          className="filter-pills community-filters"
          role="group"
          aria-label="Filtrar comunidade"
        >
          {[
            "Discussões Populares",
            "Mais Ativos",
            "Grupos",
            "Resenhas da Galera",
            "Novidades",
          ].map((filter, index) => (
            <button
              className={`pill-btn ${index === 0 ? "active" : ""}`}
              type="button"
              aria-pressed={index === 0}
              key={filter}
            >
              {filter}
            </button>
          ))}
        </div>
        <section>
          <div className="section-header">
            <h2 className="section-title">Fóruns &amp; Discussões Ativas</h2>
          </div>
          <div className="discussion-list">
            {discussions.map(
              ([
                title,
                user,
                initial,
                tag,
                color,
                secondTag,
                secondColor,
                replies,
                time,
              ]) => (
                <article className="discussion-row" key={title}>
                  <div className="discussion-left">
                    <div className="discussion-info">
                      <h3>{title}</h3>
                      <div className="discussion-tags">
                        <span className={`tag-badge ${color}`}>{tag}</span>
                        {secondTag && (
                          <span className={`tag-badge ${secondColor}`}>
                            {secondTag}
                          </span>
                        )}
                      </div>
                      <div className="user-meta">
                        <span className="avatar-circle" aria-hidden="true">
                          {initial}
                        </span>
                        <span>
                          <strong>{user}</strong> · {time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="reply-pill">{replies}</span>
                </article>
              ),
            )}
          </div>
        </section>
      </div>
      <aside className="right-panel community-sidebar">
        <div className="widget-card">
          <h2 className="section-title">Usuários Mais Ativos esta semana</h2>
          <div className="ranked-list">
            {[
              ["A", "Arthur Silva", "25 posts"],
              ["L", "Lunaferreira", "32 avaliações"],
              ["L", "Luma Risa", "19 avaliações"],
            ].map(([initial, user, count]) => (
              <div className="ranked-item" key={user}>
                <div className="avatar-circle md" aria-hidden="true">
                  {initial}
                </div>
                <div className="rank-info">
                  <div className="rank-title">{user}</div>
                  <span>{count}</span>
                </div>
                <button className="btn-follow" type="button">
                  + Seguir
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="widget-card">
          <h2 className="section-title">Eventos da Comunidade</h2>
          <div className="ranked-list">
            {[
              [
                "hollow_knight_icon.png",
                "Clube do Jogo: Hollow Knight",
                "20 membros",
              ],
              ["rpg_mesa.png", "RPG de Mesa Online", "20 membros"],
              ["speedrun.png", "Speedrunners BR", "10 membros"],
            ].map(([image, title, count]) => (
              <div className="ranked-item" key={title}>
                <img
                  className="rank-thumb"
                  src={`/assets/${image}`}
                  alt={title}
                />
                <div className="rank-info">
                  <div className="rank-title">{title}</div>
                  <span>{count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </PrototypePage>
  );
}

function Profile() {
  const favorites = [
    ["zelda_totk_capa.png", "Zelda Tears of the Kingdom"],
    ["alan_wake2.png", "Alan Wake 2"],
    ["bg3.png", "Baldur's Gate 3"],
    ["cyberpunk.png", "Cyberpunk 2077"],
    ["outer_wilds.png", "Outer Wilds"],
  ];
  const activities = [
    [
      "rdr2_capa.png",
      "Red Dead Redemption 2",
      "Simplesmente uma obra-prima. A história, os personagens e o mundo aberto são incríveis. É um jogo que fica com você por muito tempo depois que termina.",
      "24",
      "132",
      5,
    ],
    [
      "hades.png",
      "Hades",
      "A trilha sonora e a jogabilidade são impecáveis. A narrativa se integra perfeitamente à mecânica de morrer e tentar de novo. Um dos melhores roguelikes que já joguei.",
      "45",
      "8",
      4,
    ],
  ];
  return (
    <PrototypePage title="" description="">
      <section className="profile-banner">
        <div className="profile-identity">
          <div className="profile-avatar-xl">
            <Icon>person</Icon>
          </div>
          <div className="profile-bio">
            <h1>Luis Inacio</h1>
            <div className="profile-handle">@lula13</div>
            <p className="profile-desc">
              Apaixonado por RPGs, mundos abertos e narrativas marcantes.{" "}
              <Icon>videogame_asset</Icon>
            </p>
          </div>
        </div>
        <div className="profile-right">
          <div className="profile-Counters">
            {[
              ["84", "Jogos"],
              ["125", "Avaliações"],
              ["320", "Seguidores"],
              ["190", "Seguindo"],
            ].map(([number, label]) => (
              <div className="counter-box" key={label}>
                <span className="counter-num">{number}</span>
                <span className="counter-label">{label}</span>
              </div>
            ))}
          </div>
          <Link to="/editar-perfil" className="btn-follow">
            Editar perfil
          </Link>
        </div>
      </section>
      <section>
        <div className="section-header">
          <h2 className="section-title">Jogos Favoritos</h2>
        </div>
        <div className="poster-grid-5">
          {favorites.map(([image, title], index) => (
            <article className="poster-card" key={title}>
              <div className="poster-img-wrap">
                <img src={`/assets/${image}`} alt={title} />
                <WishlistButton game={title} image={image} />
              </div>
              <div className="poster-meta">
                <div className="star-row">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Icon
                      className={`icon-star ${star === 4 && index === 3 ? "star-dim" : ""}`}
                      key={star}
                    >
                      star
                    </Icon>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <WishlistSection />
      <section className="profile-bottom">
        <div>
          <div className="section-header">
            <h2 className="section-title">
              Atividade recente / Últimas avaliações
            </h2>
          </div>
          <div className="review-feed">
            {activities.map(([image, title, text, likes, comments, rating]) => (
              <article className="review-card-horizontal" key={title}>
                <img
                  className="review-poster-sm"
                  src={`/assets/${image}`}
                  alt={title}
                />
                <div className="review-h-body">
                  <div>
                    <h3 className="review-game-title">{title}</h3>
                    <div
                      className="star-row"
                      aria-label={`Nota ${rating} de 5`}
                    >
                      {[0, 1, 2, 3, 4].map((star) => (
                        <Icon
                          className={`icon-star ${star < rating ? "" : "star-dim"}`}
                          key={star}
                        >
                          star
                        </Icon>
                      ))}
                    </div>
                    <p className="review-excerpt">{text}</p>
                  </div>
                  <div className="card-stats">
                    <span>
                      <Icon className="icon-like">favorite</Icon> {likes}
                    </span>
                    <span>
                      <Icon>comment</Icon> {comments}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <aside className="right-panel">
          <div className="widget-card">
            <h3 className="section-title">Estatísticas de avaliação</h3>
            <div className="rating-bars">
              {[72, 88, 38, 18, 8].map((width, index) => (
                <div className="bar-row" key={width}>
                  <span>
                    {5 - index} <Icon className="icon-star">star</Icon>
                  </span>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: `${width}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="widget-card">
            <h3 className="section-title">Jogando Atualmente</h3>
            <div className="currently-playing">
              <img src="/assets/gow_ragnarok.png" alt="God of War Ragnarok" />
              <img src="/assets/elden_ring.png" alt="Elden Ring" />
              <img src="/assets/re4.png" alt="Resident Evil 4" />
            </div>
          </div>
        </aside>
      </section>
    </PrototypePage>
  );
}

function Category() {
  const { category } = useParams();
  const categories = {
    acao: {
      title: "Ação",
      description:
        "Títulos eletrizantes focados em reflexo rápido, combate intenso e muita adrenalina.",
      icon: "swords",
      games: [
        ["re4.png", "Resident Evil 4", "4.7"],
        ["spiderman.png", "Marvel's Spider-Man 2", "4.8"],
        ["cyberpunk.png", "Cyberpunk 2077", "4.8"],
        ["alan_wake2.png", "Alan Wake 2", "4.8"],
        ["tlou.png", "The Last of Us", "4.9"],
        ["uncharted.png", "Uncharted", "4.7"],
        ["mortalKombat.jpg", "Mortal Kombat", "4.8"],
        ["doom.jpg", "Doom", "4.9"],
      ],
      communities: [
        ["re4.png", "Clube de Ação", "1.4k membros"],
        ["spiderman.png", "Fãs de Hack and Slash", "850 membros"],
      ],
    },
    rpg: {
      title: "RPG",
      description:
        "Mundos abertos imersivos, evolução complexa de personagens e narrativas épicas.",
      icon: "layers",
      games: [
        ["elden_ring.png", "Elden Ring", "4.9"],
        ["bg3.png", "Baldur's Gate 3", "4.8"],
        ["chrono_trigger.png", "Chrono Trigger", "4.9"],
        ["dark_souls.png", "Dark Souls", "4.7"],
        ["thewitcher.jpg", "The Witcher", "4.8"],
        ["diablo.jpg", "Diablo", "4.7"],
        ["pathofexile.jpg", "Path of Exile", "4.6"],
        ["octopathtraveler.jpg", "Octopath Traveler", "4.7"],
        ["rdr2_capa.png", "Red Dead Redemption", "4.9"],
        ["leagueoflegends.jpg", "League of Legends", "4.5"],
      ],
      communities: [
        ["elden_ring.png", "Mestres do RPG", "2.1k membros"],
        ["rpg_mesa.png", "RPG de Mesa & Turnos", "950 membros"],
      ],
    },
    aventura: {
      title: "Aventura",
      description:
        "Jornadas inesquecíveis, grandes descobertas e exploração de mundos fascinantes.",
      icon: "near_me",
      games: [
        ["zelda_totk_capa.png", "Tears of the Kingdom", "4.8"],
        ["gow_ragnarok.png", "God of War Ragnarök", "4.9"],
        ["outer_wilds.png", "Outer Wilds", "4.8"],
        ["hades.png", "Hades", "4.8"],
        ["lifeisstrange.jpg", "Life is Strange", "4.8"],
        ["tombraider.jpg", "Tomb Raider", "4.8"],
        ["minecraft.jpg", "Minecraft", "4.9"],
      ],
      communities: [
        ["zelda_totk_capa.png", "Exploradores de Hyrule", "3.2k membros"],
        ["outer_wilds.png", "Viajantes do Espaço", "1.1k membros"],
      ],
    },
    terror: {
      title: "Terror",
      description:
        "Experiências tensas de sobrevivência, suspense psicológico e muita atmosfera sombria.",
      icon: "skull",
      games: [
        ["alan_wake2.png", "Alan Wake 2", "4.8"],
        ["re4.png", "Resident Evil 4", "4.7"],
        ["tlou.png", "The Last of Us", "4.9"],
        ["fivenightatfreddys.jpg", "Five Nights at Freddy's", "4.6"],
        ["fivenightsecretofthemimic.jpg", "FNAF: Secret of the Mimic", "4.7"],
        ["innightmare.jpg", "In Nightmare", "4.5"],
        ["silenthill2.jpg", "Silent Hill 2", "4.9"],
        ["theoutlasttrials.jpg", "The Outlast Trials", "4.8"],
      ],
      communities: [
        ["alan_wake2.png", "Sobreviventes do Terror", "1.8k membros"],
      ],
    },
    estrategia: {
      title: "Estratégia",
      description:
        "Planejamento tático profundo, gerenciamento de recursos e decisões cruciais.",
      icon: "military_tech",
      games: [
        ["bg3.png", "Baldur's Gate 3", "4.8"],
        ["leagueoflegends.jpg", "League of Legends", "4.5"],
        ["valorant.jpg", "Valorant", "4.6"],
        ["total war warhammer.jpg", "Total War: Warhammer", "4.8"],
        ["sidmeiers.jpg", "Civilization VII", "4.9"],
        ["frostpunk2.jpg", "Frostpunk 2", "4.7"],
      ],
      communities: [["bg3.png", "Estrategistas Táticos", "1.2k membros"]],
    },
  };
  const data = categories[category] || categories.acao;
  return (
    <PrototypePage title="" description="">
      <section className="category-header" aria-labelledby="category-title">
        <div className="category-heading">
          <div className="category-icon">
            <Icon>{data.icon}</Icon>
          </div>
          <h1
            id="category-title"
            className="page-title"
          >{`Jogos de ${data.title}`}</h1>
        </div>
        <p>{data.description}</p>
      </section>
      <section aria-labelledby="category-games-title">
        <h2 id="category-games-title" className="sr-only">
          Jogos de {data.title}
        </h2>
        <div className="poster-grid-6 category-games">
          {data.games.map(([image, name, rating]) => (
            <article className="poster-card" key={name}>
              <div className="poster-img-wrap">
                <img src={`/assets/${image}`} alt={name} />
                <WishlistButton game={name} image={image} />
              </div>
              <div className="poster-meta">
                <div className="poster-title">{name}</div>
                <div className="poster-sub">
                  <span
                    className="rating-badge"
                    aria-label={`Nota ${rating} de 5`}
                  >
                    <Icon className="icon-star">star</Icon> {rating}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section
        className="category-communities"
        aria-labelledby="communities-title"
      >
        <h2 id="communities-title" className="section-title">
          Comunidades do Gênero
        </h2>
        <div className="poster-grid-6">
          {data.communities.map(([image, name, members]) => (
            <article className="poster-card community-card" key={name}>
              <img src={`/assets/${image}`} alt="" />
              <div>
                <h3>{name}</h3>
                <p>{members}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PrototypePage>
  );
}

function Drafts() {
  return (
    <PrototypePage title="" description="">
      <section className="drafts-page">
        <div className="drafts-heading">
          <div>
            <div className="drafts-heading-row">
              <span className="drafts-emoji" aria-hidden="true">
                📌
              </span>
              <h1 className="drafts-title">Meus Rascunhos</h1>
            </div>
            <p className="drafts-heading-sub">
              Continue editando suas avaliações salvas anteriormente.
            </p>
          </div>
          <Link to="/fazer-avaliacao" className="drafts-new-button">
            + Nova Avaliação
          </Link>
        </div>
        <div className="drafts-grid">
          <article className="draft-item">
            <div className="draft-item-thumb">
              <img src="/assets/tlou.png" alt="The Last of Us Part I" />
              <span className="draft-item-badge">Rascunho</span>
            </div>
            <div className="draft-item-body">
              <h3>The Last of Us Part I</h3>
              <Link to="/fazer-avaliacao" className="draft-item-button">
                Continuar Editando
              </Link>
            </div>
          </article>
        </div>
      </section>
    </PrototypePage>
  );
}

function SimpleRoute({ title }) {
  if (title === "Configurações") {
    return (
      <PrototypePage title="" description="">
        <section className="simple-page">
          <Link to="/" className="link-more">
            ← Voltar ao Início
          </Link>
          <div className="widget-card simple-card">
            <h1 className="page-title">Configurações</h1>
            <p className="simple-description">
              Gerencie suas preferências de conta, tema e notificações do
              Checkpoint.
            </p>
            <div className="settings-list">
              <div className="settings-row">
                <div>
                  <strong>Modo Escuro</strong>
                  <p>Ativado por padrão no sistema</p>
                </div>
                <button
                  className="pill-btn active"
                  type="button"
                  aria-pressed="true"
                >
                  Ligado
                </button>
              </div>
              <div className="settings-row">
                <div>
                  <strong>Notificações por Email</strong>
                  <p>Receber avisos de novos seguidores e comentários</p>
                </div>
                <button className="pill-btn" type="button" aria-pressed="false">
                  Ativar
                </button>
              </div>
            </div>
          </div>
        </section>
      </PrototypePage>
    );
  }
  return (
    <PrototypePage title="" description="">
      <section className="simple-page">
        <Link to="/" className="link-more">
          ← Voltar ao Início
        </Link>
        <div className="widget-card simple-card">
          <h1 className="page-title">Ajuda &amp; Suporte</h1>
          <p className="simple-description">
            Precisa de Ajuda? Confira as perguntas frequentes ou entre em
            contato conosco.
          </p>
          <div className="support-list">
            <article>
              <h2>Como publicar uma avaliação?</h2>
              <p>
                Vá até a aba Avaliações e clique no botão superior "Escrever
                Avaliação".
              </p>
            </article>
            <article>
              <h2>Contato Direto</h2>
              <p>
                Envie um e-mail para nossa equipe em:{" "}
                <strong>suporte@checkpoint.app</strong>
              </p>
            </article>
          </div>
        </div>
      </section>
    </PrototypePage>
  );
}

function EditProfile() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/perfil", { replace: true });
    showToast("Alterações salvas com sucesso!");
  };
  return (
    <PrototypePage title="" description="">
      <section className="edit-profile-page">
        <div className="category-header edit-profile-header">
          <div className="category-heading">
            <div className="category-icon">
              <Icon>edit</Icon>
            </div>
            <h1 className="page-title">Editar Perfil</h1>
          </div>
          <p>Personalize suas informações públicas e detalhes da conta.</p>
        </div>
        <div className="edit-profile-card">
          <div className="profile-photo-row">
            <div className="profile-photo">
              <Icon>person</Icon>
            </div>
            <div>
              <h2>Sua Foto de Perfil</h2>
              <p>Formatos aceitos: PNG, JPG ou GIF (máx. 2MB).</p>
              <button className="change-photo" type="button">
                Alterar Foto
              </button>
            </div>
          </div>
          <form className="profile-form" onSubmit={handleSubmit}>
            <label htmlFor="display-name">Nome de Exibição</label>
            <input
              id="display-name"
              type="text"
              defaultValue="Luis Inacio"
              required
            />
            <label htmlFor="username">Nome de Usuário (@)</label>
            <input id="username" type="text" defaultValue="@lula13" required />
            <label htmlFor="bio">Biografia</label>
            <textarea
              id="bio"
              rows="4"
              defaultValue="Apaixonado por RPGs, mundos abertos e narrativas marcantes."
            />
            <label htmlFor="platform">Plataforma Principal</label>
            <select id="platform" defaultValue="ps5">
              <option value="pc">PC / Steam</option>
              <option value="ps5">PlayStation 5</option>
              <option value="xbox">Xbox Series X</option>
              <option value="switch">Nintendo Switch</option>
            </select>
            <div className="profile-form-actions">
              <Link to="/perfil" className="cancel-button">
                Cancelar
              </Link>
              <button className="save-button" type="submit">
                Salvar Alterações
              </button>
            </div>
          </form>
        </div>
      </section>
    </PrototypePage>
  );
}

function WriteReview() {
  const [rating, setRating] = useState(4);
  const [recommended, setRecommended] = useState(true);
  const [spoiler, setSpoiler] = useState(false);
  const navigate = useNavigate();
  const { showToast } = useToast();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/avaliacoes", { replace: true });
    showToast("Avaliação publicada com sucesso!");
  };
  return (
    <PrototypePage title="" description="">
      <section className="write-review-page">
        <div className="review-game-header">
          <img src="/assets/tlou.png" alt="Capa de The Last of Us Part I" />
          <div>
            <span>Avaliando Agora</span>
            <h1>The Last of Us Part I</h1>
            <p>Naughty Dog • 2022 • Ação / Aventura</p>
          </div>
        </div>
        <div className="write-review-grid">
          <form className="review-form-card" onSubmit={handleSubmit}>
            <div className="review-rating">
              <span>Sua Avaliação</span>
              <div role="radiogroup" aria-label="Escolha uma nota de 1 a 5">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    className={value <= rating ? "" : "star-dim"}
                    type="button"
                    role="radio"
                    aria-checked={rating === value}
                    aria-label={`${value} estrelas`}
                    key={value}
                    onClick={() => setRating(value)}
                  >
                    <Icon className="icon-star">star</Icon>
                  </button>
                ))}
              </div>
            </div>
            <label htmlFor="review-title">
              Título da avaliação <small>(Opcional)</small>
            </label>
            <input
              id="review-title"
              type="text"
              placeholder="Ex: Sensacional"
            />
            <label htmlFor="review-text">Sua avaliação</label>
            <textarea
              id="review-text"
              rows="6"
              placeholder="Conte o que você achou do jogo..."
            />
            <label>
              Adicionar mídia <small>(Opcional)</small>
            </label>
            <button className="media-upload" type="button">
              <Icon>cloud_upload</Icon>
              <span>Clique para enviar imagens</span>
            </button>
            <label>
              Tags <small>(Opcional)</small>
            </label>
            <div className="review-tags">
              <span>
                Ação{" "}
                <button type="button" aria-label="Remover tag Ação">
                  ×
                </button>
              </span>
              <span>
                Naughty Dog{" "}
                <button type="button" aria-label="Remover tag Naughty Dog">
                  ×
                </button>
              </span>
              <button className="add-tag" type="button">
                + Adicionar tag
              </button>
            </div>
            <div className="review-options">
              <div>
                <span>Recomenda este jogo?</span>
                <div>
                  <button
                    className={recommended ? "selected" : ""}
                    type="button"
                    onClick={() => setRecommended(true)}
                  >
                    Sim
                  </button>
                  <button
                    className={!recommended ? "selected" : ""}
                    type="button"
                    onClick={() => setRecommended(false)}
                  >
                    Não
                  </button>
                </div>
              </div>
              <label className="spoiler-option" htmlFor="spoiler">
                <span>Contém spoiler?</span>
                <input
                  id="spoiler"
                  type="checkbox"
                  checked={spoiler}
                  onChange={(event) => setSpoiler(event.target.checked)}
                />
              </label>
              {spoiler && (
                <p className="spoiler-warning" role="status">
                  <Icon>visibility_off</Icon>
                  <span>
                    <span className="spoiler-warning-label">
                      Spoiler sinalizado
                    </span>
                    Leitores precisarão revelar o texto para ler esta avaliação.
                  </span>
                </p>
              )}
              <label htmlFor="play-status">
                Status da jogatina
                <select id="play-status" defaultValue="finalizado">
                  <option value="finalizado">Finalizado</option>
                  <option value="jogando">Jogando</option>
                  <option value="abandonado">Abandonado</option>
                  <option value="quero">Quero jogar</option>
                </select>
              </label>
            </div>
            <div className="review-form-actions">
              <Link to="/rascunhos" className="draft-button">
                Rascunhos
              </Link>
              <button className="publish-button" type="submit">
                Publicar
              </button>
            </div>
          </form>
          <aside className="review-tips">
            <h2>💡 Dicas para uma boa avaliação</h2>
            {[
              ["Seja sincero", "Compartilhe sua experiência genuína."],
              [
                "Sinalize spoilers",
                "Proteja outros jogadores marcando a opção.",
              ],
              ["O que marcou", "Destaque trilha, gameplay ou história."],
              ["Use tags", "Facilite a busca por outras pessoas."],
              ["Mídias", "Ilustre com capturas marcantes do jogo."],
              ["Respeito", "Mantenha um ambiente saudável na comunidade."],
            ].map(([title, text]) => (
              <p key={title}>
                <strong>✓</strong>
                <span>
                  <b>{title}:</b> {text}
                </span>
              </p>
            ))}
          </aside>
        </div>
      </section>
    </PrototypePage>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <WishlistProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explorar" element={<Explore />} />
            <Route path="/avaliacoes" element={<Reviews />} />
            <Route path="/comunidade" element={<Community />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/categorias/:category" element={<Category />} />
            <Route
              path="/configuracoes"
              element={
                <SimpleRoute
                  title="Configurações"
                  description="Ajuste suas preferências."
                />
              }
            />
            <Route
              path="/suporte"
              element={
                <SimpleRoute
                  title="Suporte"
                  description="Encontre ajuda para usar o Checkpoint."
                />
              }
            />
            <Route path="/fazer-avaliacao" element={<WriteReview />} />
            <Route path="/editar-perfil" element={<EditProfile />} />
            <Route path="/rascunhos" element={<Drafts />} />
          </Routes>
        </Layout>
      </WishlistProvider>
    </ToastProvider>
  );
}
