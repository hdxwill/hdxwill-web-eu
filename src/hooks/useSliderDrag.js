import { useState, useEffect, useCallback } from "react";

const DRAG_THRESHOLD = 50;

const useSliderDrag = ({ onNext, onPrev }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const handleDragStart = useCallback((e) => {
    setIsDragging(true);
    setStartX(e.type.includes("mouse") ? e.pageX : e.touches[0].clientX);
  }, []);

  const handleDragMove = useCallback(
    (e) => {
      if (!isDragging) return;
      const currentX = e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
      setTranslateX(currentX - startX);
    },
    [isDragging, startX],
  );

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    if (translateX < -DRAG_THRESHOLD) onNext();
    else if (translateX > DRAG_THRESHOLD) onPrev();
    setTranslateX(0);
  }, [isDragging, translateX, onNext, onPrev]);

  useEffect(() => {
    const handlePointerUp = () => {
      if (isDragging) handleDragEnd();
    };
    window.addEventListener("mouseup", handlePointerUp);
    window.addEventListener("touchend", handlePointerUp);
    return () => {
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("touchend", handlePointerUp);
    };
  }, [isDragging, handleDragEnd]);

  return {
    isDragging,
    translateX,
    handlers: {
      onMouseDown: handleDragStart,
      onMouseMove: handleDragMove,
      onTouchStart: handleDragStart,
      onTouchMove: handleDragMove,
    },
  };
};

export default useSliderDrag;
