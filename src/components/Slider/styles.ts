import styled from 'styled-components';

export const Wrapper = styled.section`
  .slick-slider {
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-touch-action: pan-y;
    -ms-user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    box-sizing: border-box;
    display: block;
    position: relative;
    touch-action: pan-y;
    user-select: none;
  }

  .slick-list {
    display: block;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: relative;
  }

  .slick-list:focus {
    outline: none;
  }

  .slick-list.dragging {
    cursor: hand;
    cursor: pointer;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    display: block;
    left: 0;
    position: relative;
    top: 0;
  }

  .slick-track:before,
  .slick-track:after {
    content: '';
    display: table;
  }

  .slick-track:after {
    clear: both;
  }

  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
  }

  [dir='rtl'] .slick-slide {
    float: right;
  }

  .slick-slide img {
    display: block;
  }

  .slick-slide.slick-loading img {
    display: none;
  }

  .slick-slide.dragging img {
    pointer-events: none;
  }

  .slick-initialized .slick-slide {
    display: block;
  }

  .slick-loading .slick-slide {
    visibility: hidden;
  }

  .slick-vertical .slick-slide {
    border: 1px solid transparent;
    display: block;
    height: auto;
  }

  .slick-arrow.slick-hidden {
    display: none;
  }
`;
