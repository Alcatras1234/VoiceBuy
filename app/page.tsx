import { WhyWeCards } from "@/components/shared/whywe";
import { AspectRatioDemo } from "../components/shared/aspectratio";
import { CustomProducts } from "../components/shared/products";
import { EmailFormWithButton } from "../components/shared/form";
import { Footer } from "@/components/shared/footer";



export default function Home() {
  return (
    <>
      <AspectRatioDemo />
      <WhyWeCards />
      <CustomProducts />
      <EmailFormWithButton />
      <Footer />
    </>
  );
}
