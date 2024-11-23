// import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import "./banner.css";
// const imageurl = [
//   {
//     id: 1,
//     src: "https://img.freepik.com/free-photo/checking-data-laptop_1098-17026.jpg?t=st=1731740112~exp=1731743712~hmac=e34c4cbb83b7e3d70bbbd0da5175e7e7caae7aa58439b404d9f200b0bcbf6643&w=1060",
//   },
//   {
//     id: 2,
//     src: "https://img.freepik.com/free-photo/crop-man-working-office_23-2147772273.jpg?t=st=1731740140~exp=1731743740~hmac=3ab059ef65d2e7b7865ec579bc0b456bc8ba84c431d714e9fb2592501ffdaaa2&w=1060",
//   },
//   {
//     id: 3,
//     src: "https://img.freepik.com/free-photo/view-office-desk-with-messy-workspace-laptop_23-2150282090.jpg?t=st=1731740160~exp=1731743760~hmac=3501ea130811778644181e267463576f4994bc6b0d6765b56744745874eeb521&w=1060",
//   },
// ];
// const Banner = () => {
//   const [bgimage, setbgimage] = useState(
//     "linear-gradient(to bottom, rgba(248, 210, 0, 1), rgba(248, 210, 0, 1))"
//   );
//   const [ishide, sethide] = useState(false);
//   const handlemouveenter = (imageurl) => {
//     setbgimage(`bg-[${imageurl}]`);
//     sethide(true);
//   };
//   const handlemovueleave = () => {
//     setbgimage(
//       "linear-gradient(to bottom, rgba(248, 210, 0, 1), rgba(248, 210, 0, 1))"
//     );
//     sethide(false);
//   };
//   return (
//     <div
//       id="para-banner_bg-img"
//       className="pt-[105] slide0 box wishlist"
//       style={{ backgroundImage: bgimage }}
//     >
      // <div
      //   id="gun-icon"
      //   className={`icon guns one ${ishide ? "hidden" : "block"} `}
      // >
      //   <img
      //     src="https://socialpanga.com/wp-content/themes/socialpanga/assets/images/home/banner1/gun.svg"
      //     className="img1"
      //     alt=""
      //   />
      //   <img
      //     src="https://socialpanga.com/wp-content/themes/socialpanga/assets/images/home/banner1/bullet-trials.svg"
      //     className="img2"
      //     width={200}
      //     height={200}
      //     alt=""
      //   />
      //   <img
      //     src="https://socialpanga.com/wp-content/themes/socialpanga/assets/images/home/banner1/bullet.svg"
      //     className="img3"
      //     width={200}
      //     height={200}
      //     alt=""
      //   />
      // </div>
      // <div
      //   id="coffee-icon"
      //   className={`icon icon_two ${ishide ? "hidden" : "block"} `}
      // >
      //   <img
      //     src="https://socialpanga.com/wp-content/themes/socialpanga/assets/images/home/banner1/coffee-cup.svg"
      //     className="cofffe_img"
      //     width={114}
      //     height={200}
      //     alt=""
      //   />
      //   <svg
      //     xmlns="http://www.w3.org/2000/svg"
      //     className="coffee-flames"
      //     viewBox="0 0 62.69 130.63"
      //   >
      //     <defs />
      //     <style
      //       dangerouslySetInnerHTML={{
      //         __html:
      //           ".cls-1 {fill: #f15c22;stroke: #f15c22;}.cls - 2 {fill: white; stroke: white;}",
      //       }}
      //     />
      //     <g id="flame1">
      //       <path
      //         className="cls-1"
      //         d="M17.19,45.72a47.55,47.55,0,0,0-7.58,6.37,39.63,39.63,0,0,0-5.68,7.29A26.88,26.88,0,0,0,.27,69.12a22.06,22.06,0,0,0-.11,6.09,23.6,23.6,0,0,0,1.73,6.43,101.2,101.2,0,0,0,4.82,9.61,128.2,128.2,0,0,1,6.33,12,24.57,24.57,0,0,1,1.59,5.2,15.31,15.31,0,0,1,.08,5A17.36,17.36,0,0,1,13,118.54a30.18,30.18,0,0,1-4.09,6,3.16,3.16,0,1,0,4.81,4.09,37,37,0,0,0,4.92-7.24,23.43,23.43,0,0,0,2.3-7,22.4,22.4,0,0,0-.58-9.3,37.83,37.83,0,0,0-2.44-6.42c-1.49-3.14-3.3-6.21-5.1-9.41A102.19,102.19,0,0,1,7.7,79.17a17.13,17.13,0,0,1-1.28-4.71,15.91,15.91,0,0,1,.09-4.37,20.59,20.59,0,0,1,2.83-7.47,36.76,36.76,0,0,1,7.25-8.46c1.16-1,2.18-1.82,2.91-2.35.36-.27.65-.47.84-.6l.21-.14,0,0h0L19.9,50,20.6,51h0L19.9,50,20.6,51a3.16,3.16,0,0,0-3.41-5.32Z"
      //       ></path>
      //       <path
      //         className="cls-2"
      //         d="M23,46.62A47.55,47.55,0,0,0,15.4,53a39.63,39.63,0,0,0-5.68,7.29A27.07,27.07,0,0,0,6.06,70,22.46,22.46,0,0,0,6,76.11a23.28,23.28,0,0,0,1.74,6.43,98.89,98.89,0,0,0,4.81,9.61,128.2,128.2,0,0,1,6.33,11.95,24.57,24.57,0,0,1,1.59,5.2,15.31,15.31,0,0,1,.08,5,17.08,17.08,0,0,1-1.71,5.13,30.18,30.18,0,0,1-4.09,6,3.16,3.16,0,1,0,4.81,4.09,37.3,37.3,0,0,0,4.92-7.24,23.53,23.53,0,0,0,2.3-7,22.4,22.4,0,0,0-.58-9.3,37.83,37.83,0,0,0-2.44-6.42c-1.49-3.14-3.3-6.21-5.1-9.41a102.19,102.19,0,0,1-5.12-10.08,17.13,17.13,0,0,1-1.28-4.71A15.91,15.91,0,0,1,12.3,71a20.59,20.59,0,0,1,2.83-7.47,36.76,36.76,0,0,1,7.25-8.46c1.16-1,2.19-1.82,2.91-2.35.36-.27.65-.47.84-.6l.21-.14,0,0h0l-.7-1.08.7,1.09h0l-.7-1.08.7,1.09A3.16,3.16,0,0,0,23,46.62Z"
      //       ></path>
      //     </g>
      //     <g id="flame2">
      //       <path
      //         className="cls-1"
      //         d="M52,.5a47.55,47.55,0,0,0-7.58,6.37,40.35,40.35,0,0,0-5.69,7.28,27.18,27.18,0,0,0-3.65,9.75A22,22,0,0,0,35,30a23.76,23.76,0,0,0,1.73,6.44A102.4,102.4,0,0,0,41.56,46,129.41,129.41,0,0,1,47.89,58a24.65,24.65,0,0,1,1.59,5.21,15,15,0,0,1,.07,5,17,17,0,0,1-1.7,5.13,30.77,30.77,0,0,1-4.09,6,3.16,3.16,0,1,0,4.81,4.09,37.05,37.05,0,0,0,4.92-7.25,23.38,23.38,0,0,0,2.3-7,22.4,22.4,0,0,0-.58-9.3,39.13,39.13,0,0,0-2.44-6.43c-1.49-3.13-3.3-6.21-5.1-9.4a101.27,101.27,0,0,1-5.12-10.09,17.07,17.07,0,0,1-1.28-4.7,16.32,16.32,0,0,1,.08-4.37,20.8,20.8,0,0,1,2.84-7.47,37,37,0,0,1,7.25-8.47c1.16-1,2.18-1.82,2.91-2.35L55.19,6l.21-.15,0,0h0l-.7-1.08.7,1.08h0l-.7-1.08.7,1.08A3.16,3.16,0,0,0,52,.5Z"
      //       ></path>
      //       <path
      //         className="cls-2"
      //         d="M57.83,1.4a47.55,47.55,0,0,0-7.58,6.37,39.88,39.88,0,0,0-5.68,7.28,26.93,26.93,0,0,0-3.66,9.75,22,22,0,0,0-.11,6.08,23.6,23.6,0,0,0,1.73,6.43,101.41,101.41,0,0,0,4.82,9.62,129.41,129.41,0,0,1,6.33,11.94,24.65,24.65,0,0,1,1.59,5.21,15.31,15.31,0,0,1,.08,5,17.45,17.45,0,0,1-1.71,5.13,30.77,30.77,0,0,1-4.09,6,3.16,3.16,0,1,0,4.81,4.09,37.05,37.05,0,0,0,4.92-7.25,23.38,23.38,0,0,0,2.3-7,22.4,22.4,0,0,0-.58-9.3,37.93,37.93,0,0,0-2.44-6.43c-1.49-3.13-3.3-6.21-5.1-9.4a101.27,101.27,0,0,1-5.12-10.09,17,17,0,0,1-1.28-4.71,15.85,15.85,0,0,1,.09-4.36A20.59,20.59,0,0,1,50,18.3a36.82,36.82,0,0,1,7.25-8.47c1.16-1,2.18-1.82,2.91-2.35L61,6.89l.21-.15,0,0h0l-.7-1.08.7,1.08h0l-.7-1.08.7,1.08A3.16,3.16,0,0,0,57.83,1.4Z"
      //       ></path>
      //     </g>
      //   </svg>
      // </div>
//       <ul className="case-study">
//         <li>
//           we are
//           <Link
//             to="#"
//             className="hover-target one_data "
//             id="target-element"
//             // data-image="https://img.freepik.com/free-photo/checking-data-laptop_1098-17026.jpg?t=st=1731740112~exp=1731743712~hmac=e34c4cbb83b7e3d70bbbd0da5175e7e7caae7aa58439b404d9f200b0bcbf6643&w=1060"
//             onMouseEnter={() =>
//               handlemouveenter(
//                 "https://img.freepik.com/free-photo/checking-data-laptop_1098-17026.jpg"
//               )
//             }
//             onMouseLeave={handlemovueleave}
//           >
//             Marketing Mafias
//           </Link>
//         </li>
//         <li className="font_data">
//           Skilled enough to know
//           <Link
//             to="#"
//             className="hover-target two_data font_data"
//             // data-image="https://img.freepik.com/free-photo/crop-man-working-office_23-2147772273.jpg?t=st=1731740140~exp=1731743740~hmac=3ab059ef65d2e7b7865ec579bc0b456bc8ba84c431d714e9fb2592501ffdaaa2&w=1060"
//             onMouseEnter={() =>
//               handlemouveenter(
//                 "https://img.freepik.com/free-photo/crop-man-working-office_23-2147772273.jpg"
//               )
//             }
//             onMouseLeave={handlemovueleave}
//           >
//             better
//           </Link>
//         </li>
//         <li className="font_data">
//           Wild enough to think
//           <Link
//             to="#"
//             className="hover-target three_data font_data"
//             // data-image="https://img.freepik.com/free-photo/view-office-desk-with-messy-workspace-laptop_23-2150282090.jpg?t=st=1731740160~exp=1731743760~hmac=3501ea130811778644181e267463576f4994bc6b0d6765b56744745874eeb521&w=1060"
//             onMouseEnter={() =>
//               handlemouveenter(
//                 "https://img.freepik.com/free-photo/view-office-desk-with-messy-workspace-laptop_23-2150282090.jpg"
//               )
//             }
//             onMouseLeave={handlemovueleave}
//           >
//             bigger
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Banner;
import React, { useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./banner.css";

const Banner = () => {
  const [bgimage, setbgimage] = useState("linear-gradient(to bottom, rgba(248, 210, 0, 1), rgba(248, 210, 0, 1))");
  const [ishide, sethide] = useState(false);

  const handlemouveenter = useCallback((imageurl) => {
    setbgimage(`url(${imageurl})`);
    sethide(true);
  }, []);

  const handlemovueleave = useCallback(() => {
    setbgimage("linear-gradient(to bottom, rgba(248, 210, 0, 1), rgba(248, 210, 0, 1))");
    sethide(false);
  }, []);

  const images = [
    "https://img.freepik.com/free-photo/checking-data-laptop_1098-17026.jpg",
    "https://img.freepik.com/free-photo/crop-man-working-office_23-2147772273.jpg",
    "https://img.freepik.com/free-photo/view-office-desk-with-messy-workspace-laptop_23-2150282090.jpg"
  ];

  return (
    <div id="para-banner_bg-img" className="-z-10 pt-[50px] md:pt-[105px] slide0 box wishlist" style={{ backgroundImage: bgimage }}>
      <div
        id="gun-icon"
        className={`icon guns one ${ishide ? "hidden" : "block"} `}
      >
        <img
          src="https://socialpanga.com/wp-content/themes/socialpanga/assets/images/home/banner1/gun.svg"
          className="img1"
          alt=""
        />
        <img
          src="https://socialpanga.com/wp-content/themes/socialpanga/assets/images/home/banner1/bullet-trials.svg"
          className="img2"
          width={200}
          height={200}
          alt=""
        />
        <img
          src="https://socialpanga.com/wp-content/themes/socialpanga/assets/images/home/banner1/bullet.svg"
          className="img3"
          width={200}
          height={200}
          alt=""
        />
      </div>
      <div
        id="coffee-icon"
        className={`icon icon_two ${ishide ? "hidden" : "block"} `}
      >
        <img
          src="https://socialpanga.com/wp-content/themes/socialpanga/assets/images/home/banner1/coffee-cup.svg"
          className="cofffe_img"
          width={114}
          height={200}
          alt=""
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="coffee-flames"
          viewBox="0 0 62.69 130.63"
        >
          <defs />
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".cls-1 {fill: #f15c22;stroke: #f15c22;}.cls-2 {fill: #fff; stroke: #fff;}",
            }}
          />
          <g id="flame1">
            <path
              className="cls-1"
              d="M17.19,45.72a47.55,47.55,0,0,0-7.58,6.37,39.63,39.63,0,0,0-5.68,7.29A26.88,26.88,0,0,0,.27,69.12a22.06,22.06,0,0,0-.11,6.09,23.6,23.6,0,0,0,1.73,6.43,101.2,101.2,0,0,0,4.82,9.61,128.2,128.2,0,0,1,6.33,12,24.57,24.57,0,0,1,1.59,5.2,15.31,15.31,0,0,1,.08,5A17.36,17.36,0,0,1,13,118.54a30.18,30.18,0,0,1-4.09,6,3.16,3.16,0,1,0,4.81,4.09,37,37,0,0,0,4.92-7.24,23.43,23.43,0,0,0,2.3-7,22.4,22.4,0,0,0-.58-9.3,37.83,37.83,0,0,0-2.44-6.42c-1.49-3.14-3.3-6.21-5.1-9.41A102.19,102.19,0,0,1,7.7,79.17a17.13,17.13,0,0,1-1.28-4.71,15.91,15.91,0,0,1,.09-4.37,20.59,20.59,0,0,1,2.83-7.47,36.76,36.76,0,0,1,7.25-8.46c1.16-1,2.18-1.82,2.91-2.35.36-.27.65-.47.84-.6l.21-.14,0,0h0L19.9,50,20.6,51h0L19.9,50,20.6,51a3.16,3.16,0,0,0-3.41-5.32Z"
            ></path>
            <path
              className="cls-2"
              d="M23,46.62A47.55,47.55,0,0,0,15.4,53a39.63,39.63,0,0,0-5.68,7.29A27.07,27.07,0,0,0,6.06,70,22.46,22.46,0,0,0,6,76.11a23.28,23.28,0,0,0,1.74,6.43,98.89,98.89,0,0,0,4.81,9.61,128.2,128.2,0,0,1,6.33,11.95,24.57,24.57,0,0,1,1.59,5.2,15.31,15.31,0,0,1,.08,5,17.08,17.08,0,0,1-1.71,5.13,30.18,30.18,0,0,1-4.09,6,3.16,3.16,0,1,0,4.81,4.09,37.3,37.3,0,0,0,4.92-7.24,23.53,23.53,0,0,0,2.3-7,22.4,22.4,0,0,0-.58-9.3,37.83,37.83,0,0,0-2.44-6.42c-1.49-3.14-3.3-6.21-5.1-9.41a102.19,102.19,0,0,1-5.12-10.08,17.13,17.13,0,0,1-1.28-4.71A15.91,15.91,0,0,1,12.3,71a20.59,20.59,0,0,1,2.83-7.47,36.76,36.76,0,0,1,7.25-8.46c1.16-1,2.19-1.82,2.91-2.35.36-.27.65-.47.84-.6l.21-.14,0,0h0l-.7-1.08.7,1.09h0l-.7-1.08.7,1.09A3.16,3.16,0,0,0,23,46.62Z"
            ></path>
          </g>
          <g id="flame2">
            <path
              className="cls-1"
              d="M52,.5a47.55,47.55,0,0,0-7.58,6.37,40.35,40.35,0,0,0-5.69,7.28,27.18,27.18,0,0,0-3.65,9.75A22,22,0,0,0,35,30a23.76,23.76,0,0,0,1.73,6.44A102.4,102.4,0,0,0,41.56,46,129.41,129.41,0,0,1,47.89,58a24.65,24.65,0,0,1,1.59,5.21,15,15,0,0,1,.07,5,17,17,0,0,1-1.7,5.13,30.77,30.77,0,0,1-4.09,6,3.16,3.16,0,1,0,4.81,4.09,37.05,37.05,0,0,0,4.92-7.25,23.38,23.38,0,0,0,2.3-7,22.4,22.4,0,0,0-.58-9.3,39.13,39.13,0,0,0-2.44-6.43c-1.49-3.13-3.3-6.21-5.1-9.4a101.27,101.27,0,0,1-5.12-10.09,17.07,17.07,0,0,1-1.28-4.7,16.32,16.32,0,0,1,.08-4.37,20.8,20.8,0,0,1,2.84-7.47,37,37,0,0,1,7.25-8.47c1.16-1,2.18-1.82,2.91-2.35L55.19,6l.21-.15,0,0h0l-.7-1.08.7,1.08h0l-.7-1.08.7,1.08A3.16,3.16,0,0,0,52,.5Z"
            ></path>
            <path
              className="cls-2"
              d="M57.83,1.4a47.55,47.55,0,0,0-7.58,6.37,39.88,39.88,0,0,0-5.68,7.28,26.93,26.93,0,0,0-3.66,9.75,22,22,0,0,0-.11,6.08,23.6,23.6,0,0,0,1.73,6.43,101.41,101.41,0,0,0,4.82,9.62,129.41,129.41,0,0,1,6.33,11.94,24.65,24.65,0,0,1,1.59,5.21,15.31,15.31,0,0,1,.08,5,17.45,17.45,0,0,1-1.71,5.13,30.77,30.77,0,0,1-4.09,6,3.16,3.16,0,1,0,4.81,4.09,37.05,37.05,0,0,0,4.92-7.25,23.38,23.38,0,0,0,2.3-7,22.4,22.4,0,0,0-.58-9.3,37.93,37.93,0,0,0-2.44-6.43c-1.49-3.13-3.3-6.21-5.1-9.4a101.27,101.27,0,0,1-5.12-10.09,17,17,0,0,1-1.28-4.71,15.85,15.85,0,0,1,.09-4.36A20.59,20.59,0,0,1,50,18.3a36.82,36.82,0,0,1,7.25-8.47c1.16-1,2.18-1.82,2.91-2.35L61,6.89l.21-.15,0,0h0l-.7-1.08.7,1.08h0l-.7-1.08.7,1.08A3.16,3.16,0,0,0,57.83,1.4Z"
            ></path>
          </g>
        </svg>
      </div>

      <ul className="case-study">
        <li>we are
          <Link to="#" className="pl-3 hover-target one_data" onMouseEnter={() => handlemouveenter(images[0])} onMouseLeave={handlemovueleave}>
            Marketing Mafias
          </Link>
        </li>
        <li className="font_data">Skilled enough to know
          <Link to="#" className="pl-1 hover-target two_data font_data" onMouseEnter={() => handlemouveenter(images[1])} onMouseLeave={handlemovueleave}>
            better
          </Link>
        </li>
        <li className="font_data">Wild enough to think
          <Link to="#" className="pl-2 hover-target three_data font_data" onMouseEnter={() => handlemouveenter(images[2])} onMouseLeave={handlemovueleave}>
            bigger
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Banner;
