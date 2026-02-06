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
  min-height: 350px;
  perspective: 1200px;
  overflow: hidden;

  .wrapper {
    position: relative;
    width: 100%;
    max-width: 800px;
    min-height: 420px;
    padding: 60px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .inner {
    --w: 200px;
    --h: 250px;
    --translateZ: calc((var(--w) + var(--h)) / 1.8);
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

  /* ---------- CARD 3D SLOT ---------- */
  .card {
    position: absolute;
    inset: 0;
    transform-style: preserve-3d;
    transform:
      rotateY(calc((360deg / var(--quantity)) * var(--index)))
      translateZ(var(--translateZ));
  }

  /* ---------- PREMIUM CARD ---------- */
  .card_box {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: linear-gradient(
      170deg,
      rgba(58, 56, 56, 0.7) 0%,
      rgb(20, 20, 20) 100%
    );
    position: relative;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.55);
    cursor: pointer;
    transition: all 0.35s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card_box:hover {
    transform: scale(0.92);
  }

  /* ---------- RIBBON ---------- */
  .card_box span {
    position: absolute;
    overflow: hidden;
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
    bottom: 0;
    left: 0;
    height: 10px;
    z-index: -1;
    box-shadow: 130px -130px #cc3f47;
    background-image: linear-gradient(
      45deg,
      #ff512f 0%,
      #f09819 51%,
      #ff512f 100%
    );
  }

  .content {
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    z-index: 2;
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
