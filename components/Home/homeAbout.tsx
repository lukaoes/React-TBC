import Link from "next/link";

const HomeAbout = () => {
  return (
    <div className="h">
      <div className="home-about-us">
        <h3>
          რას აკეთებს <span>ეზოეზო</span>
        </h3>
        <div className="home-about-us-container">
          <div className="home-about-us-types">
            <div>
              <h4>აღჭურვილობა</h4>
              <p>
                <span>ეზოეზო</span> გაძლევთ საშუალებას იყიდოთ და იქირაოთ დღიურად
                სალაშქრო და საპიკნიკე აღჭურვილობა. ასევე გაყიდოთ და გააქირაოთ
                საკუთარი ნივთები.
              </p>
              <Link href="/products">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_45_18679)">
                    <path
                      d="M9.395 2.84912L8.8129 3.50763L13.933 8.03367H0.5V8.91258H13.933L8.8129 13.4386L9.395 14.0971L15.5 8.7005V8.24575L9.395 2.84912Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_45_18679">
                      <rect
                        width="15"
                        height="15"
                        fill="white"
                        transform="translate(0.5 0.973145)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                ყველა პროდუქცია
              </Link>
            </div>
            <div>
              <h4>საპიკნიკე</h4>
              <p>
                <span>ეზოეზო</span> გაძლევთ იაფად მოგზაურობის საშუალებას
                საქართველოს ყველა წერტილში. თქვენ შეგიძლიათ სხვისი ეზოს ქირაობა
                დღიურად ან საკუთარის გაქირავება.
              </p>
              <Link href="/campsites">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_45_18679)">
                    <path
                      d="M9.395 2.84912L8.8129 3.50763L13.933 8.03367H0.5V8.91258H13.933L8.8129 13.4386L9.395 14.0971L15.5 8.7005V8.24575L9.395 2.84912Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_45_18679">
                      <rect
                        width="15"
                        height="15"
                        fill="white"
                        transform="translate(0.5 0.973145)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                ყველა საპიკნიკე ადგილი
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
