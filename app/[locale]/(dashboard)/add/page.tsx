import Link from "next/link";
import camping from "../../../../public/assets/images/camping.png";
import shopping from "../../../../public/assets/images/shopping.png";
import Image from "next/image";

const Add = () => {
  return (
    <div className="add-layout">
      <div className="add-container">
        <Link href="/add/product">
          <div>
            <h2>პროდუქტის გაყიდვა ან გაქირავება</h2>
            <p>
              გაყიდე ან გააქირავე საკუთარი პროდუქცია. თუ გაქვთ ბუნებასთან
              კავშირში მქონე ნივთები, ტანსაცმელი, ფეხსაცმელი, აღჭურვილობა და
              ა.შ. შეგიძლიათ განათავსოთ ჩვენს ვებ-გვერდზე გასაყიდათ, ან
              გააქირაოთ თქვენი ნივთები დღიურად.
            </p>
          </div>
          <Image
            src={shopping}
            alt="shopping"
            width={400}
            height={350}
            style={{ width: "100%", height: "auto" }}
          />
        </Link>
        <Link href="/add/campsite">
          <div>
            <h2>საპიკნიკე ადგილის გაქირავება</h2>
            <p>
              აქვს თქვენ სახლს ეზო და გსურთ მიიღოთ დამატებითი შემოსავალი? მაშინ
              განათავსეთ თქვენი სივრცე დღიურად გასაქირავებლად, სადაც მსურველებს
              შეეძლებათ დაბანაკდნენ, გაშალონ კარვები, დააყენონ მანქანები და
              მოიწყონ პიკნიკი.
            </p>
            <Image
              src={camping}
              alt="camping"
              width={400}
              height={350}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Add;
