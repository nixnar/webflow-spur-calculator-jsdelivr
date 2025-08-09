import React from "react";

const EntryBadge = ({ name, className }) => {
  if (name === "members") {
    return (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M16 21.2V19.2C16 18.1391 15.5786 17.1217 14.8284 16.3715C14.0783 15.6214 13.0609 15.2 12 15.2H6C4.93913 15.2 3.92172 15.6214 3.17157 16.3715C2.42143 17.1217 2 18.1391 2 19.2V21.2M22 21.1998V19.1998C21.9993 18.3136 21.7044 17.4526 21.1614 16.7521C20.6184 16.0517 19.8581 15.5514 19 15.3298M16 3.32983C16.8604 3.55014 17.623 4.05053 18.1676 4.75214C18.7122 5.45375 19.0078 6.31666 19.0078 7.20483C19.0078 8.093 18.7122 8.95591 18.1676 9.65752C17.623 10.3591 16.8604 10.8595 16 11.0798M13 7.19995C13 9.40909 11.2091 11.2 9 11.2C6.79086 11.2 5 9.40909 5 7.19995C5 4.99081 6.79086 3.19995 9 3.19995C11.2091 3.19995 13 4.99081 13 7.19995Z"
          stroke="#18181B"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (name === "hours") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        className={className}
      >
        <g clip-path="url(#clip0_536_4222)">
          <path
            d="M12 6.19995V12.2L16 14.2M22 12.2C22 17.7228 17.5228 22.2 12 22.2C6.47715 22.2 2 17.7228 2 12.2C2 6.6771 6.47715 2.19995 12 2.19995C17.5228 2.19995 22 6.6771 22 12.2Z"
            stroke="#18181B"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_536_4222">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0 0.199951)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  } else if (name === "currentTestedPercentage") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        className={className}
      >
        <path
          d="M21 21.2L15 15.2M21 21.2V16.4M21 21.2H16.2M3 16.4V21.2M3 21.2H7.8M3 21.2L9 15.2M21 7.99995V3.19995M21 3.19995H16.2M21 3.19995L15 9.19995M3 7.99995V3.19995M3 3.19995H7.8M3 3.19995L9 9.19995"
          stroke="#18181B"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (name === "currentCoveragePercentage") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        className={className}
      >
        <g clip-path="url(#clip0_536_3959)">
          <path
            d="M12 8.19995V12.2M12 16.2H12.01M22 12.2C22 17.7228 17.5228 22.2 12 22.2C6.47715 22.2 2 17.7228 2 12.2C2 6.6771 6.47715 2.19995 12 2.19995C17.5228 2.19995 22 6.6771 22 12.2Z"
            stroke="#18181B"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_536_3959">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0 0.199951)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  } else if (name === "bugsMissedPercentage") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        className={className}
      >
        <g clip-path="url(#clip0_536_3407)">
          <path
            d="M7 20.862V19.2C7 18.6695 7.21071 18.1608 7.58579 17.7857C7.96086 17.4107 8.46957 17.2 9 17.2H15C15.5304 17.2 16.0391 17.4107 16.4142 17.7857C16.7893 18.1608 17 18.6695 17 19.2V20.862M22 12.2C22 17.7228 17.5228 22.2 12 22.2C6.47715 22.2 2 17.7228 2 12.2C2 6.6771 6.47715 2.19995 12 2.19995C17.5228 2.19995 22 6.6771 22 12.2ZM15 10.2C15 11.8568 13.6569 13.2 12 13.2C10.3431 13.2 9 11.8568 9 10.2C9 8.5431 10.3431 7.19995 12 7.19995C13.6569 7.19995 15 8.5431 15 10.2Z"
            stroke="#18181B"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_536_3407">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0 0.199951)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  } else if (name === "delaysInDays") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        className={className}
      >
        <g clip-path="url(#clip0_536_4658)">
          <path
            d="M8 2.19995V6.19995M16 2.19995V6.19995M3 10.2H21M8 14.2H8.01M12 14.2H12.01M16 14.2H16.01M8 18.2H8.01M12 18.2H12.01M16 18.2H16.01M5 4.19995H19C20.1046 4.19995 21 5.09538 21 6.19995V20.2C21 21.3045 20.1046 22.2 19 22.2H5C3.89543 22.2 3 21.3045 3 20.2V6.19995C3 5.09538 3.89543 4.19995 5 4.19995Z"
            stroke="#18181B"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_536_4658">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0 0.199951)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  } else if (name === "dollarSign") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
      >
        <g clip-path="url(#clip0_536_4751)">
          <path
            d="M12 2.19995V22.2M17 5.19995H9.5C8.57174 5.19995 7.6815 5.5687 7.02513 6.22508C6.36875 6.88145 6 7.77169 6 8.69995C6 9.62821 6.36875 10.5184 7.02513 11.1748C7.6815 11.8312 8.57174 12.2 9.5 12.2H14.5C15.4283 12.2 16.3185 12.5687 16.9749 13.2251C17.6313 13.8815 18 14.7717 18 15.7C18 16.6282 17.6313 17.5184 16.9749 18.1748C16.3185 18.8312 15.4283 19.2 14.5 19.2H6"
            stroke="#18181B"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_536_4751">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0 0.199951)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
};

export default EntryBadge;
