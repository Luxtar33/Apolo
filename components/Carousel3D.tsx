import React from "react";
import styled from "styled-components";

interface CarouselItem {
  content: React.ReactNode;
  color: string; // "255, 193, 7"
}

interface Carousel3DProps {
  items: CarouselItem[];
}

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1200px;
  overflow: visible;

  .wrapper {
    overflow: visible;
    position: relative;
    width: 100%;
    max-width: 820px;
    min-height: 300px;
    padding: 40px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .inner {
    --w: clamp(150px, 30vw, 230px);
    --h: clamp(210px, 40vw, 300px);
    --translateZ: calc((var(--w) + var(--h)) / 2);
    --rotateX: -12deg;

    position: absolute;
    width: var(--w);
    height: var(--h);
    transform-style: preserve-3d;
    animation: spin 18s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotateX(var(--rotateX)) rotateY(0deg);
    }
    to {
      transform: rotateX(var(--rotateX)) rotateY(360deg);
    }
  }

  .card {
    position: absolute;
    inset: 0;
    transform-style: preserve-3d;
    transform:
      rotateY(calc((360deg / var(--quantity)) * var(--index)))
      translateZ(var(--translateZ));
  }

  /* ---------- PREMIUM CARD ---------- */
  /* ---------- PREMIUM CARD (NARANJA + BLANCO FRÍO) ---------- */
/* ---------- PREMIUM CARD (NARANJA + CIAN) ---------- */

/* ---------- PREMIUM CARD (NARANJA + NEGRO FRÍO) ---------- */
.card_box {
  width: 100%;
  height: 100%;
  border-radius: 22px;
  position: relative;
  overflow: visible;
  z-index: 2;

  /* cristal oscuro frío */
  background:
    linear-gradient(
      135deg,
      rgba(25,25,30,0.85),
      rgba(10,10,14,0.65)
    );
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  border: 1px solid rgba(255,165,0,0.45);

  box-shadow:
    0 25px 60px rgba(0,0,0,0.75),
    0 0 35px rgba(255,165,0,0.45),
    0 0 110px rgba(255,165,0,0.25);

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.45s ease;
}

/* halo energético */
.card_box::before {
  content: "";
  position: absolute;
  inset: 2px;
  border-radius: inherit;
  background: linear-gradient(
    120deg,
    rgba(255,165,0,0.85),
    rgba(0,0,0,0.9),
    rgba(255,165,0,0.85)
  );
  opacity: 0.35;
  z-index: -1;
  filter: blur(12px);
}

/* reflejo cristal */
.card_box::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    115deg,
    transparent 20%,
    rgba(255,255,255,0.18) 45%,
    transparent 65%
  );
  opacity: 0.5;
  pointer-events: none;
}

/* hover */
.card_box:hover {
  transform: scale(0.95);
  box-shadow:
    0 35px 90px rgba(0,0,0,0.9),
    0 0 70px rgba(255,165,0,0.7),
    0 0 180px rgba(255,165,0,0.35);
}

/* sombra flotante */
.card::after {
  content: "";
  position: absolute;
  inset: 30% 12%;
  background: radial-gradient(
    ellipse at center,
    rgba(0,0,0,0.85),
    transparent 70%
  );
  transform: translateZ(-40px);
  filter: blur(22px);
}

/* glow interno */
.card_box .content::before {
  content: "";
  position: absolute;
  inset: -35%;
  background: radial-gradient(
    circle,
    rgba(255,165,0,0.35),
    transparent 70%
  );
  z-index: -2;
  filter: blur(50px);
}


  /* ---------- RIBBON ---------- */
  .card_box span {
    position: absolute;
    overflow: hidden;
    z-index: 20;
    width: 140px;
    height: 140px;
    top: -10px;
    left: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card_box span::before {
    content: "Premium";
    position: absolute;
    z-index: 21;
    width: 150%;
    height: 36px;
    background-image: linear-gradient(
      45deg,
      #ff6547 0%,
      #ffb144 51%,
      #ff7053 100%
    );
    transform: rotate(-45deg) translateY(-18px);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.35);
  }

  .card_box span::after {
    content: "";
    position: absolute;
    width: 10px;
    z-index: 19;
    bottom: 0;
    left: 0;
    height: 10px;
    box-shadow: 130px -130px #cc3f47;
    background-image: linear-gradient(
      45deg,
      #ff512f 0%,
      #f09819 51%,
      #ff512f 100%
    );
  }

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Mobile ajustes */
  @media (max-width: 480px) {
    .wrapper {
      min-height: 260px;
      padding: 20px 0;
    }
  }
`;

const Carousel3D: React.FC<Carousel3DProps> = ({ items }) => {
  return (
    <StyledWrapper>
      <div className="wrapper">
        <div
          className="inner"
          style={{ "--quantity": items.length } as React.CSSProperties}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="card"
              style={
                {
                  "--index": i,
                } as React.CSSProperties
              }
            >
              <div className="card_box">
                <span />
                <div className="content">{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Carousel3D;
