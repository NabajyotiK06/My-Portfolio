import { useState, useCallback } from 'react';

/**
 * Returns mouse position relative to a given element.
 * Usage: const { x, y, handleMouseMove, handleMouseLeave } = useMousePosition();
 */
const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, inside: false });

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      inside: true,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPosition((p) => ({ ...p, inside: false }));
  }, []);

  return { position, handleMouseMove, handleMouseLeave };
};

export default useMousePosition;
