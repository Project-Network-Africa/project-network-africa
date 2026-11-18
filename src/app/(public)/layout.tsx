// import Navbar from "@/src/components/layout/Navbar";
// import Footer from "@/src/components/layout/Footer";

// export default function PublicLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <>
//       <Navbar />

//       <main className="pt-[64px] lg:pt-[98px]">{children}</main>

//       <Footer />
//     </>
//   );
// }


import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import GridBackground from "@/src/components/ui/GridBackground";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <GridBackground>
        <main className="pt-[64px] lg:pt-[98px]">
          {children}
        </main>
      </GridBackground>

      <Footer />
    </>
  );
}