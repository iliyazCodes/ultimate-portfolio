import { css } from "styled-components"

export const TransitionStyles = css`
  /* Fade up */
  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }
  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }
  /* Fade down */
  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-20px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }
  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }
  /* Fade */
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms var(--easing);
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 300ms var(--easing);
  }

  /* Slide */
  .slide-enter-active {
    animation: slide ease-in 500ms calc((var(--delay) - 1.5) * 100ms - 150ms) reverse both;
  }

  .slide-exit-active {
    animation: slide ease-out 500ms calc((var(--delay) - 1.5) * 100ms - 150ms) both;
  }

  .slide-enter-done {
    animation: none;
    translate: 0 !important;
  }

  @keyframes slide {
    0% {
      translate: 0;
    }

    100% {
      translate: calc(var(--container-width) * var(--direction, 1));
    }
}
`

export default TransitionStyles