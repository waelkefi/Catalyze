import React from 'react';
import "./styles.css";
import { NavLink } from "react-router-dom";
function NavBar() {
 
  return (
     <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
         <NavLink className="navbar-brand"  to="/"><svg width="147" height="28" viewBox="0 0 147 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.2494 27.9961C10.1836 27.9961 6.79545 26.6584 4.07727 23.9751C1.35909 21.2958 0 17.9707 0 13.9961C0 10.0215 1.35909 6.69648 4.07727 4.01711C6.79545 1.33774 10.1874 -0.00387573 14.2494 -0.00387573C17.8481 -0.00387573 20.9415 1.0671 23.5295 3.21292C26.1175 5.35873 27.6986 8.10383 28.2653 11.4482H21.9752C21.3549 10.1685 20.3557 9.14001 18.9852 8.37061C17.6108 7.60121 16.0334 7.21457 14.2494 7.21457C11.9179 7.21457 9.97304 7.86025 8.40722 9.15547C6.84139 10.4507 6.05657 12.063 6.05657 14C6.05657 15.937 6.83756 17.5493 8.40722 18.8445C9.97304 20.1397 11.9217 20.7854 14.2494 20.7854C16.0373 20.7854 17.6146 20.3988 18.9852 19.6294C20.3557 18.86 21.3549 17.8315 21.9752 16.5518H28.2653C27.6948 19.9 26.1175 22.6451 23.5295 24.7871C20.9415 26.929 17.8481 28.0039 14.2494 28.0039V27.9961Z" fill="#F5DB69" />
        <path d="M34.3065 13.884C34.4137 13.9265 34.4137 14.0773 34.3065 14.1198L28.1006 16.6252L19.0081 20.2982L18.5832 20.4722L12.4768 22.939C10.9914 23.5382 9.32603 23.6078 7.83677 23.0163C7.82912 23.0163 7.81763 23.0085 7.80998 23.0047C6.63082 22.5291 5.62777 21.8486 4.76638 20.9826C4.36822 20.5882 4.02366 20.1629 3.72122 19.6874L8.3651 17.8161L8.61777 17.7117L9.20352 17.4758C12.362 16.2038 15.7501 15.4189 19.2149 15.1599L32.867 14.1353C33.0278 14.1237 33.0278 13.8879 32.867 13.8763L19.2608 12.8556C15.7769 12.5926 12.3696 11.8 9.19587 10.5164L8.63309 10.2883L8.36893 10.1839L3.72505 8.30101H3.71356C4.01601 7.82545 4.37588 7.38855 4.77404 6.98259C5.63543 6.11653 6.63848 5.44765 7.81763 4.98369L7.84443 4.97209C9.29158 4.39988 10.8957 4.40761 12.3352 4.99143L18.5908 7.52387L19.0426 7.70946L28.1198 11.3825L34.3142 13.8879L34.3065 13.884Z" fill="white" />
        <path d="M52.8607 22.5628C50.3335 22.5628 48.2251 21.7539 46.5354 20.1343C44.8457 18.5163 44 16.5051 44 14.1053C44 11.7056 44.8457 9.69434 46.5354 8.07639C48.2251 6.45683 50.3335 5.64786 52.8607 5.64786C55.0979 5.64786 57.0223 6.29536 58.6321 7.59036C60.242 8.88536 61.2229 10.5433 61.5781 12.5657H57.6675C57.2813 11.7919 56.6622 11.1716 55.8083 10.7064C54.9545 10.2411 53.9736 10.0077 52.8624 10.0077C51.4138 10.0077 50.2032 10.3978 49.2288 11.1796C48.2544 11.9614 47.7672 12.9366 47.7672 14.1053C47.7672 15.274 48.2544 16.2493 49.2288 17.0311C50.2032 17.8129 51.4138 18.203 52.8624 18.203C53.9736 18.203 54.9545 17.9696 55.8083 17.5043C56.6622 17.0391 57.2813 16.4188 57.6675 15.645H61.5781C61.2245 17.6674 60.242 19.3253 58.6321 20.6203C57.0223 21.9153 55.0996 22.5628 52.8607 22.5628Z" fill="white" />
        <path d="M72.6353 10.1964H76.0163V22.2783H72.6353V20.2174C71.7016 21.781 70.3492 22.5628 68.5797 22.5628C66.9209 22.5628 65.5375 21.9585 64.4263 20.7514C63.315 19.5428 62.7594 18.0383 62.7594 16.2381C62.7594 14.4379 63.315 12.9334 64.4263 11.7248C65.5375 10.5161 66.9209 9.91177 68.5797 9.91177C70.3508 9.91177 71.7016 10.6936 72.6353 12.2572V10.1964ZM67.167 17.8129C67.7698 18.2318 68.5308 18.4412 69.4481 18.4412C70.3655 18.4412 71.1264 18.2318 71.7293 17.8129C72.3322 17.394 72.6353 16.8696 72.6353 16.2381C72.6353 15.6066 72.3338 15.0822 71.7293 14.6633C71.1264 14.2444 70.3655 14.035 69.4481 14.035C68.5308 14.035 67.7698 14.2444 67.167 14.6633C66.5641 15.0822 66.261 15.6066 66.261 16.2381C66.261 16.8696 66.5624 17.3956 67.167 17.8129Z" fill="white" />
        <path d="M86.614 14.2236H83.2574V17.2085C83.2574 17.872 83.7234 18.203 84.6571 18.203H86.3712V22.2782H84.2465C81.3331 22.2782 79.8764 20.9273 79.8764 18.227V14.2236H77.6311V10.1963H79.8764V7.59034L83.2574 6.64227V10.1963H86.614V14.2236Z" fill="white" />
        <path d="M97.5034 10.1964H100.884V22.2783H97.5034V20.2174C96.5697 21.781 95.2173 22.5628 93.4478 22.5628C91.789 22.5628 90.4057 21.9585 89.2944 20.7514C88.1831 19.5428 87.6275 18.0383 87.6275 16.2381C87.6275 14.4379 88.1831 12.9334 89.2944 11.7248C90.4057 10.5161 91.789 9.91177 93.4478 9.91177C95.2189 9.91177 96.5697 10.6936 97.5034 12.2572V10.1964ZM92.0351 17.8129C92.6379 18.2318 93.3989 18.4412 94.3162 18.4412C95.2336 18.4412 95.9945 18.2318 96.5974 17.8129C97.2003 17.394 97.5034 16.8696 97.5034 16.2381C97.5034 15.6066 97.2019 15.0822 96.5974 14.6633C95.9945 14.2444 95.2336 14.035 94.3162 14.035C93.3989 14.035 92.6379 14.2444 92.0351 14.6633C91.4322 15.0822 91.1291 15.6066 91.1291 16.2381C91.1291 16.8696 91.4305 17.3956 92.0351 17.8129Z" fill="white" />
        <path d="M103.298 22.2782V5.22098H106.679V22.2782H103.298Z" fill="white" />
        <path d="M117.133 10.1964H121.043L115.031 26.7804H111.023L113.074 22.2798H112.132L107.762 10.1979H111.311L114.04 17.661H114.402L117.131 10.1979L117.133 10.1964Z" fill="white" />
        <path d="M146.998 16.3324C146.998 16.7433 146.966 17.0743 146.902 17.3269H137.124C137.639 18.4172 138.742 18.9608 140.432 18.9608C141.043 18.9608 141.612 18.8905 142.135 18.7482C142.658 18.6059 143.024 18.4396 143.233 18.251H146.831C146.396 19.546 145.587 20.5884 144.404 21.3781C143.221 22.1679 141.858 22.5628 140.311 22.5628C138.411 22.5628 136.823 21.9585 135.544 20.7514C134.265 19.5428 133.624 18.0383 133.624 16.2381C133.624 14.4379 134.265 12.9334 135.544 11.7248C136.823 10.5161 138.413 9.91177 140.311 9.91177C142.21 9.91177 143.819 10.5193 145.092 11.736C146.363 12.9526 147 14.4843 147 16.3324H146.998ZM140.31 13.5138C139.568 13.5138 138.917 13.6561 138.354 13.9407C137.791 14.2253 137.38 14.6201 137.123 15.1254H143.546C143.305 14.6201 142.894 14.2253 142.314 13.9407C141.734 13.6561 141.066 13.5138 140.31 13.5138Z" fill="white" />
        <path d="M127.432 18.3101H132.743V22.3614H121.977V19.4772L127.118 14.2572H122.075V10.2059H132.573V13.0901L127.432 18.3101Z" fill="white" />
      </svg>
      </NavLink>
      <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#about" >About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link"  href="#x">What We Do</a>
          </li>
          <li className="nav-item">
            <a className="nav-link"  href="#y">How We Proceed</a>
          </li>
        </ul>
        <button className="navButton">Book A Call</button>
      </div>
    </div>
   
     </nav>
  );
}

export default NavBar;
