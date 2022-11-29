import React from 'react';
import styled from 'styled-components';

const Logo = styled.path`
  fill: ${props => props.theme.secondary};
`;

export function FiddleLogo({ size = 'regular' }: { size?: 'small' | 'regular' }) {
  if (size === 'small') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="43.667"
        height="10.545"
        viewBox="0 0 43.667 10.545"
      >
        <Logo
          d="M7.026-36.525q-2.2,0-2.56,1.831l-.133.676H8.127L7.782-32.28H3.989l-.676,3.369H1.15L2.3-34.641q.73-3.714,4.828-3.714a6.347,6.347,0,0,1,1.506.179,3.971,3.971,0,0,1,1.227.5l-.942,1.658A3.2,3.2,0,0,0,7.026-36.525Zm3.382.478h2.056l-1.419,7.136H8.989Zm1.38-.995a1.232,1.232,0,0,1-.869-.312,1,1,0,0,1-.338-.763A1.154,1.154,0,0,1,10.959-39a1.393,1.393,0,0,1,.988-.352,1.284,1.284,0,0,1,.882.3.944.944,0,0,1,.338.736,1.19,1.19,0,0,1-.385.922A1.417,1.417,0,0,1,11.788-37.042Zm8.94,5.624a1.258,1.258,0,0,0-.04.305.621.621,0,0,0,.192.5.8.8,0,0,0,.537.166,1.472,1.472,0,0,0,.6-.106L21.8-28.977a3.626,3.626,0,0,1-1.127.172,2.361,2.361,0,0,1-1.253-.305,1.559,1.559,0,0,1-.683-.875,3.057,3.057,0,0,1-1.088.875,3.274,3.274,0,0,1-1.433.305,3.153,3.153,0,0,1-1.539-.385A2.87,2.87,0,0,1,13.559-30.3a3.347,3.347,0,0,1-.418-1.7,4.328,4.328,0,0,1,.524-2.129,3.873,3.873,0,0,1,1.426-1.486,3.816,3.816,0,0,1,1.99-.537,3.4,3.4,0,0,1,1.393.265,2.1,2.1,0,0,1,.942.809l.7-3.674h2.069Zm-3.873.9a2.009,2.009,0,0,0,1.088-.3,2.018,2.018,0,0,0,.743-.829,2.694,2.694,0,0,0,.265-1.22,1.546,1.546,0,0,0-.431-1.154,1.637,1.637,0,0,0-1.2-.424,2.009,2.009,0,0,0-1.088.3,2.018,2.018,0,0,0-.743.829,2.694,2.694,0,0,0-.265,1.22,1.546,1.546,0,0,0,.431,1.154A1.637,1.637,0,0,0,16.855-30.516Zm13.6-.9a1.258,1.258,0,0,0-.04.305.621.621,0,0,0,.192.5.8.8,0,0,0,.537.166,1.472,1.472,0,0,0,.6-.106l-.212,1.578A3.626,3.626,0,0,1,30.4-28.8a2.361,2.361,0,0,1-1.253-.305,1.559,1.559,0,0,1-.683-.875,3.057,3.057,0,0,1-1.088.875,3.274,3.274,0,0,1-1.433.305,3.153,3.153,0,0,1-1.539-.385A2.87,2.87,0,0,1,23.282-30.3a3.347,3.347,0,0,1-.418-1.7,4.328,4.328,0,0,1,.524-2.129,3.873,3.873,0,0,1,1.426-1.486,3.816,3.816,0,0,1,1.99-.537,3.4,3.4,0,0,1,1.393.265,2.1,2.1,0,0,1,.942.809l.7-3.674H31.91Zm-3.873.9a2.009,2.009,0,0,0,1.088-.3,2.018,2.018,0,0,0,.743-.829,2.694,2.694,0,0,0,.265-1.22,1.546,1.546,0,0,0-.431-1.154,1.637,1.637,0,0,0-1.2-.424,2.009,2.009,0,0,0-1.088.3,2.018,2.018,0,0,0-.743.829,2.694,2.694,0,0,0-.265,1.22,1.546,1.546,0,0,0,.431,1.154A1.637,1.637,0,0,0,26.578-30.516ZM35.067-28.8a2.23,2.23,0,0,1-1.552-.5,1.8,1.8,0,0,1-.557-1.406,3.759,3.759,0,0,1,.066-.65l1.486-7.388H36.58l-1.472,7.335a1.259,1.259,0,0,0-.027.292.642.642,0,0,0,.192.5.777.777,0,0,0,.537.172,1.434,1.434,0,0,0,.584-.106l-.212,1.578A3.582,3.582,0,0,1,35.067-28.8Zm6.354-7.349a3.554,3.554,0,0,1,2.461.836,3.035,3.035,0,0,1,.935,2.388q0,.265-.013.4l-5.5,1.008q.279,1.061,1.791,1.061a3.253,3.253,0,0,0,1.048-.166,2.33,2.33,0,0,0,.849-.5l.862,1.366a4.117,4.117,0,0,1-1.366.716,5.429,5.429,0,0,1-1.618.239,4.476,4.476,0,0,1-1.93-.391,2.9,2.9,0,0,1-1.273-1.121A3.173,3.173,0,0,1,37.216-32a4.285,4.285,0,0,1,.531-2.129,3.8,3.8,0,0,1,1.492-1.486A4.4,4.4,0,0,1,41.421-36.153ZM41.328-34.6a1.879,1.879,0,0,0-1.36.5,2.443,2.443,0,0,0-.683,1.353l3.608-.663a1.268,1.268,0,0,0-.5-.882A1.738,1.738,0,0,0,41.328-34.6Z"
          transform="translate(-1.15 39.35)"
        />
      </svg>
    );
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="138.344"
      height="33.409"
      viewBox="0 0 138.344 33.409"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#EA4F87" />
          <stop offset="1" stopColor="#f37a6a" />
        </linearGradient>
      </defs>
      <g transform="translate(-89.15 -221.65)">
        <path
          d="M19.767-30.4q-6.976,0-8.111,5.8l-.42,2.143H23.255l-1.093,5.505H10.143L8-6.277H1.15L4.806-24.431Q7.117-36.2,20.1-36.2a20.108,20.108,0,0,1,4.77.567,12.583,12.583,0,0,1,3.887,1.576L25.776-28.8A10.121,10.121,0,0,0,19.767-30.4Zm10.716,1.513H37L32.5-6.277H25.986Zm4.371-3.152a3.9,3.9,0,0,1-2.753-.988,3.16,3.16,0,0,1-1.072-2.416,3.656,3.656,0,0,1,1.2-2.795,4.414,4.414,0,0,1,3.131-1.114,4.068,4.068,0,0,1,2.795.946,2.989,2.989,0,0,1,1.072,2.332,3.77,3.77,0,0,1-1.219,2.921A4.49,4.49,0,0,1,34.853-32.038ZM63.178-14.22a3.984,3.984,0,0,0-.126.967,1.967,1.967,0,0,0,.609,1.576,2.525,2.525,0,0,0,1.7.525,4.663,4.663,0,0,0,1.891-.336l-.672,5a11.486,11.486,0,0,1-3.572.546,7.48,7.48,0,0,1-3.971-.967,4.938,4.938,0,0,1-2.164-2.774,9.685,9.685,0,0,1-3.446,2.774,10.371,10.371,0,0,1-4.539.967,9.99,9.99,0,0,1-4.875-1.219,9.092,9.092,0,0,1-3.551-3.509,10.6,10.6,0,0,1-1.324-5.4,13.712,13.712,0,0,1,1.66-6.745,12.269,12.269,0,0,1,4.518-4.707,12.089,12.089,0,0,1,6.3-1.7,10.782,10.782,0,0,1,4.413.84,6.652,6.652,0,0,1,2.984,2.563l2.227-11.641H67.8ZM50.907-11.362a6.366,6.366,0,0,0,3.446-.946,6.394,6.394,0,0,0,2.353-2.627,8.534,8.534,0,0,0,.84-3.866,4.9,4.9,0,0,0-1.366-3.656,5.187,5.187,0,0,0-3.8-1.345,6.366,6.366,0,0,0-3.446.946,6.394,6.394,0,0,0-2.353,2.627,8.534,8.534,0,0,0-.84,3.866A4.9,4.9,0,0,0,47.1-12.707,5.187,5.187,0,0,0,50.907-11.362ZM93.982-14.22a3.984,3.984,0,0,0-.126.967,1.967,1.967,0,0,0,.609,1.576,2.525,2.525,0,0,0,1.7.525,4.663,4.663,0,0,0,1.891-.336l-.672,5a11.486,11.486,0,0,1-3.572.546,7.48,7.48,0,0,1-3.971-.967,4.938,4.938,0,0,1-2.164-2.774,9.685,9.685,0,0,1-3.446,2.774,10.371,10.371,0,0,1-4.539.967,9.99,9.99,0,0,1-4.875-1.219,9.092,9.092,0,0,1-3.551-3.509,10.6,10.6,0,0,1-1.324-5.4,13.712,13.712,0,0,1,1.66-6.745,12.269,12.269,0,0,1,4.518-4.707,12.089,12.089,0,0,1,6.3-1.7,10.782,10.782,0,0,1,4.413.84,6.652,6.652,0,0,1,2.984,2.563l2.227-11.641H98.6ZM81.71-11.362a6.366,6.366,0,0,0,3.446-.946,6.394,6.394,0,0,0,2.353-2.627,8.534,8.534,0,0,0,.84-3.866,4.9,4.9,0,0,0-1.366-3.656,5.187,5.187,0,0,0-3.8-1.345,6.366,6.366,0,0,0-3.446.946,6.394,6.394,0,0,0-2.353,2.627,8.534,8.534,0,0,0-.84,3.866,4.9,4.9,0,0,0,1.366,3.656A5.187,5.187,0,0,0,81.71-11.362Zm26.9,5.421a7.065,7.065,0,0,1-4.917-1.6,5.7,5.7,0,0,1-1.765-4.455,11.91,11.91,0,0,1,.21-2.059l4.707-23.408H113.4L108.732-14.22a3.989,3.989,0,0,0-.084.925,2.034,2.034,0,0,0,.609,1.6,2.461,2.461,0,0,0,1.7.546,4.544,4.544,0,0,0,1.849-.336l-.672,5A11.349,11.349,0,0,1,108.606-5.941Zm20.13-23.281a11.26,11.26,0,0,1,7.8,2.648q2.963,2.648,2.963,7.564,0,.84-.042,1.261l-17.44,3.194q.882,3.362,5.673,3.362a10.3,10.3,0,0,0,3.32-.525,7.38,7.38,0,0,0,2.69-1.576l2.732,4.328A13.044,13.044,0,0,1,132.1-6.7a17.2,17.2,0,0,1-5.127.756,14.182,14.182,0,0,1-6.115-1.24,9.171,9.171,0,0,1-4.034-3.551,10.054,10.054,0,0,1-1.408-5.337,13.576,13.576,0,0,1,1.681-6.745,12.029,12.029,0,0,1,4.728-4.707A13.931,13.931,0,0,1,128.736-29.222Zm-.294,4.917a5.954,5.954,0,0,0-4.307,1.6,7.739,7.739,0,0,0-2.164,4.286l11.431-2.1a4.016,4.016,0,0,0-1.576-2.795A5.506,5.506,0,0,0,128.441-24.305Z"
          transform="translate(88 261)"
          fill="url(#linear-gradient)"
        />
        <line
          y1="1"
          x2="110.02"
          transform="translate(90.335 234.5)"
          fill="none"
          stroke="#000"
          strokeWidth="1"
        />
        <line
          y1="1"
          x2="110.02"
          transform="translate(90.335 237.5)"
          fill="none"
          stroke="#000"
          strokeWidth="1"
        />
        <line
          y1="1"
          x2="110.02"
          transform="translate(90.335 240.5)"
          fill="none"
          stroke="#000"
          strokeWidth="1"
        />
        <line
          y1="1"
          x2="110.02"
          transform="translate(90.335 243.5)"
          fill="none"
          stroke="#000"
          strokeWidth="1"
        />
        <line
          y1="1"
          x2="110.02"
          transform="translate(90.335 246.5)"
          fill="none"
          stroke="#000"
          strokeWidth="1"
        />
        <line
          y1="1"
          x2="110.02"
          transform="translate(89.335 249.5)"
          fill="none"
          stroke="#000"
          strokeWidth="1"
        />
      </g>
    </svg>
  );
}
