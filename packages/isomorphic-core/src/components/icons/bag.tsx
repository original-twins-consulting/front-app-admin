export default function BagIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_4008_27983)">
        <path
          d="M0.782486 17.8777L1.02013 18.0563C1.44612 18.3757 1.96711 18.546 2.49477 18.546C2.61876 18.546 2.7431 18.5346 2.86675 18.5153C3.31375 19.412 4.23276 20 5.24707 20H14.6434C15.6714 20 16.5934 19.405 17.0358 18.495C17.0601 18.5001 17.0828 18.509 17.1074 18.5134C17.2398 18.5354 17.3734 18.5464 17.5064 18.5464C18.0337 18.5464 18.5551 18.3761 18.9804 18.0567L19.2184 17.8781C19.5154 17.6554 19.7341 17.3514 19.8514 16.9994C19.9991 16.5567 19.9718 16.08 19.7744 15.657L17.6911 11.1924C17.6195 11.0391 17.4441 10.9637 17.2835 11.0171L16.5875 11.2491L15.9425 5.95973L15.9345 5.96075C15.9364 5.58543 15.8691 5.20741 15.7301 4.84577L14.9181 2.73513C14.6724 2.09613 14.0471 1.66681 13.3625 1.66681H11.9148C11.7555 0.722321 10.9342 0 9.94484 0C8.9555 0 8.13449 0.722321 7.97486 1.66664H6.52716C5.84252 1.66664 5.21747 2.09596 4.97152 2.73496L4.15983 4.84566C4.02048 5.20764 3.95348 5.58532 3.95517 5.96063L3.94687 5.95962L3.30623 11.2136L2.71655 11.0169C2.55488 10.9636 2.38089 11.0389 2.30887 11.1923L0.225507 15.657C0.0281918 16.08 0.000851251 16.5566 0.148513 16.9993C0.266518 17.3513 0.485525 17.655 0.782486 17.8777ZM19.1705 15.9383C19.2955 16.2063 19.3129 16.5076 19.2192 16.7879C19.1449 17.011 19.0062 17.2033 18.8185 17.344L18.5806 17.5226C18.1922 17.8139 17.6949 17.9349 17.2169 17.8553C16.7119 17.7713 16.3199 17.3569 16.2632 16.8483L15.7499 12.2306L17.2126 11.7433L19.1705 15.9383ZM14.2962 2.97402L15.1079 5.08466C15.3972 5.83664 15.2902 6.67668 14.8219 7.33235C14.4552 7.846 13.8942 8.18968 13.2785 8.29599V7.57401C13.4769 7.45832 13.6119 7.24569 13.6119 7.00002V6.33334C13.6119 6.08768 13.4769 5.875 13.2785 5.75936V2.33298H13.3629C13.7735 2.33298 14.1485 2.59069 14.2962 2.97402ZM11.2785 8.33299H8.61182V7.57367C8.81015 7.45798 8.94516 7.24536 8.94516 6.99969V6.33301C8.94516 6.08734 8.81015 5.87466 8.61182 5.75902V2.33298H11.2785V5.75897C11.0802 5.87466 10.9451 6.08728 10.9451 6.33295V6.99963C10.9451 7.2453 11.0802 7.45798 11.2785 7.57361V8.33299ZM6.94518 6.99997V6.33295H8.27854V6.99963L6.94518 6.99997ZM7.94514 5.66633H7.27846V2.33298H7.94514V5.66633ZM7.27852 7.66631H7.9452V10.195L7.61186 10.5283L7.27852 10.195V7.66631ZM11.6118 6.99997V6.33295H12.9452V6.99963L11.6118 6.99997ZM12.6118 5.66633H11.9452V2.33298H12.6118V5.66633ZM11.9452 7.66631H12.6118V10.195L12.2785 10.5283L11.9452 10.195V7.66631ZM9.94518 0.666341C10.5645 0.666341 11.0822 1.093 11.2312 1.66636H8.65916C8.80818 1.093 9.32584 0.666341 9.94518 0.666341ZM4.78251 5.08432L5.5942 2.97368C5.74186 2.59035 6.11689 2.3327 6.5275 2.3327H6.61184V5.75869C6.41351 5.87437 6.2785 6.087 6.2785 6.33267V6.99935C6.2785 7.24502 6.41351 7.4577 6.61184 7.57333V8.29531C5.99617 8.189 5.43518 7.84532 5.06851 7.33133C4.60016 6.67668 4.49317 5.8363 4.78251 5.08432ZM4.42448 7.557C4.45849 7.61135 4.48849 7.66699 4.52582 7.71935C5.01716 8.40733 5.7805 8.85969 6.61184 8.97137V10.333C6.61184 10.4214 6.64686 10.5063 6.70951 10.5687L7.37619 11.2354C7.44121 11.3004 7.5265 11.333 7.61186 11.333C7.69721 11.333 7.78251 11.3004 7.84753 11.2354L8.51421 10.5687C8.57686 10.5061 8.61188 10.4214 8.61188 10.333V8.99967H11.2785V10.333C11.2785 10.4214 11.3136 10.5063 11.3762 10.5687L12.0429 11.2354C12.1079 11.3004 12.1932 11.333 12.2786 11.333C12.3639 11.333 12.4492 11.3004 12.5142 11.2354L13.1809 10.5687C13.2436 10.5061 13.2786 10.4214 13.2786 10.333V8.97137C14.1096 8.86003 14.8733 8.40772 15.3643 7.71969C15.4019 7.66704 15.4319 7.61135 15.4659 7.557L15.9426 11.464L15.2839 11.6837C15.1349 11.7333 15.0409 11.8803 15.0583 12.0367L15.6013 16.922C15.6623 17.473 15.976 17.949 16.4223 18.2396C16.084 18.9027 15.4017 19.333 14.6436 19.333H5.24719C4.51419 19.333 3.84384 18.9253 3.4962 18.2936C3.98754 18.0106 4.33551 17.5073 4.40053 16.922L4.94322 12.0367C4.96056 11.8804 4.86656 11.7333 4.71755 11.6837L3.95252 11.4287L4.42448 7.557ZM0.830501 15.9383L2.78851 11.743L4.25118 12.2303L3.7382 16.848C3.68154 17.3567 3.28951 17.771 2.78484 17.855C2.3052 17.9343 1.80883 17.8133 1.42086 17.5223L1.18322 17.3437C0.995222 17.203 0.856542 17.0103 0.782203 16.7877C0.68815 16.508 0.705492 16.2063 0.830501 15.9383Z"
          fill="currentColor"
        />
        <path
          d="M7.94518 18.6667H11.9452C12.6805 18.6667 13.2786 18.0688 13.2786 17.3334V14.6667L13.6786 15.2L14.2119 14.8L13.2786 13.5557V13.3334C13.2786 12.598 12.6806 12 11.9452 12H7.94518C7.20986 12 6.61182 12.598 6.61182 13.3334V17.3334C6.61187 18.0688 7.20986 18.6667 7.94518 18.6667ZM7.27855 13.3334C7.27855 12.9657 7.57755 12.6667 7.94523 12.6667H11.9453C12.3129 12.6667 12.6119 12.9657 12.6119 13.3334V17.3334C12.6119 17.7011 12.3129 18.0001 11.9453 18.0001H7.94518C7.57749 18.0001 7.2785 17.7011 7.2785 17.3334L7.27855 13.3334Z"
          fill="currentColor"
        />
        <path
          d="M7.94531 13.666H11.9453V14.3327H7.94531V13.666Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_4008_27983">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}