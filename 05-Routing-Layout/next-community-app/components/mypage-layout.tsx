import Header from "@/components/header";
import Footer from "@/components/footer";

const MypageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MypageLayout;
