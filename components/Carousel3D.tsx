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
     height: auto;
    min-height: 420px;
    padding: 60px 0;
    overflow: visible;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .inner {
    --w: 200px;
    --h: 280px;
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

  .card {
    position: absolute;
    inset: 0;
    border-radius: 18px;
    padding: 10px;
    background: linear-gradient(
      145deg,
      rgba(var(--color-card), 0.35),
      rgba(20, 20, 20, 0.5)
    );
    backdrop-filter: blur(12px);
    border: 1px solid rgba(var(--color-card), 0.5);
    box-shadow:
      0 15px 40px rgba(0, 0, 0, 0.5),
      0 0 40px rgba(var(--color-card), 0.25),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: visible;
    filter: brightness(0.85);
    opacity: 0.95;

    transform:
      rotateY(calc((360deg / var(--quantity)) * var(--index)))
      translateZ(var(--translateZ));

    transition:
      transform 0.4s ease,
      filter 0.4s ease,
      opacity 0.4s ease;
  }

  .card:hover {
    transform:
      rotateY(calc((360deg / var(--quantity)) * var(--index)))
      translateZ(calc(var(--translateZ) + 80px));
    filter: brightness(1.3);
    opacity: 1;
    box-shadow:
      0 20px 50px rgba(0, 0, 0, 0.6),
      0 0 60px rgba(var(--color-card), 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.25);
  }

  .img {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
  }
    @media (max-width: 1024px) {
  .inner {
    --w: 160px;
    --h: 230px;
    --translateZ: calc((var(--w) + var(--h)) / 1.6);
  }
}

@media (max-width: 768px) {
  .inner {
    --w: 130px;
    --h: 190px;
    --translateZ: calc((var(--w) + var(--h)) / 1.4);
    --rotateX: -8deg;
  }

  .wrapper {
    height: 300px;
  }
}

@media (max-width: 480px) {
  .inner {
    --w: clamp(110px, 18vw, 200px);
    --h: clamp(160px, 28vw, 280px);
    --translateZ: calc((var(--w) + var(--h)) / 1.2);
    --rotateX: -5deg;
  }

  .wrapper {
    height: 260px;
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
                  "--color-card": item.color,
                } as React.CSSProperties
              }
            >
              <div className="img">{item.content}</div>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Carousel3D;
