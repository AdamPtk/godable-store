import Image from 'next/image';

import Container from '@/components/ui/container';

const AboutPage = () => {
  return (
    <Container>
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mt-6 lg:mt-0">About</h1>
        <hr className="my-4" />
        <div className="relative h-28 w-28 sm:h-48 sm:w-48 md:h-96 md:w-96 float-right m-10">
          <Image
            fill
            src="/godable-logo-2.jpeg"
            alt=""
            className="object-cover object-center"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat optio
          consectetur dolore rem veritatis voluptates ducimus reiciendis beatae
          numquam in, expedita rerum eum id architecto ratione, deserunt ab
          voluptas ipsa animi, ipsum ut! Itaque, unde. Repudiandae aliquid
          optio, tempora, reprehenderit, quaerat delectus ipsum amet dolores
          animi porro provident eligendi incidunt ex sapiente sequi impedit
          nihil itaque veniam molestias iste nobis alias magni quas a? Veritatis
          nobis placeat, enim reiciendis facilis doloremque alias iusto, vero
          culpa error quae at, mollitia sapiente non id. Earum exercitationem
          architecto voluptas voluptatum doloribus unde, distinctio reiciendis
          vero nemo optio minima veniam asperiores perferendis pariatur dolorum
          voluptates. Iure eos nam itaque omnis reprehenderit temporibus
          provident, nemo voluptas beatae necessitatibus. Sed nihil fugit quas
          architecto at molestiae ducimus, aliquid quasi dolor velit repellat
          iste sequi alias ullam repellendus quam? Repellat quia ea nemo debitis
          incidunt laudantium doloremque odit doloribus adipisci earum facilis
          porro unde magnam dignissimos et aperiam, fugiat reprehenderit
          quisquam minima placeat amet alias deserunt eaque quidem. Dolore
          corrupti nobis ratione saepe quas! Odio non vitae nam obcaecati saepe
          omnis amet consequuntur tempora reiciendis voluptatibus adipisci iure
          rem voluptatem, maxime quae in inventore. Aliquid, quo suscipit
          exercitationem deserunt praesentium voluptatem assumenda, enim at
          corporis, reprehenderit consectetur asperiores iste autem quae
          similique? Quae veniam quidem possimus deserunt natus molestiae
          excepturi quos dicta ab maxime sit maiores ipsam, sunt beatae, autem
          deleniti officiis blanditiis omnis ducimus! Exercitationem architecto
          ea unde modi fugiat quaerat nobis tempore obcaecati, vitae animi
          ducimus a veniam. Earum maiores, velit eaque natus quaerat possimus
          officiis cum vitae? Eos, corrupti incidunt? Harum, cupiditate natus.
          Molestias nisi consequuntur laborum. Odit quia impedit illum,
          perspiciatis esse ipsam error totam distinctio blanditiis expedita
          quis minima dolores. Quae labore similique necessitatibus pariatur
          laudantium porro, vitae eaque vel cumque nam enim aperiam! Velit
          placeat beatae ipsa, porro sit praesentium fugit aspernatur facere
          voluptatum adipisci et aperiam libero non labore deserunt iste, magni
          vel error sed perferendis, accusantium in eius. Commodi, voluptatem
          adipisci? Vel accusantium totam ex molestias, repudiandae tempora.
          Laudantium molestias culpa labore? Magni qui deleniti quidem
          consequuntur quisquam ullam cumque dolore esse! Ratione maiores
          temporibus incidunt sint iure animi nihil, facilis illo molestiae et,
          dicta eaque, cumque dolores. Minus iusto eius voluptatibus? Voluptate
          illum excepturi dicta expedita, non ex qui accusantium nihil. Soluta
          ex hic eos rem, aliquam, officia, et corporis adipisci totam ipsum id.
          Voluptatibus, blanditiis mollitia? Vel nemo illum qui quasi. Earum
          laborum dignissimos qui dolorum fugit!
        </p>
      </div>
    </Container>
  );
};

export default AboutPage;
