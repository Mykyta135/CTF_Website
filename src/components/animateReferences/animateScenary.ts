import { gsap } from "gsap";

export const createGlitchTimeline = () => {
  const glitchTimeline = gsap.timeline();

  // Function to clone the text element, apply styles, and animate it
  const createGlitchEffect = (selector: string, colors: string[]) => {
    const originalElement = document.querySelector(selector);

    if (!originalElement) return;

    // Create multiple glitch clones
    for (let i = 0; i < 2; i++) {
      const clone = originalElement.cloneNode(true) as HTMLElement;
      clone.style.position = "absolute";
      clone.style.opacity = "0";
      clone.style.pointerEvents = "none"; // To prevent interaction with the cloned elements
      originalElement.parentElement?.appendChild(clone);

      // Apply the neon glow effect using text-shadow and box-shadow
      clone.style.textShadow = `0 0 10px ${gsap.utils.random(
        colors
      )}, 0 0 20px ${gsap.utils.random(colors)}, 0 0 30px ${gsap.utils.random(
        colors
      )}`;

      // Apply the glitch animation to the clone
      gsap.to(clone, {
        x: () => gsap.utils.random(-45, 45),
        y: () => gsap.utils.random(-45, 45),
        color: gsap.utils.random(colors), // Randomize the color for each clone
        opacity: 0.8,
        duration: 0.05,
        repeat: 1,
        yoyo: true,
        ease: "power1.inOut",
        delay: gsap.utils.random(0.1, 0.3),
        onComplete: () => clone.remove(), // Remove clone after animation
      });
    }
  };

  // Block scrolling by setting overflow and height
  document.body.style.overflow = "hidden";
  document.body.style.height = "100%";

  // Set initial opacity of texts
  gsap.set(".startText1", { opacity: 0 });
  gsap.set(".startText2", { opacity: 0 });

  // Sequence for the first text with glitch effect
  glitchTimeline
    .to(".startText1", {
      opacity: 1,
      duration: 0.7, // Fade in duration
      ease: "power1.out",
    })
    .call(() =>
      createGlitchEffect(".startText1", [
        "#ff0000",
        "#00ff00",
        "#0000ff",
        "#ff00ff",
      ])
    )
    .to(".startText1", {
      opacity: 0,
      duration: 0.2, // Fade out duration
      ease: "power1.out",
    })
    // Sequence for the second text with glitch effect
    .to(".startText2", {
      opacity: 1,
      duration: 0.5, // Fade in duration for the second text
      ease: "power1.out",
      delay: 0.3, // Delay before starting the fade-in for the second text
    })
    .call(() =>
      createGlitchEffect(".startText2", [
        "#ff0000",
        "#00ff00",
        "#0000ff",
        "#ff00ff",
      ])
    )
    .to(".startText2", {
      opacity: 0,
      duration: 0.5, // Fade out duration for the second text
      ease: "power1.out",
    })
    .call(() => {
      // Restore scrolling after the animation
      document.body.style.overflow = "";
      document.body.style.height = "";
    });

  return glitchTimeline;
};

export const animateLogo = () => {
  const timeline = gsap.timeline();

  // Ensure glitchTimeline runs before the logo animation
  const glitchTimeline = createGlitchTimeline();

  // Add glitchTimeline to the beginning of the logo timeline
  timeline.add(glitchTimeline, 0);

  // 1. Animate logo from opacity 0 and scale from x5 to x1
  timeline.to(".logo", {
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: "power2.out",
  });

  // 2. Ensure the textblock is visible and fully reset opacity before the typing effect
  timeline.set(".textblock", { opacity: 1 });

  return timeline;
};
