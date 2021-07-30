import * as React from 'react';
import { gsap, Elastic } from 'gsap';
import { theme } from '@bereghici/design-system.theme';

const lampLeg = '#lamp > .lamp-leg';
const lampbt = '#lamp-bottom';
const lampLight = '#lamp > .light';
const lampLine = '#lamp-line';
const lampLineB = '#lamp-line-b';
const lampLineT = '#lamp-line-t';
const lampCircle = '#lamp-circle';
const lampHead = '#lamp-head';

export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  React.useEffect(() => {
    gsap
      .timeline()
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
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      version="1.1"
      viewBox="0 32 1300 380"
      height="50"
      {...props}
    >
      <g>
        <text
          y="355"
          x="220"
          fontSize="150px"
          fontWeight="bold"
          fill={theme.colors.contentPrimary}
        >
          bereghici
          <tspan fill="#BE5532">.dev</tspan>
        </text>
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
      </g>
    </svg>
  );
};
