import React, { Component } from "react";
import { gsap, Power3, Elastic } from "gsap";
import { CSSRulePlugin } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "../../sass/app.scss";

export default class Hero extends Component {
  componentDidMount() {
    gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

    const background = CSSRulePlugin.getRule(".background:before");

    const mediaQuery = window.matchMedia("(min-width: 1400px)");

    // ======== BACKGROUND ANIMATION ========

    if (mediaQuery.matches) {
      const tlbg = gsap.timeline({ repeat: -1, delay: 10 });

      tlbg.to(background, {
        duration: 4,
        cssRule: { filter: "grayscale(0%)" },
        ease: Power3,
      });

      tlbg.to(
        ".background",
        {
          duration: 4,
          backgroundColor: "rgba(28,28,28,0)",
          ease: Power3,
        },
        "-=4"
      );

      tlbg.to(background, {
        duration: 4,
        cssRule: { filter: "grayscale(100%)" },
        ease: Power3,
      });

      tlbg.to(
        ".background",
        {
          duration: 4,
          backgroundColor: "rgba(28,28,28,0.6)",
          ease: Power3,
        },
        "-=4"
      );

      tlbg.to(background, {
        duration: 8,
        cssRule: { filter: "grayscale(100%)" },
        ease: Power3,
      });

      tlbg.to(
        ".background",
        {
          duration: 8,
          backgroundColor: "rgba(28,28,28,0.6)",
          ease: Power3,
        },
        "-=8"
      );
    }

    // ======== HERO ANIMATIONS ========

    const tl = gsap.timeline({ delay: 1 });

    tl.from(".hello", {
      duration: 0.5,
      opacity: 0,
      ease: Power3,
    });

    tl.to(".hello", {
      duration: 0.5,
      opacity: 1,
      ease: Power3,
    });

    tl.from(
      ".im",
      {
        duration: 0.5,
        opacity: 0,
        ease: Power3,
      },
      "-=0.5"
    );

    tl.to(".im", {
      duration: 0.5,
      opacity: 1,
      ease: Power3,
    });

    tl.from(
      ".maya",
      {
        duration: 0.5,
        opacity: 0,
        ease: Power3,
      },
      "-=0.5"
    );

    tl.to(".maya", {
      duration: 0.5,
      opacity: 1,
      ease: Power3,
    });

    tl.from(
      ".sorvala",
      {
        duration: 0.5,
        opacity: 0,
        ease: Power3,
      },
      "-=0.5"
    );

    tl.to(".sorvala", {
      duration: 0.5,
      opacity: 1,
      ease: Power3,
    });

    tl.from(
      ".stroke",
      {
        duration: 1,
        opacity: 0,
        scaleX: 0,
        transformOrigin: "left",
        ease: Power3,
      },
      "-=0.5"
    );

    tl.to(".stroke", {
      duration: 1,
      opacity: 1,
      scaleX: 1,
      transformOrigin: "right",
      ease: Power3,
    });

    tl.from(
      ".intro-text",
      {
        duration: 1,
        opacity: 0,
        ease: Power3,
      },
      "-=0.5"
    );

    tl.to(".intro-text", {
      duration: 1,
      opacity: 1,
      ease: Power3,
    });

    tl.from(
      ".cta-main",
      {
        duration: 1,
        opacity: 0,
        y: -20,
        ease: Power3,
      },
      "-=1"
    );

    tl.to(".cta-main", {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: Power3,
    });

    tl.from(".scroll", {
      duration: 1,
      opacity: 0,
    });

    tl.to(".scroll", {
      duration: 1,
      opacity: 1,
    });

    // ======== SCROLL ANIMATION ========

    let tls = gsap.timeline({ repeat: -1 });

    tls
      .to(".dot", 0, {
        yoyo: true,
        opacity: 0.2,
        repeat: 1,
        ease: Elastic,
      })
      .to(".dot", 1.8, {
        y: 44,
        opacity: 1,
        ease: Elastic,
        yoyo: true,
        repeat: 1,
      });

    tls.to(".scroll", {
      scrollTrigger: {
        trigger: ".hero",
        start: "bottom",
      },
      opacity: 0,
    });
  }

  // ======== RETURN ========

  render() {
    return (
      <div className='background'>
        <div className='wrapper'>
          <NavBar />

          {/* ======== HERO ======== */}
          <div className='mobile-wrapper'>
            <header className='hero'>
              <div className='hero__content flex'>
                <h1>
                  <span className='hello'>Hello!</span>{" "}
                  <span className='im'>I'm</span>{" "}
                  <span className='maya'>Maya</span>{" "}
                  <span className='sorvala'>Sorvala.</span>
                  <span className='stroke'></span>
                </h1>
                <div className='text'>
                  <p className='intro-text'>
                    I create art in all forms as a way to express my creativity.
                    Let me take you on a journey of my work!
                  </p>
                </div>
                <div className='cta cta-main'>
                  <Link to='/work'>See my work</Link>
                  <i className='far fa-arrow-right'></i>
                </div>
                <div className='scroll flex'>
                  <div className='scroll__box'>
                    <div className='dot'></div>
                  </div>
                  <p>Scroll</p>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
    );
  }
}
