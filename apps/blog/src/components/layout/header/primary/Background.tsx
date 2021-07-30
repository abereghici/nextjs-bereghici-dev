import * as React from 'react';
import { gsap, Elastic, Back, Linear } from 'gsap';
import { sessionStorage } from '@bereghici/storage';
import { theme } from '@bereghici/design-system.theme';

const table = '#table_legs, #table';
const lampLeg = '#lamp > .lamp-leg';
const lampbt = '#lamp-bottom';
const lampLight = '#lamp > .light';
const lampLine = '#lamp-line';
const lampLineB = '#lamp-line-b';
const lampLineT = '#lamp-line-t';
const lampCircle = '#lamp-circle';
const lampHead = '#lamp-head';
const computer = '#computer > *';
const keyboard = '#keyboard > *';
const asset = '#computer_mouse > * , #coffee_mug > *';

type Props = React.SVGProps<SVGSVGElement>;

export const Background = (props: Props) => {
  const animateBackground = () => {
    return gsap
      .timeline()
      .from(table, {
        duration: 0.2,
        position: 0.1,
        y: '-=200',
        opacity: 0,
        ease: Elastic.easeOut,
      })
      .from(lampLeg, {
        duration: 0.2,
        opacity: 0,
        x: '-200',
        ease: Elastic.easeOut,
      })
      .from(lampbt, {
        duration: 0.2,
        opacity: 0,
        scale: 0,
        transformOrigin: 'center center',
      })
      .from(lampLineB, {
        duration: 0.3,
        opacity: 0,
        transformOrigin: '100% 100%',
        rotation: '-180deg',
      })
      .from(lampCircle, {
        duration: 0.1,
        opacity: 0,
        x: '-=100',
        y: '-=100',
      })
      .from(lampLineT, {
        duration: 0.3,
        opacity: 0,
        transformOrigin: '0% 100%',
        rotation: '-180deg',
      })
      .from(lampHead, {
        duration: 0.2,
        opacity: 0,
        scale: 0,
        ease: Elastic.easeOut,
      })
      .from(computer, {
        duration: 0.5,
        opacity: 0,
        scale: 0,
        transformOrigin: 'center center',
        ease: Back.easeOut,
        stagger: 0.2,
      })
      .from(keyboard, {
        duration: 0.3,
        opacity: 0,
        y: '-=100',
        ease: Linear.easeInOut,
        stagger: 0.05,
      })
      .from(asset, { duration: 0.5, opacity: 0, stagger: 0.05 });
  };

  const turnLightOn = (timeline?: gsap.core.Timeline) => {
    (timeline ?? gsap.timeline())
      .to(
        lampLight,
        { duration: 0.2, opacity: 0.8, ease: Elastic.easeOut, delay: 0.5 },
        'a'
      )
      .to(lampLight, { duration: 0.1, opacity: 0 }, 'b')
      .to(lampLight, { duration: 0.1, opacity: 0.2 }, 'c')
      .fromTo(
        lampLine,

        { duration: 0.2, opacity: 0 },
        { duration: 0.2, opacity: 0.2, delay: 0.5 },
        'a-=0.05'
      )
      .to(lampLine, { duration: 0.1, opacity: 1 }, 'b-=0.05')
      .to(lampLine, { duration: 0.1, opacity: 0.5 }, 'c-=0.05');
  };

  React.useEffect(() => {
    const bgSessionKey = `ignore-bg-animation`;
    const ignoreBgAnimation = sessionStorage.get(bgSessionKey);

    if (ignoreBgAnimation) {
      turnLightOn();
    } else {
      turnLightOn(animateBackground());
      sessionStorage.set(bgSessionKey, true);
    }
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      version="1.1"
      viewBox="0 0 1160 380"
      {...props}
    >
      <g>
        <g stroke="null" id="background">
          <rect
            stroke="null"
            y="0"
            id="svg_1"
            height="380"
            width="1160"
            fill={theme.colors.headerPrimaryBackground}
            x="0"
          />
        </g>

        <g stroke="null" id="table">
          <path
            stroke="#0B0B0B"
            id="svg_7"
            fill="#EDCF94"
            strokeMiterlimit="10"
            d="m1153.62879,379.30001l-1146.95552,0c-2.68445,0 -4.9712,-1.1 -4.9712,-2.5l0,-14.3c0,-1.4 2.18733,-2.5 4.9712,-2.5l1146.95552,0c2.68445,0 4.9712,1.1 4.9712,2.5l0,14.3c0,1.4 -2.18733,2.5 -4.9712,2.5z"
          />
        </g>
        <g id="computer">
          <polygon
            fill="#888889"
            stroke="#050606"
            strokeMiterlimit="10"
            points="548.0500061511993,301.29998779296875 543.7500183582306,328.0999755859375 642.4499695301056,328.0999755859375 637.1499817371368,301.29998779296875 "
          />
          <polyline
            fill="#767677"
            points="547.7500183582306,308.70001220703125 546.9499695301056,314.70001220703125 638.8499939441681,314.70001220703125 637.7500183582306,307.70001220703125 548.2500183582306,307.70001220703125 "
          />
          <path
            fill="#E5E9ED"
            stroke="#050606"
            strokeMiterlimit="10"
            d="m767.44999,309.4l-348.6,0c-6.8,0 -12.3,-5.3 -12.3,-11.8l0,-259.5c0,-6.5 5.5,-11.8 12.3,-11.8l348.5,0c6.8,0 12.3,5.3 12.3,11.8l0,259.4c0.1,6.6 -5.4,11.9 -12.2,11.9z"
          />
          <path
            fill="#202021"
            stroke="#050606"
            strokeMiterlimit="10"
            d="m770.14999,263.3l-357.8,0c-3.2,0 -5.8,-2.6 -5.8,-5.8l0,-220.3c0,-6.1 4.9,-11 11,-11l350.6,0c6.4,0 11.7,5.2 11.7,11.7l0,215.8c-0.1,5.3 -4.4,9.6 -9.7,9.6z"
          />
          <rect
            fill="#434445"
            stroke="#070808"
            strokeMiterlimit="10"
            height="211.3"
            width="341"
            y="39.1"
            x="422.64999"
          />
          <text
            y="170"
            x="433"
            fontSize="48px"
            fontWeight="bold"
            fill="#FFFFFF"
          >
            bereghici
            <tspan fill="#BE5532">.dev</tspan>
          </text>
          <path
            fill="#C7C6C6"
            stroke="#070808"
            strokeWidth="2"
            strokeMiterlimit="10"
            d="m518.24999,349.3l1,5.6c0.2,1.3 1.3,2.2 2.6,2.2l138.2,0c2.9,0 5.4,-2.1 5.9,-4.9l0,-0.1c0.2,-1 -0.6,-1.8 -1.5,-1.8l-146.2,-1z"
          />
          <path
            fill="#A3A3A2"
            stroke="#070808"
            strokeMiterlimit="10"
            d="m543.44999,328.1l-25.4,20.3c-1.3,1.1 -0.6,3.3 1.2,3.3l145.5,-0.4c1.1,0 1.6,-1.3 0.8,-2l-23.8,-21.2l-98.3,0z"
          />
          <path
            fill="#A3A3A2"
            d="m544.84999,327l-0.6,1.3c-1,1 -1.4,1.3 -2,1.9l-4.7,3.7l109.2,0.4l-3,-3.1c-0.4,-0.4 -0.9,-0.8 -1.2,-1.2c-0.7,-0.8 -0.7,-0.6 -1.1,-1.7l0,-1.3l-96.6,0z"
          />
          <path
            fill="#A3A3A2"
            d="m521.14999,354.8c0.3,0.6 1.2,1.8 2,1.8l135.7,0c0.5,0 1.1,-0.1 1.6,-0.2c0.5,-0.2 1.2,-1.2 1.8,-1.6l-141.1,0z"
          />
          <circle fill="#5FBB46" r="1.3" cy="33.6" cx="593.14999" />
          <path
            fill="#2D2D2D"
            d="m589.04999,28.5l-166.1,2.5c0,0 -9.7,0.9 -10.9,10.3c-1.2,9.4 -1.9,118.4 -3.4,138.9s0,-138.9 0,-138.9s-1.9,-13.4 14.2,-13.1l166.2,0.3z"
          />
          <path
            fill="#2D2D2D"
            d="m596.54999,28.5l166.1,2.5c0,0 9.7,0.9 10.9,10.3c1.2,9.4 1.9,118.4 3.4,138.9c1.5,20.5 0,-138.9 0,-138.9s1.9,-13.4 -14.2,-13.1l-166.2,0.3z"
          />
          <path
            fill="#CED1D3"
            d="m763.24999,308.4l-341.3,0c-10.5,1 -14.1,-5.4 -14.2,-8.6l0,0c1.4,0.4 2.9,0.6 4.4,0.6l358.8,1.6c2.5,0 4.9,-0.4 7.2,-1.3l0,0c-1.1,3.4 -3.6,8.7 -14.9,7.7z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#434445"
            d="m592.64999,278.8c0.6,0 1.4,0.1 2.2,0.4c0.9,0.3 1.5,0.4 1.7,0.4c0.4,0 1,-0.1 1.8,-0.4c0.8,-0.3 1.6,-0.4 2.2,-0.4c1,0 1.9,0.3 2.7,0.8c0.4,0.3 0.9,0.7 1.3,1.3c-0.7,0.6 -1.1,1.1 -1.4,1.5c-0.5,0.8 -0.8,1.7 -0.8,2.6c0,1 0.3,2 0.9,2.8c0.6,0.8 1.2,1.4 2,1.6c-0.3,1 -0.8,2.1 -1.5,3.2c-1.1,1.6 -2.2,2.5 -3.2,2.5c-0.4,0 -1,-0.1 -1.8,-0.4c-0.7,-0.3 -1.4,-0.4 -1.9,-0.4c-0.5,0 -1.1,0.1 -1.8,0.4c-0.7,0.3 -1.2,0.4 -1.7,0.4c-1.3,0 -2.5,-1.1 -3.8,-3.3c-1.2,-2.2 -1.9,-4.3 -1.9,-6.3c0,-1.9 0.5,-3.5 1.4,-4.7c0.9,-1.4 2.1,-2 3.6,-2l0,0z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#434445"
            d="m600.34999,274c0,0.1 0.1,0.2 0.1,0.3c0,0.1 0,0.2 0,0.2c0,0.5 -0.1,1.1 -0.4,1.7c-0.2,0.6 -0.6,1.2 -1.2,1.7c-0.5,0.5 -0.9,0.8 -1.4,0.9c-0.3,0.1 -0.7,0.2 -1.3,0.2c0,-1.2 0.3,-2.3 1,-3.2c0.7,-0.9 1.8,-1.5 3.2,-1.8l0,0z"
          />
        </g>
        <g id="keyboard">
          <path
            fill="#E5E9ED"
            stroke="#0D0D0D"
            strokeMiterlimit="10"
            d="m695.9,359.8l-329.4,0l0,-4.8c0,-4 3.2,-7.2 7.2,-7.2l315,0c4,0 7.3,3.3 7.3,7.3l0,4.7l-0.1,0z"
          />
          <polygon
            fill="#D2D6D8"
            points="695,358.9000244140625 367.29998779296875,358.9000244140625 367.3999938964844,355.5999755859375 695.0999755859375,355.5999755859375 "
          />
          <rect height="1.9" width="21.4" y="346" x="379.7" />
          <rect height="1.9" width="21.4" y="346" x="472.8" />
          <rect height="1.9" width="95.4" y="345.9" x="495.8" />
          <rect height="1.9" width="21.4" y="346" x="402.6" />
          <rect height="1.9" width="21.4" y="346" x="425.8" />
          <rect height="1.9" width="21.4" y="346" x="448.9" />
          <rect height="1.9" width="21.4" y="345.9" x="593.3" />
          <rect height="1.9" width="21.4" y="345.9" x="616.2" />
          <rect height="1.9" width="21.4" y="345.9" x="639.3" />
          <rect height="1.9" width="21.4" y="345.9" x="662.5" />
          <path
            fill="#FFFFFF"
            stroke="#0D0D0D"
            strokeMiterlimit="10"
            d="m400.1,346.9l-19.3,0l0,-2.1c0,-0.6 1,-1.2 2.3,-1.2l14.6,0c1.3,0 2.4,0.5 2.4,1.2l0,2.1z"
          />
          <path
            fill="#FFFFFF"
            stroke="#0D0D0D"
            strokeMiterlimit="10"
            d="m422.9,346.9l-19.3,0l0,-2.1c0,-0.6 1,-1.2 2.3,-1.2l14.6,0c1.3,0 2.4,0.5 2.4,1.2l0,2.1z"
          />
          <path
            fill="#FFFFFF"
            stroke="#0D0D0D"
            strokeMiterlimit="10"
            d="m446.1,346.9l-19.3,0l0,-2.1c0,-0.6 1,-1.2 2.3,-1.2l14.6,0c1.3,0 2.4,0.5 2.4,1.2l0,2.1z"
          />
          <path
            fill="#FFFFFF"
            stroke="#0D0D0D"
            strokeMiterlimit="10"
            d="m469.3,346.9l-19.3,0l0,-2.1c0,-0.6 1,-1.2 2.3,-1.2l14.6,0c1.3,0 2.4,0.5 2.4,1.2l0,2.1z"
          />
          <path
            fill="#FFFFFF"
            stroke="#0D0D0D"
            strokeMiterlimit="10"
            d="m613.7,346.9l-19.3,0l0,-2.1c0,-0.6 1,-1.2 2.3,-1.2l14.6,0c1.3,0 2.4,0.5 2.4,1.2l0,2.1z"
          />
          <path
            fill="#FFFFFF"
            stroke="#0D0D0D"
            strokeMiterlimit="10"
            d="m636.5,346.9l-19.3,0l0,-2.1c0,-0.6 1,-1.2 2.3,-1.2l14.6,0c1.3,0 2.4,0.5 2.4,1.2l0,2.1z"
          />
          <path
            fill="#FFFFFF"
            stroke="#0D0D0D"
            strokeMiterlimit="10"
            d="m659.7,346.9l-19.3,0l0,-2.1c0,-0.6 1,-1.2 2.3,-1.2l14.6,0c1.3,0 2.4,0.5 2.4,1.2l0,2.1z"
          />
          <path
            fill="#FFFFFF"
            stroke="#0D0D0D"
            strokeMiterlimit="10"
            d="m682.9,346.9l-19.3,0l0,-2.1c0,-0.6 1,-1.2 2.3,-1.2l14.6,0c1.3,0 2.4,0.5 2.4,1.2l0,2.1z"
          />
          <path
            fill="#FFFFFF"
            stroke="#0D0D0D"
            strokeMiterlimit="10"
            d="m493.1,346.9l-19.3,0l0,-2.1c0,-0.6 1,-1.2 2.3,-1.2l14.6,0c1.3,0 2.4,0.5 2.4,1.2l0,2.1z"
          />
          <path
            fill="#FFFFFF"
            stroke="#0D0D0D"
            strokeMiterlimit="10"
            d="m590.1,347l-93.6,0l0,-2.1c0,-0.7 5,-1.2 11.2,-1.2l70.9,0c6.3,0 11.5,0.5 11.5,1.2l0,2.1z"
          />
        </g>
        <g id="lamp">
          <g id="lamp-body">
            <g id="lamp-header">
              <g id="lamp-line-t">
                <polyline
                  fill="#228370"
                  stroke="#0B0B0B"
                  strokeMiterlimit="10"
                  points="189.8473620414734,86.89999389648438 196.74737119674683,90.70001220703125 72.84736967086792,170.10000610351562 67.1473650932312,164.60000610351562 189.8473620414734,86.89999389648438 "
                />
                <polyline
                  fill="#228370"
                  stroke="#0B0B0B"
                  strokeMiterlimit="10"
                  points="200.54737424850464,95.10000610351562 207.447368144989,99.89999389648438 86.04736661911011,178.20001220703125 80.94736814498901,172.70001220703125 200.54737424850464,95.10000610351562 "
                />
              </g>
              <g id="lamp-head">
                <ellipse
                  fill="#228370"
                  stroke="#0B0B0B"
                  strokeMiterlimit="10"
                  ry="19.3"
                  rx="18.5"
                  cy="100.5"
                  cx="195.74737"
                />
                <path
                  fill="#E8DF9A"
                  stroke="#0B0B0B"
                  strokeMiterlimit="10"
                  d="m227.84737,146.2c0,0 13,10.9 26.6,2.5c2.4,-1.5 4.4,-3.9 5.7,-6.6c3.3,-6.8 7.6,-20.6 -5,-31.8l-27.3,35.9z"
                />
                <path
                  fill="#3FBDA4"
                  stroke="#0B0B0B"
                  strokeMiterlimit="10"
                  d="m272.44737,72.1c-20.6,-7.9 -47.5,-7.3 -64.6,4.4c-11.4,7.8 -20,19 -24.3,33.7c-8.6,29.1 1.8,61 22.5,79.4c1.3,1.2 3.3,1 4.3,-0.5l77.3,-106.1c0.7,-0.9 0.5,-2.3 -0.4,-2.9c-4.5,-3.3 -9.4,-6 -14.8,-8z"
                />
              </g>
            </g>
            <g id="lamp-line-b">
              <polyline
                fill="#228370"
                stroke="#0B0B0B"
                strokeMiterlimit="10"
                points="71.6473650932312,185.60000610351562 76.54736661911011,179.29998779296875 127.74737119674683,320.79998779296875 121.44736814498901,325.5999755859375 71.6473650932312,185.60000610351562 "
              />
              <polyline
                fill="#228370"
                stroke="#0B0B0B"
                strokeMiterlimit="10"
                points="83.54736661911011,182.10000610351562 89.44736814498901,175.89999389648438 140.1473650932312,314.79998779296875 133.947368144989,319 83.54736661911011,182.10000610351562 "
              />
            </g>
            <ellipse
              fill="#3FBDA4"
              stroke="#0B0B0B"
              strokeMiterlimit="10"
              ry="20.5"
              rx="19.7"
              cy="175.9"
              cx="82.14737"
              id="lamp-circle"
            />
          </g>
          <path
            fill="#228370"
            stroke="#0B0B0B"
            strokeMiterlimit="10"
            d="m195.74737,359.2l-127.6,0l0,-11.6c0,-1.6 2.1,-2.9 4.7,-2.9l121.2,0c1,0 1.7,0.5 1.7,1.1l0,13.4z"
            className="lamp-leg"
          />
          <g id="lamp-bottom">
            <path
              fill="#3FBDA4"
              stroke="#0B0B0B"
              strokeMiterlimit="10"
              d="m83.54737,344.6c0,0 10.6,-32.8 48.4,-31.4c0,0 39,2.3 48.7,31.4l-97.1,0z"
            />
            <path
              fill="#70BAAF"
              stroke="#0B0B0B"
              strokeMiterlimit="10"
              d="m149.84737,317c0,0 8.8,4.6 17,-0.4c0.5,-0.3 1,0.1 1,0.8l0,9.2c0,0 -13.8,-8.3 -18,-9.6z"
            />
          </g>
          <polyline
            opacity="0"
            fill="#FCF1C4"
            points="278.3473620414734,96 783.7473559379578,358.29998779296875 314.74735593795776,359.79998779296875 224.947368144989,171.89999389648438 "
            className="light"
          />
          <g id="lamp-line">
            <path
              fill="#2FAF97"
              d="m184.24737,110.8c-8.4,28.4 1.9,61.2 23.2,78.5c1.2,-0.5 -1.2,0.5 0,0l-3.4,-108.7c-9.2,7.5 -16.1,17.6 -19.8,30.2z"
            />
            <path
              fill="#2FAF97"
              d="m63.24737,175.9c0,10.7 8.4,19.6 18.2,19.6c0.2,0 0.4,0 0.6,0l-6.1,-38.2c-7.2,2.5 -12.7,9.9 -12.7,18.6z"
            />
            <path
              fill="#2FAF97"
              d="m84.94737,343.7l39,0l-8.3,-27.8c-23.3,6.9 -30.7,27.8 -30.7,27.8z"
            />
            <path
              fill="none"
              stroke="#BFE4E2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              d="m222.84737,74.6c-0.4,-0.1 26.1,-7 46,3.5"
            />
            <line
              fill="none"
              stroke="#BFE4E2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              y2="83"
              x2="276.74737"
              y1="81.3"
              x1="273.64737"
            />
            <path
              fill="none"
              stroke="#BFE4E2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              d="m90.44737,162.4c0,0 9.3,7.1 6.2,16.8"
            />
            <path
              fill="none"
              stroke="#BFE4E2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              d="m127.74737,317.4c0,0 17,1 28.6,9.2"
            />
            <line
              fill="none"
              stroke="#BFE4E2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              y2="332.5"
              x2="165.24737"
              y1="330.1"
              x1="162.14737"
            />
          </g>
        </g>
        <g id="computer_mouse">
          <path
            fill="#E5E9ED"
            stroke="#0B0B0B"
            strokeMiterlimit="10"
            d="m727.1,359.7c0,0 0,-8.6 12.9,-14.3c8.7,-3.9 18.7,-4 27.5,-0.6c6.8,2.6 13.7,7.2 13.7,15l-54.1,-0.1z"
          />
          <path
            fill="#D1D4D6"
            d="m767.5,345.5c-3.9,-1.4 -9,-2.6 -13.3,-2.4l0,15.7l26.1,0.1c-0.1,-4.3 -4.3,-10.3 -12.8,-13.4z"
          />
        </g>
        <g id="coffee_mug">
          <polyline
            fill="#F9EFE5"
            stroke="#0D0D0D"
            strokeMiterlimit="10"
            points="852.7999877929688,269.5 868.0999755859375,359.79998779296875 911,359.79998779296875 925.4000244140625,269.5 856.7000122070312,269.5 "
          />
          <polygon
            fill="#F3E5D4"
            points="924.2000122070312,272.5 889.0999755859375,269.5 888.7000122070312,358.9000244140625 910.4000244140625,358.9000244140625 "
          />
          <polygon
            fill="#BE5532"
            stroke="#0D0D0D"
            strokeMiterlimit="10"
            points="856.2999877929688,299.70001220703125 862.7000122070312,334.70001220703125 915.7999877929688,334.70001220703125 921.9000244140625,299.70001220703125 "
          />
          <polygon
            fill="#AD4025"
            points="920.7999877929688,300.70001220703125 889.2000122070312,300.70001220703125 889.0999755859375,333.9000244140625 915.2000122070312,333.9000244140625 "
          />
          <line
            fill="none"
            stroke="#9B3021"
            strokeLinecap="round"
            strokeMiterlimit="10"
            y2="304.2"
            x2="917.7"
            y1="304.2"
            x1="861.3"
          />
          <line
            fill="none"
            stroke="#9B3021"
            strokeLinecap="round"
            strokeMiterlimit="10"
            y2="310.9"
            x2="916.7"
            y1="310.9"
            x1="863.1"
          />
          <line
            fill="none"
            stroke="#9B3021"
            strokeLinecap="round"
            strokeMiterlimit="10"
            y2="318.8"
            x2="914.6"
            y1="318.8"
            x1="864.1"
          />
          <line
            fill="none"
            stroke="#9B3021"
            strokeLinecap="round"
            strokeMiterlimit="10"
            y2="326.1"
            x2="913.5"
            y1="326.1"
            x1="865.1"
          />
          <line
            fill="none"
            stroke="#9B3021"
            strokeLinecap="round"
            strokeMiterlimit="10"
            y2="331.7"
            x2="912.5"
            y1="331.7"
            x1="865"
          />
          <polygon
            fill="#BE5532"
            stroke="#0B0B0B"
            strokeMiterlimit="10"
            points="848.2999877929688,277.5 929.2000122070312,277.5 929.2000122070312,269.5 852.7999877929688,269.5 848.2999877929688,269.5 "
          />
          <polygon
            fill="#BE5532"
            stroke="#070808"
            strokeMiterlimit="10"
            points="854.7999877929688,258.8999938964844 852.7999877929688,269.5 924.2000122070312,269.5 921.9000244140625,258.8999938964844 "
          />
          <polygon
            fill="#AD4025"
            points="928.2000122070312,270.5 923,270.5 889.7000122070312,270.5 889.7000122070312,276.5999755859375 928.2000122070312,276.79998779296875 "
          />
          <polygon
            fill="#AD4025"
            points="923,268.70001220703125 921.2000122070312,259.70001220703125 889.7999877929688,259.79998779296875 889.7999877929688,268.70001220703125 "
          />
          <polygon
            fill="#9B3021"
            points="853.9000244140625,268.70001220703125 854.2000122070312,266.70001220703125 922.5999755859375,266.70001220703125 923,268.70001220703125 "
          />
        </g>
      </g>
    </svg>
  );
};
