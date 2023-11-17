import React, { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";

const Locums = () => {
  const [value, setValue] = useState("1");
  const handleTabChange = (_e: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="flex flex-col items-center valid-height">
      <TabContext value={value}>
        <Box
          component="div"
          sx={{
            
            marginLeft: "auto",
            marginRight: "auto",
            transition: "all 500ms ease"
          }}
        >
          <TabList
            aria-label="Locums"
            onChange={handleTabChange}
            className="w-full flex flex-row justify-around"
          >
            <Tab label="Active Locums" value="1" />
            <Tab label="Create New Locum" value="2" />
            <Tab label="Compled Locum" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          blanditiis ut aliquid in ad expedita totam distinctio corrupti commodi
          cupiditate assumenda magnam, reprehenderit consequuntur quam dolor
          praesentium ex perferendis sed non magni laudantium! Ut tenetur
          voluptatem libero aperiam, quas, doloribus debitis dignissimos,
          assumenda sit harum consectetur expedita similique id commodi hic
          minima repellat? Dolor eius impedit ut rem non, cumque inventore
          mollitia, ipsum id accusamus nulla recusandae doloribus iure
          architecto sint. Sequi fugit corrupti esse! Sit beatae ducimus
          pariatur doloribus dicta possimus, delectus ab quos veritatis
          inventore harum laborum aspernatur iure magni. Nostrum perferendis
          harum tenetur dolor amet sunt veritatis maxime voluptatum placeat,
          suscipit optio, ipsa et ea, iste blanditiis esse repellat obcaecati
          libero iure! Earum praesentium doloremque asperiores distinctio. A
          illo aut neque pariatur deleniti omnis architecto repudiandae modi
          assumenda eveniet, voluptatibus maxime eaque at dolores alias, ad
          reprehenderit ipsam nostrum? Ducimus mollitia inventore veritatis
          maxime? Veniam corporis quod, atque possimus recusandae, esse ratione
          nisi eum doloremque laborum fugiat. Reiciendis illo corrupti
          voluptates quidem molestias veniam ipsum in itaque maiores hic
          recusandae, delectus magnam, corporis voluptas. Dolorum sunt iure
          explicabo nulla voluptatibus reiciendis hic sit unde animi numquam
          quos quibusdam odio tenetur voluptatum laboriosam perferendis porro,
          harum distinctio dolore.
        </TabPanel>
        <TabPanel value="2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          incidunt fuga voluptatum aut quibusdam, corrupti, autem animi facilis
          at illum ratione commodi saepe sunt nihil provident ullam placeat? A,
          blanditiis! Similique eum impedit corrupti minima. Porro fugiat quis
          consectetur nostrum praesentium quae veritatis laudantium, aliquam
          dolorem illo rem necessitatibus optio ab nesciunt suscipit facilis
          tenetur id voluptatem, totam ipsam corporis quaerat. Animi,
          consequatur. Est odio ex doloremque autem quisquam vitae dignissimos
          animi a sed magni deserunt repellat cum culpa ut quis corrupti
          numquam, reprehenderit accusantium perferendis veniam repellendus
          magnam placeat rem. Beatae dolorum iusto, dolore maiores at aliquam
          dolor doloremque aut ipsum, voluptates sapiente minima unde, veritatis
          vero? Sed aperiam, quas amet consectetur ratione quaerat quasi velit,
          nisi quis a maxime dolores molestiae animi corporis possimus dolorem
          adipisci incidunt omnis repudiandae aspernatur! Nemo explicabo
          doloremque, perferendis molestias harum dolorum accusantium sed
          corrupti quidem, blanditiis distinctio, quasi id? Doloremque dolores
          consequuntur rerum soluta pariatur ipsa, inventore dicta fugit iure.
          Esse sint illo voluptatibus minima, ad reprehenderit dolorem omnis,
          odio aspernatur soluta voluptatum at iusto dignissimos rem voluptatem
          architecto itaque ipsam accusantium? Accusamus quas nesciunt libero
          debitis laudantium corrupti odio obcaecati, suscipit tempora soluta,
          expedita voluptas labore perferendis totam corporis! Quod, assumenda!
        </TabPanel>
        <TabPanel value="3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          nihil expedita sed possimus dicta eaque, voluptate asperiores laborum
          tempora animi placeat error? Beatae, dolorem sit. Officia ratione
          nostrum reiciendis culpa optio recusandae voluptatum eligendi aut amet
          a magnam, cupiditate, hic ducimus repellendus veritatis tempora vero!
          Voluptates hic esse, ducimus adipisci laboriosam ex odio doloribus
          praesentium autem sequi earum aut fugiat tempora labore cum? Nobis
          libero inventore nostrum dolorem illum perferendis, harum maiores
          dolorum necessitatibus laudantium voluptatibus fugit explicabo
          eligendi. Mollitia voluptates quibusdam sunt possimus, qui, cum
          dolorum iste placeat hic, voluptatibus necessitatibus nam. Quis
          voluptate tempore vero rem est non corrupti necessitatibus temporibus
          minus sunt, ipsam vel earum ab, nulla sed enim reiciendis? Praesentium
          eos saepe rerum sapiente perferendis laboriosam corporis similique
          expedita atque nulla veniam doloribus officiis iusto optio commodi
          aperiam, pariatur blanditiis quaerat laborum error culpa autem eaque
          possimus vero. Architecto quidem consectetur unde at ipsum animi
          cumque sit mollitia asperiores. Tenetur animi eum nobis saepe porro
          iste odio quidem impedit dolores dolorum quos laudantium pariatur,
          voluptates necessitatibus quaerat magnam eius eos eligendi ipsum quo
          mollitia, sit modi totam accusantium. Mollitia nisi accusantium iste
          fugit sit suscipit dolores recusandae dignissimos ducimus. Rerum
          commodi vitae nihil. Deserunt, recusandae itaque?
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default Locums;
