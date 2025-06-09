import {
  CalendarCheck,
  UserPlus,
  Stethoscope,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CardStats() {
  return (
    <div className="relative flex flex-col items-center gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:items-stretch">
      {/* Card 1 */}
      <Link to={"/appointments/list"}>
        <div className="w-[450px] sm:w-auto bg-cyan-600 relative text-white rounded-2xl p-5 shadow-sm flex flex-col justify-between">
          <div className="absolute top-0 right-0 opacity-20 pointer-events-none">
            <svg  width="80" height="68" viewBox="0 0 77 68"  xmlns="http://www.w3.org/2000/svg">
            <path d="M60.9689 67.2629C59.4871 67.2697 54.2484 66.658 49.1753 65.8853C43.2224 64.9794 38.6704 63.9571 32.8506 62.2197C28.7524 60.9966 25.9996 60.025 23.4204 58.8919C22.9005 58.6644 22.3983 58.4463 22.3083 58.4114C22.1642 58.3527 22.1748 58.3019 22.4205 57.9153C23.0051 56.9946 22.9671 56.5302 21.7549 49.9558C20.6692 44.0673 20.752 44.5906 20.9345 44.7666C21.0462 44.8351 22.0528 46.0617 23.2355 47.461C26.6485 51.5111 26.9918 51.862 27.7753 52.1026C28.3144 52.2672 29.007 52.2267 29.6455 51.9885C30.1224 51.8099 30.7757 51.1838 31.0336 50.6477C31.3217 50.0579 31.4414 48.6878 31.5998 44.1358C31.6337 43.1674 31.6816 42.3638 31.7062 42.3507C31.7062 42.3507 32.462 42.8093 33.3299 43.3994C36.6004 45.6207 40.2161 48.0368 40.8295 48.4117C41.8683 49.0485 42.7264 49.0772 43.7575 48.5149C44.5484 48.0864 45.0353 47.4134 45.1475 46.6064C45.2175 46.0875 44.8461 44.0209 43.5829 37.9658C42.384 32.218 42.017 30.2928 42.1339 30.3683C42.273 30.4598 44.6624 33.3149 48.819 38.3606C52.6319 42.9895 55.4165 46.331 56.2642 47.2946C56.7811 47.8841 56.929 48.0063 57.363 48.1855C57.6844 48.3229 58.0517 48.3908 58.3987 48.3868C58.8918 48.3801 58.995 48.3478 59.66 47.9939C60.2865 47.6597 60.4364 47.5807 60.6837 47.2082C61.1699 46.5581 61.2245 46.2055 61.0807 44.5482C60.9832 43.4036 60.5636 39.5258 60.297 37.2815C60.2741 37.083 60.467 37.191 62.3636 38.5332C64.6405 40.132 65.494 40.6808 65.8631 40.7861C65.9947 40.8214 66.3608 40.8448 66.6731 40.8291C67.7457 40.7774 68.8296 39.9974 69.1479 39.0303C69.3081 38.5537 69.2508 36.253 68.9425 30.4338C68.8438 28.5674 68.7473 26.4207 68.7286 25.6631L68.695 24.2851L68.9582 24.4686C69.1004 24.566 70.3377 25.5773 71.7056 26.7109C74.6737 29.1715 74.9835 29.3972 75.6174 29.5632L76.1081 29.6933L76.0633 30.0333C75.9763 30.7041 75.4016 33.473 75.0269 35.0254C74.5472 37.0183 72.9603 42.2259 72.1259 44.5506C70.5582 48.9135 68.7919 53.1804 66.9024 57.1675C65.1352 60.8969 62.1122 66.5776 61.5895 67.1508C61.5191 67.1883 61.2628 67.2495 60.9689 67.2629ZM61.7611 31.3257C59.4086 29.6542 58.0892 28.78 57.7315 28.6565C57.3596 28.5234 56.5625 28.5413 56.0087 28.687C55.3564 28.8611 54.7134 29.4742 54.2959 30.3285C54.0814 30.7738 54.0893 31.4318 54.3556 34.0375C54.5556 35.9982 54.5727 36.415 54.4513 36.372C54.3403 36.3333 54.3095 36.2895 46.9683 27.3641C40.9459 20.0402 39.3071 18.0837 38.623 17.4034C38.1443 16.9282 37.6454 16.7543 36.8327 16.7797C36.3903 16.7969 36.2457 16.8363 35.6472 17.1623C35.0459 17.4846 34.9142 17.5525 34.6504 17.9562C34.0515 18.7792 34.0432 18.9191 34.4775 21.2381C34.9815 23.9326 35.1222 24.6282 36.7125 32.3131C37.4549 35.8995 38.1115 39.0929 38.1715 39.4093L38.2812 39.983L37.9891 39.83C37.6184 39.6284 37.0735 39.2691 34.1722 37.3088C30.6942 34.9563 29.9764 34.5663 29.1132 34.5576C28.6732 34.551 28.5642 34.5865 27.9426 34.9173C27.1402 35.3481 26.9264 35.5785 26.6799 36.2817C26.4582 36.9114 26.3709 37.6155 26.2827 39.4293C26.1901 41.3253 26.1105 42.0479 25.9981 42.0107C25.9082 41.9833 24.6918 40.5319 23.2116 38.7589C20.185 35.1436 18.2663 32.8959 17.812 32.434C17.4368 32.0543 16.8033 31.882 15.9293 31.9137C15.4365 31.9352 15.2505 31.9815 14.8323 32.2041C14.3972 32.4327 14.283 32.5717 13.9276 33.0167C13.2545 33.9393 13.2538 33.9096 13.7494 36.8147C14.5718 41.6415 16.232 50.8589 16.8296 53.9159C16.9529 54.5576 17.055 55.103 17.057 55.1208C17.057 55.1208 16.9826 55.2356 16.8712 55.2949C16.4959 55.4946 15.7007 55.0638 13.2769 53.3573C9.79555 50.9065 6.79004 48.0505 4.94253 45.4361C4.30535 44.5358 2.30354 40.7746 1.91959 39.7591C0.631312 36.3489 0.295613 32.0336 1.02099 28.2032C2.10055 22.5033 5.67156 17.233 10.6047 14.0596C12.532 12.8156 15.775 11.5411 18.2563 11.0452C20.6471 10.5674 23.7274 10.5963 26.5313 11.1237C27.9813 11.3965 30.0416 12.0397 31.2232 12.59C32.2659 13.0758 32.7357 13.26 32.8184 13.216C32.8184 13.216 32.9246 12.8359 32.991 12.4092C33.8439 6.96912 36.1689 2.60121 40.1321 -1.00483C41.5262 -2.27359 42.0429 -2.61631 44.4489 -3.89686C46.7661 -5.12938 47.1195 -5.24299 48.9706 -5.74656C55.4079 -7.39302 61.8724 -6.18761 67.1805 -2.3507C68.5455 -1.36376 69.5731 -0.445497 70.6094 0.712658C74.5016 5.06227 76.6649 11.1147 76.9638 18.4687C77.0218 19.9632 76.9946 22.0245 76.8983 23.0864L76.8352 23.7596L76.5318 23.5147C76.3619 23.3794 74.7601 22.0594 72.9667 20.5788C69.5901 17.7931 67.654 16.2394 66.8614 15.6807C66.0407 15.1001 65.1561 15.136 64.0637 15.7926C63.3989 16.2218 63.0428 16.5919 62.8572 17.1722C62.6923 17.6965 62.7615 19.5176 63.3065 28.7137C63.4304 30.803 63.5261 32.531 63.5195 32.5525C63.5195 32.5525 62.7266 32.0384 61.7747 31.3598L61.7611 31.3257Z" fill="white" fill-opacity="0.9"/>
            </svg>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <CalendarCheck className="w-5 h-5  text-cyan-600" />
            </div>
            <p className="text-sm font-medium">Total Appointments</p>
          </div>
          <div className="flex justify-between items-end mt-6 flex-wrap gap-y-1">
            <h2 className="text-xl font-bold">9,200</h2>
            <p className="text-xs text-white/80 text-right sm:text-left">
              Last week <span className="text-green-300 font-semibold">+32% ↑</span>
            </p>
          </div>
        </div>
      </Link>

      {/* Card 2 */}
      <div className="w-[450px] sm:w-auto bg-white text-gray-800 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center">
            <UserPlus className="w-5 h-5 text-white" />
          </div>
          <p className="text-sm font-medium text-cyan-600">New Patients</p>
        </div>
        <div className="flex justify-between items-end mt-6 flex-wrap gap-y-1">
          <h2 className="text-xl font-bold">1,200</h2>
          <p className="text-xs text-gray-500 text-right sm:text-left">
            Last week <span className="text-green-500 font-semibold">+20% ↑</span>
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-[450px] sm:w-auto bg-white text-gray-800 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-white" />
          </div>
          <p className="text-sm font-medium text-cyan-600">Total Doctors</p>
        </div>
        <div className="flex justify-between items-end mt-6 flex-wrap gap-y-1">
          <h2 className="text-xl font-bold">300</h2>
          <p className="text-xs text-gray-500 text-right sm:text-left">
            Last week <span className="text-red-500 font-semibold">-12% ↓</span>
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="w-[450px] sm:w-auto bg-white text-gray-800 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <p className="text-sm font-medium text-cyan-600">Canceled Appointments</p>
        </div>
        <div className="flex justify-between items-end mt-6 flex-wrap gap-y-1">
          <h2 className="text-xl font-bold">12</h2>
          <p className="text-xs text-gray-500 text-right sm:text-left">
            Last week <span className="text-red-500 font-semibold">-12% ↓</span>
          </p>
        </div>
      </div>
    </div>
  );
}
