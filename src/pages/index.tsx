import { Box } from "@/components/Box/Box";
import { DevPlaceholder } from "@/components/DevPlaceholder/DevPlaceholder";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>e1ri</title>
      </Head>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <DevPlaceholder /> */}
        <div style={{ width: "400px", paddingTop: "100px" }}>
          <Box title="text only">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              repellat in provident fugit hic nihil debitis aliquam accusamus
              rem animi, dignissimos itaque vitae obcaecati magnam. Inventore
              sit voluptatum alias veritatis? Commodi enim voluptates, nesciunt
              laborum totam repellendus inventore praesentium delectus dolorem
              sapiente voluptate est eveniet quibusdam ad. Ratione, tempora enim
              itaque, ab dolorum aut culpa sunt quia impedit ducimus ipsa! Nobis
              earum laborum beatae porro iste nisi ad ea a error illo illum
              omnis repellendus eligendi sunt, aperiam suscipit sapiente
              exercitationem consequatur dolor? Provident aut asperiores,
              similique praesentium veniam eos. Dicta excepturi facere
              temporibus expedita inventore omnis nobis praesentium blanditiis
              commodi aperiam molestiae ea sed eveniet veniam, saepe eligendi
              animi nisi est numquam optio? Velit inventore nihil eos commodi
              modi. Corrupti mollitia esse id excepturi quidem ipsum deleniti
              omnis perferendis tenetur sed, aspernatur vel eligendi quisquam
              quod adipisci, cum enim facilis quos consequatur tempora voluptas
              vero, velit perspiciatis tempore. Enim? Eligendi officiis quis in
              quia sint voluptatum dolor odit fugit, tenetur architecto omnis
              doloribus. Veniam nisi autem neque eaque sint laudantium, officia
              assumenda iusto maxime mollitia sit minima. Repellat, pariatur?
            </p>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Home;
