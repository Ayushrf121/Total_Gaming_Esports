// The "Book covers" splitting open to reveal the background
export const leftDoorVariant = {
  initial: { x: "0%" },
  animate: { x: "-100%", transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }
};

export const rightDoorVariant = {
  initial: { x: "0%" },
  animate: { x: "100%", transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }
};

// Main container stagger
export const heroContentStagger = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 1.0 } // Waits for doors to open
  }
};

// 3D Fold (Page Turning) effect for text
export const bookFoldTextVariant = {
  initial: { 
    rotateX: -90, 
    opacity: 0, 
    y: 40,
    transformPerspective: 1200,
    transformOrigin: "bottom"
  },
  animate: {
    rotateX: 0,
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, type: "spring", bounce: 0.4 }
  }
};

// Standard fade-up for secondary elements
export const fadeUpVariant = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};