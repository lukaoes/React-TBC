import Link from "next/link";

const HomeRoadmap = () => {
  return (
    <div>
      <div className="home-roadmap-container">
        <h2>პოპულარული სექციები</h2>
        <div className="home-roadmap-sections">
          <Link href="/products">
            <div>
              <h2>პროდუქტები</h2>
              <p>
                აღიჭურვე შემდეგი ბუნებაში გასვლისთვის. იყიდე, იქირავე ან გაყიდე
                სასურველი ნივთი.
              </p>
            </div>
          </Link>
          <Link href="/campsites">
            <div>
              <h2>საპიკნიკე ადგილები</h2>
              <p>
                მოძებნე საპიკნიკე ადგილი ბუნებასთან ახლოს. იქირავე ან გააქირავე
                ეზო.
              </p>
            </div>
          </Link>
          <Link href="/blog">
            <div>
              <h2>ბლოგი</h2>
              <p>
                მიიღე ცოდნა სასურველ საკითხზე ჩვენი ბლოგების საშუალებით.
                მოძებნეთ ან დაამატეთ ბლოგები.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeRoadmap;
