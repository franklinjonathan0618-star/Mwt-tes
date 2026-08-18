"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Member {
  image: string;
  text: string;
}

export default function TimManajemen({
  items,
  bend,
  textColor,
  scrollSpeed,
  gap,
  font
}: {
  items: Member[];
  bend?: number;
  textColor?: string;
  scrollSpeed?: number;
  gap?: number;
  font?: string;
}) {
  const BLUE = "#155DFC";
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 4000);
  }, [items.length]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    startAutoPlay();
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
    startAutoPlay();
  };

  const handleCardClick = (idx: number) => {
    setActiveIndex(idx);
    startAutoPlay();
  };

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!items || items.length === 0) return null;

  // Split text "Name - Role" into separate fields
  const activeMember = items[activeIndex];
  const [activeName, activeRole] = activeMember.text.split(" - ");

  // Layout parameters
  const cardWidth = isMobile ? 230 : 340;
  const cardHeight = isMobile ? 330 : 490;
  const translateXVal = isMobile ? 60 : 95;
  const maxVisibleOffset = isMobile ? 1 : 2;

  return (
    <div style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      padding: "20px 0"
    }}>
      {/* Slider Carousel Window */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
        position: "relative",
        width: "100%",
        maxWidth: "900px",
        height: `${cardHeight + 40}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "visible",
      }}>
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous member"
          style={{
            position: "absolute",
            left: isMobile ? "10px" : "20px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 30,
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "rgba(15, 23, 42, 0.6)",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s ease",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = BLUE; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(15, 23, 42, 0.6)"; }}
        >
          <ChevronLeft size={22} />
        </button>

        {/* Cards Stack */}
        <div style={{
          position: "relative",
          width: `${cardWidth}px`,
          height: `${cardHeight}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          {items.map((member, i) => {
            const len = items.length;
            let offset = i - activeIndex;

            // Handle circular math for shortest distance
            if (offset > len / 2) offset -= len;
            if (offset < -len / 2) offset += len;

            const absOffset = Math.abs(offset);
            const isVisible = absOffset <= maxVisibleOffset;

            // Visual properties based on offset
            const isActive = offset === 0;
            const translateX = offset * translateXVal;
            const scale = 1 - absOffset * 0.12;
            const opacity = isVisible ? (isActive ? 1 : 0.6) : 0;
            const zIndex = 20 - absOffset;
            const filter = isActive ? "none" : "grayscale(100%)";
            const pointerEvents = isVisible ? "auto" : "none";

            return (
              <div
                key={i}
                onClick={() => isVisible && handleCardClick(i)}
                style={{
                  position: "absolute",
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  borderRadius: "16px",
                  overflow: "visible",
                  boxShadow: "none",
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                  filter: filter,
                  transition: "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s ease, filter 0.6s ease, z-index 0.6s ease",
                  cursor: isActive ? "default" : (isVisible ? "pointer" : "default"),
                  pointerEvents: pointerEvents,
                  backgroundColor: "transparent"
                }}
              >
                {/* Member Photo */}
                <img
                  src={member.image}
                  alt={member.text}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "top",
                    display: "block",
                    WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 95%)",
                    maskImage: "linear-gradient(to bottom, black 55%, transparent 95%)",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          aria-label="Next member"
          style={{
            position: "absolute",
            right: isMobile ? "10px" : "20px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 30,
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "rgba(15, 23, 42, 0.6)",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s ease",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = BLUE; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(15, 23, 42, 0.6)"; }}
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Active Member Details */}
      <div style={{
        textAlign: "center",
        marginTop: "24px",
        padding: "0 16px",
        minHeight: "90px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <h4 style={{
          fontSize: "clamp(20px, 4.5vw, 28px)",
          fontWeight: 700,
          color: "#0B192C",
          margin: "0 0 10px 0",
          position: "relative",
          paddingBottom: "10px",
          display: "inline-block",
        }}>
          {activeName?.trim()}
          <span style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "50px",
            height: "3px",
            backgroundColor: BLUE,
            borderRadius: "2px",
          }}></span>
        </h4>
        <p style={{
          fontSize: "clamp(12px, 3.5vw, 14px)",
          fontWeight: 700,
          color: BLUE,
          textTransform: "uppercase",
          letterSpacing: "1px",
          margin: 0,
        }}>
          {activeRole?.trim()}
        </p>
      </div>
    </div>
  );
}
