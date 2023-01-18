import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Homepage = () => {
  const [omg, setOmg] = useState([]);
  const [grandBrand, setGrandBrand] = useState([]);
  const [brandsToBag, setBrandsToBag] = useState([]);
  const [budgetBuys, setBudgetBuys] = useState([]);
  const [shopByCategory, setShopByCategory] = useState([]);

  const getOmgDeals = () => {
    axios
      .get(`https://wadrobe.onrender.com/omgDeals`)
      .then((res) => {
        setOmg(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getGrandBrands = () => {
    axios
      .get(`https://wadrobe.onrender.com/grandbrand`)
      .then((res) => {
        setGrandBrand(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getBrandsToBag = () => {
    axios
      .get(`https://wadrobe.onrender.com/brandstobag`)
      .then((res) => {
        setBrandsToBag(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getBudgetBuys = () => {
    axios
      .get(`https://wadrobe.onrender.com/budgetbuys`)
      .then((res) => {
        setBudgetBuys(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getShopByCategory = () => {
    axios
      .get(`https://wadrobe.onrender.com/shopbycategory`)
      .then((res) => {
        setShopByCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getOmgDeals();
    getGrandBrands();
    getBrandsToBag();
    getBudgetBuys();
    getShopByCategory();
  }, []);

  return (
    <Box>
      <Text>Myntra clone is in progress</Text>
      <Image
        width={"93vw"}
        margin={"auto"}
        src="https://user-images.githubusercontent.com/110033104/213152925-02dc5b9f-acc6-4a8a-858b-a73336076f7f.png"
        alt="home"
      />
      <Image
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/3d8b5917-e115-425b-8c93-2c2e427f9d4f1673517461716-OMG-Deal--2-.jpg"
        alt=""
      />

      <Grid templateColumns="repeat(10, 1fr)">
        {omg?.map((el) => {
          return (
            <Box>
              <Image src={el.image} alt="omg" />
            </Box>
          );
        })}
      </Grid>
      <Image
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/e78ea5f5-8bcc-43e2-afce-529b95a166081673517538108-Grand-Brands.jpg"
        alt=""
      />
      <Grid templateColumns="repeat(10, 1fr)">
        {grandBrand?.map((el) => {
          return (
            <Box>
              <Image src={el.image} alt="grandBrand" />
            </Box>
          );
        })}
      </Grid>
      <Image
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/1c508dcd-ee9f-4485-81a5-71d97bf512e31673517538088-Brands-To-Bag.jpg"
        alt=""
      />
      <Grid templateColumns="repeat(9, 1fr)">
        {brandsToBag?.map((el) => {
          return (
            <Box>
              <Image src={el.image} alt="brandsToBag" />
            </Box>
          );
        })}
      </Grid>
      <Image
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/11/2eb7efa2-1743-43b4-94c0-8b634d1be9af1673439896772-Budget-Buys--3-.jpg"
        alt=""
      />

      <Grid templateColumns="repeat(8, 1fr)">
        {budgetBuys?.map((el) => {
          return (
            <Box>
              <Image src={el.image} alt="budgetBuys" />
            </Box>
          );
        })}
      </Grid>
      <Image
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/11/ba62da25-d69a-441f-a639-4bd08534f3451673416953973-Shop-By-Category--2-.jpg"
        alt=""
      />
      <Grid templateColumns="repeat(6, 1fr)">
        {shopByCategory?.map((el) => {
          return (
            <Box>
              <Image src={el.image} alt="shopByCategory" />
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Homepage;
