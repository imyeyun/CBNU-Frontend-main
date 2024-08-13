import Link from "next/link";
const Header = () => {
  return (
    <div className="flex bg-gray-400 m-1 p-1">
      <div className="w-8/12 mt-4 px-4">
        <Link href="/">HOME</Link>|<Link href="/login">로그인</Link>|
        <Link href="/regist">회원가입</Link>|
        <Link href="/mypage/profile">프로필</Link>|
      </div>
    </div>
  );
};

export default Header;
